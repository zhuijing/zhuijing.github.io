// Dep 被观察者： dep.depend()收集依赖，也就是收集watcher，触发更新dep.notify();
// Watcher 观察者：一个组件对应一个watcher，当收到通知的时候调用 watcher.update
// Observer 在对数据进行 Object.defineProperty 定义dep，当触发数据的getter时将Dep和Watcher进行关联操作


var vm = new Vue({
    el:'#app',
    data() {
        return {
            name: '1'
        }
    },
    created() {
        setTimeout(()=>{
            this.name = 2
        },3000)
    },
})

/** initState 
 * 该过程执行之后data的name 变成了
 * {
 *      name: 1,
 *      __ob__: new Observer()
 * }
 * 
 */
function initState (vm) {
    vm._watchers = [];
    initData(vm)
}
function initData (vm){
    // data = {name:1}
    observe(data, true /* asRootData */);
}
function observe(value, asRootData) {
    // value = {name:1}
    ob = new Observer(value);
    return ob
}

function Observer (value){
    this.value = value;
    this.dep = new Dep();
    // value = {name:1,__ob__: new Observer() }
    def(value, '__ob__', this);
    this.walk(value);
}
Observer.prototype.walk = function walk (obj) {
    // obj = {name:1,__ob__: new Observer() }
    var keys = Object.keys(obj); // [name]
    for (var i = 0; i < keys.length; i++) {
     // defineReactive(obj, 'name')
      defineReactive(obj, keys[i]);
    }
};
function defineReactive (obj,key, val, customSetter,shallow ) {
// obj = {name:1,__ob__: new Observer() }
// key = name
// val customSetter shallow 都是undefined

    var dep = new Dep();
    val = obj[key]; // obj[name] = 1

    var childOb = !shallow && observe(val);

    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: function reactiveGetter () {
          var value = getter ? getter.call(obj) : val;
          if (Dep.target) {
            dep.depend();
          }
          return value
        },
        set: function reactiveSetter (newVal) {
          var value = getter ? getter.call(obj) : val;
          /* eslint-disable no-self-compare */
          if (newVal === value || (newVal !== newVal && value !== value)) {
            return
          }
          /* eslint-enable no-self-compare */
          if ( customSetter) {
            customSetter();
          }
          // #7981: for accessor properties without setter
          if (getter && !setter) { return }
          if (setter) {
            setter.call(obj, newVal);
          } else {
            val = newVal;
          }
          childOb = !shallow && observe(newVal);
          dep.notify();
        }
    });
}
    
    

// 组件挂载
function mountComponent (){
    callHook(vm, 'beforeMount');
    var updateComponent;
    updateComponent = function () {
        vm._update(vm._render(), hydrating);
    };
    new Watcher(vm, updateComponent, noop, {
        before: function before () {
          if (vm._isMounted && !vm._isDestroyed) {
            callHook(vm, 'beforeUpdate');
          }
        }
    }, true);
    callHook(vm, 'mounted');
    return vm
}
   
var Watcher = function Watcher (
    vm,
    expOrFn,
    cb,
    options,
    isRenderWatcher
  ) {
    this.vm = vm;
    vm._watcher = this;
    vm._watchers.push(this);
    this.before = options.before;
    this.cb = cb;
    this.id = ++uid$1; // uid for batching
    this.active = true;
    this.dirty = this.lazy; // for lazy watchers
    this.deps = [];
    this.newDeps = [];
    this.depIds = new _Set();
    this.newDepIds = new _Set();
    this.expression =  expOrFn.toString()

    // expOrFn = function () {
    //     vm._update(vm._render(), hydrating);
    // };
    this.getter = expOrFn;

    this.value = this.lazy
      ? undefined
      : this.get();
}

Watcher.prototype.get = function get () {
    pushTarget(this);
    var value;
    var vm = this.vm;
    value = this.getter.call(vm, vm);
    // 执行 vm._update(vm._render(), hydrating);


    popTarget();
    this.cleanupDeps();
    return value
};
    
// 执行 vm._update(vm._render(), hydrating);
// vm._render()
// (function anonymous() {
//     with(this){return _c('div',{attrs:{"id":"app"}},[_v(_s(name))])}
// })
// 触发this.name
// 执行 dep.depend();
// 执行 Dep.target.addDep(this), Dep.target 此时是watcher实例， this是dep的实例
// 执行 this.newDepIds.add(id); // this就是watcher的实例
// 执行 this.newDeps.push(dep); 
//  dep.addSub(this); // this是watcher的实例
// 


//  更新

// this.name = 2
// 触发了setter函数
// dep.notify()
// subs[i].update(); // subs 每一项都是vue实例对应的唯一的watcher
// 那么就触发了watcher.update
// queueWatcher(this); this就是watcher的实例
// 
var MAX_UPDATE_COUNT = 100;
var callbacks = [];
var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

function queueWatcher(watcher) {
    var id = watcher.id;
    queue.push(watcher);
    nextTick(flushSchedulerQueue);
}

function nextTick (cb, ctx) {
    callbacks.push(function () {
        cb.call(ctx);
    });
    if (!pending) {
      pending = true;
      timerFunc();
    }
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
      return new Promise(function (resolve) {
        _resolve = resolve;
      })
    }
  }

  timerFunc = function () {
    p.then(flushCallbacks);
  }

  function flushCallbacks () {
    pending = false;
    var copies = callbacks.slice(0);
    callbacks.length = 0;
    for (var i = 0; i < copies.length; i++) {
      copies[i](); // 也就是 flushSchedulerQueue
    }
  }


  function flushSchedulerQueue () {
    currentFlushTimestamp = getNow();
    flushing = true;
    var watcher, id;

    // Sort queue before flush.
    // This ensures that:
    // 1. Components are updated from parent to child. (because parent is always
    //    created before the child)
    // 2. A component's user watchers are run before its render watcher (because
    //    user watchers are created before the render watcher)
    // 3. If a component is destroyed during a parent component's watcher run,
    //    its watchers can be skipped.
    queue.sort(function (a, b) { return a.id - b.id; });

    // do not cache length because more watchers might be pushed
    // as we run existing watchers
    for (index = 0; index < queue.length; index++) {
      watcher = queue[index];
      if (watcher.before) {
        watcher.before(); // 执行beforeUpdate钩子
      }
      id = watcher.id;
      has[id] = null;
      watcher.run();
      // in dev build, check and stop circular updates.
    }

    // keep copies of post queues before resetting state
    var activatedQueue = activatedChildren.slice();
    var updatedQueue = queue.slice();

    resetSchedulerState();

    // call component updated and activated hooks
    callActivatedHooks(activatedQueue);
    callUpdatedHooks(updatedQueue);

    // devtool hook
    /* istanbul ignore if */
    if (devtools && config.devtools) {
      devtools.emit('flush');
    }
  }
