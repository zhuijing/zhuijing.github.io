#!/usr/bin/env node
const util = require('util');
const fs = require('fs')
const exec = util.promisify(require('child_process').exec);
const path = require('path')
const {Buffer} = require('buffer')
const {
    Readable
} = require('stream');

var MarkdownIt = require('markdown-it'),
    md = new MarkdownIt();
const dayjs = require('dayjs')
const fileStatusMap = {
    "D": "🔥",
    "??": "✨",
    "M": "📝"
}

function getToday() {
    return dayjs().format('YYYY-MM-DD')
}
const shouldHandlersType = ["??", "M"]
async function getFiles() {
    const {
        stdout,
        stderr
    } = await exec('git status -s');
    return stdout.split('\n').slice(0, -1).map(item => {
        const file = item.split(/(?=\s)/)
        return {
            fileStatus: file[0].replace(/\s/g, ''),
            filePath: file[1].replace(/\s/g, '')
        }
    })
}
async function getFilterFiles(files) {
    // 过滤新增 修改的文件

    const filterFiles = files.filter(item => {
        return shouldHandlersType.includes(item.fileStatus) && item.filePath.indexOf('.md') > -1 && item.filePath.indexOf('README.md') === -1
    })
    const newFiles = []
    while (filterFiles.length) {
        const item = filterFiles.shift()
        item.title = await getReadmeTitle(item.filePath)
        newFiles.push(item)
    }
    return newFiles
}

function parseMd(filePath) {
    const fileData = fs.readFileSync(filePath).toString()
    const result = md.parse(fileData, {})
    return result
}

function getReadmeTitle(filePath) {
    const absoluteFilePath = getPath(filePath)
    const result = parseMd(absoluteFilePath)
    return result[1]?.content
}

function getPath(filePath, ext = []) {
    return path.resolve(__dirname, filePath, ...ext)
}
async function changeFileDirReadme(files) {
    // 目录下只记载新增
    // 每次新增文件都在当前文件对的目录下的reame加入入口地址
    const addedFiles = files.filter(item => {
        return item.fileStatus === '??'
    })
    while (addedFiles.length) {
        const item = addedFiles.shift()
        fs.writeFileSync(getPath(item.filePath, ['../', 'README.md']), `\n- [${item.title}](/${item.filePath})`, {
            flag: 'a+'
        })
    }

}
// 流方式实现
/* async function changeRootDirReadme(files) {
    const arr = ["# 更新记录", '\n', `## ${getToday()}`]
    files.forEach(item => {
        arr.push(`\n### [${fileStatusMap[item.fileStatus]} ${item.title}](/${item.filePath})`)
    });
    arr.push('\n');
    const readStream = fs.createReadStream(getPath('README.md'))
    
    // const writeStream = fs.createWriteStream(getPath('README.md'),{
    //     flags: 'a'
    // })
    // const readable = Readable.from(arr);
    // readable.pipe(writeStream)
    // readable.on('end', () => {
    //         const readStream = fs.createReadStream(getPath('README.md'))
    //         const writeStream = fs.createWriteStream(getPath('README1.md'),{
    //             flags: 'a+'
    //         })
    //         readStream.pipe(writeStream)
    // })
}
 */
async function changeRootDirReadme(files) {
    const arr = [`## ${getToday()}`]
    files.forEach(item => {
        arr.push(`\n### ${fileStatusMap[item.fileStatus]} [${item.title}](/${item.filePath})`)
    });
    arr.push('\n');
    const buffer = Buffer.from(arr.join(''))
    const readData = fs.readFileSync(getPath('README.md'))
    fs.writeFileSync(getPath('README.md'), Buffer.concat([buffer, readData]))
}
async function addChangeLog() {
    const files = await getFiles()
    const shuldHandlerFiles = await getFilterFiles(files)
    console.log('shuldHandlerFiles', shuldHandlerFiles)
    await changeFileDirReadme(shuldHandlerFiles)
    changeRootDirReadme(shuldHandlerFiles)
}
(async function() {
 await addChangeLog()
 await exec('npm run build')
 await exec('git add .')
 await exec(`git commit -m ${getToday()}`)
 await exec('git push')
})()