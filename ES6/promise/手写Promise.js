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
          _this.callbacks.forEach(item => {
            item.onResolved(value)
          })
        }, 0)
      }
    }

    function reject (reason) {
      if (_this.status !== PENDING) return
      _this.status = REJECTED
      _this.data = reason
      if (_this.callbacks.length > 0) {
        setTimeout(() => {
          _this.callbacks.forEach(item => {
            item.onRejected(reason)
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
    if (typeof onResolved !== 'Function') {
      onResolved = reason => {
        throw reason
      }
    }
    if (typeof onResolved !== 'Function') {
      onResolved = value => value
    }
    _this = this
    return new Promise((resolve, reject) => {
      function handle (callback) {
        try {
          let result = callback(_this.data)
          if (result instanceof Promise) {
            result.then(resolve, reject)
          } else {
            resolve(result)
          }
        } catch (error) {
          reject(error)
        }
      }
      if (_this.status === RESOLVED) {
        setTimeout(() => {
          handle(onResolved)
        }, 0)
      } else if (_this.status === REJECTED) {
        setTimeout(() => {
          handle(onRejected)
        }, 0)
      } else {
        _this.callbacks.push({
          onResolved () {
            handle(onResolved)
          },
          onRejected () {
            handle(onRejected)
          }
        })
      }
    })
  }
  Promise.prototype.catch = function (onRejected) {
    return this.then(undefined, onRejected)
  }
  Promise.resolve = function (value) {

  }
  Promise.reject = function (reason) {

  }
  Promise.all = function (promises) {

  }
  Promise.race = function (promises) {

  }
  window.Promise = Promise
})(window)