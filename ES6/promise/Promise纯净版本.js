(function (window) {
  const PENDING = 'pending'
  const RESOLVED = 'resolved'
  const REJECTED = 'rejected'

  function Promise (executor) {
    const _this = this
    _this.status = PENDING
    _this.data = undefined
    _this.callbacks = []

    function resolve (value) {
      if (_this.status !== PENDING) return
      _this.status = RESOLVED
      _this.data = value
      if (_this.callbacks.length > 0) {
        setTimeout(() => {
          _this.callbacks.forEach(callbacksObj => {
            callbacksObj.onResolved(value)
          })
        }, 0)
      }
    }

    function reject (reason) {
      if (_this.status !== PENDING) {
        return
      }
      _this.status = REJECTED
      _this.data = reason
      if (_this.callbacks.length > 0) {
        setTimeout(() => {
          _this.callbacks.forEach(callbacksObj => {
            callbacksObj.onRejected(reason)
          })
        }, 0)
      }
    }
    try {
      executor(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }

  Promise.prototype.then = function (onResolved, onRejected) {
    const _this = this
    return new Promise((resolve, reject) => {
      if (_this.status === RESOLVED) {
        setTimeout(() => {
          try {
            onResolved(_this.data)
          } catch (error) {
            reject(error)
          }
        }, 0)
      } else if (_this.status === REJECTED) {

      } else {

      }
    })
  }

  Promise.prototype.catch = function (onRejected) {
    return this.then(undefined, onRejected)
  }
})(window)