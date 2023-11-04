const DictionaryOfPoints = {
    3: [10],
    4: [14, 46],
    5: [8, 15, 45, 47],
    7: [9, 21],
    8: [9, 5],
    9: [7, 8],
    10: [3, 11, 16, 45],
    11: [10, 14, 20],
    14: [4, 11, 15, 40],
    15: [5, 14, 45],
    16: [10, 11, 29, 33, 45],
    17: [22, 23],
    18: [21, 28, 32, 48],
    19: [20, 40],
    20: [11, 19, 34],
    21: [7, 18],
    22: [17, 33],
    23: [17, 28],
    28: [18, 23, 29],
    29: [16, 28],
    32: [18, 45],
    33: [16, 22],
    34: [20],
    40: [14, 19],
    45: [5, 10, 15, 16, 32],
    46: [4, 47],
    47: [5, 46],
    48: [18]
  }
const getTrils =  function(start, end, obj, path) {
        // 判断起点和终点是不是同一个
        if (start === end) {
            return [path]
        }
        // 走到了没有点
        if (path.length === Object.keys(obj).length + 1) {
            return [[]]
        }
        // 没有起点 
        if (obj[start] == null) {
            return [[]]
        }
        return obj[start]
            .filter(a => {
                return !path.includes(a)
            }).map(a => {
                return getTrils(a, end, obj, [...path, a])
            })
            .flat()
            .filter(a => {
                return a.length !== 0
            })
}
// console.log(getTrils(3, 21, DictionaryOfPoints, [3]));
console.log(getTrils(3, 10, DictionaryOfPoints, [3]));
