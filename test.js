const waitFor = require('./index');

waitFor.wait('command', (res) => console.log(111));
waitFor.wait('command').then((res) => console.log(222, res));

setTimeout(() => waitFor.finish('command', '123'), 100);