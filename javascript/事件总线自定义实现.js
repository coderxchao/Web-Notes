class XCEventBus {
  constructor() {
    this.eventBus = {};
  }

  on(eventName, eventCallback, thisArg) {
    // 获取相应事件的数组合集，因为同一个事件类型可能会被on注册多次，所以需要存数组
    let handlers = this.eventBus[eventName]
    if (!handlers) {
      // 如果没有获取到相应的事件合集，则先创建并赋值给eventBus中对应的eventName属性
      handlers = [];
      this.eventBus[eventName] = handlers;
    }
    // 将对应的事件回调存放到数组合集中
    handlers.push({
      eventCallback,
      thisArg
    })
  }

  emit(eventName, ...payload) {
    let handlers = this.eventBus[eventName];
    if (!handlers) return;
    handlers.forEach(handler => {
      handler.eventCallback.apply(handler.thisArg, payload);
    });
  }

  off(eventName, eventCallback) {
    const handlers = this.eventBus[eventName]
    if (!handlers) return
    const newHandlers = [...handlers]
    for (let i = 0; i < newHandlers.length; i++) {
      const handler = newHandlers[i]
      if (handler.eventCallback === eventCallback) {
        const index = handlers.indexOf(handler)
        handlers.splice(index, 1)
      }
    }
  }
}

let eventBus = new XCEventBus();
eventBus.on("abc", function () {
  console.log("监听abc1", this)
}, { name: "why" })

const handleCallback = function () {
  console.log("监听abc2", this)
}
eventBus.on("abc", handleCallback, { name: "why" })

// utils.js
eventBus.emit("abc", 123)

// 移除监听
eventBus.off("abc", handleCallback)
eventBus.emit("abc", 123)