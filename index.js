const g = typeof window === 'undefined' ? global : window;

const newPromiseWithResolve = () => {
    let re;
    const promise = new Promise((resolve) => {
        re = resolve;
    });
    return { resolve: re, promise };
}

const wait = (event, callback) => {
    if (!g._waitList) {
        g._waitList = {};
    }
    if (!g._waitList[event]) {
        const { resolve, promise } = newPromiseWithResolve();
        g._waitList[event] =  { promise, resolve };
        callback && promise.then(callback);
        return promise;
    } else {
        const { promise } = g._waitList[event];
        callback && promise.then(callback);
        return promise;
    }
}

const finish = (event, result) => {
    if (!g._waitList) {
        g._waitList = {};
    }
    if (!g._waitList[event]) {
        const { resolve, promise } = newPromiseWithResolve();
        g._waitList[event] =  { promise, resolve };
        resolve(res);
    } else {
        const { resolve } = g._waitList[event];
        resolve(result);
    }
}

const waitFor = { wait, finish };

module.exports = waitFor;
