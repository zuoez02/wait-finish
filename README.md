# Wait-finish

listen and excute event, whatever which called first.

## Usage

Run the demo in `test.js`.

### Listen
```javascript
// 1. callback
const { wait } = require('wait-finish');
wait('eventName', (result) => console.log(result));
// 2. promise
const { wait } = require('wait-finish');
wait('eventName').then((result) => console.log((result)));
```

### Finish
```javascript
const { finish } = require('finish');

finish('eventName', 'Hello World');
```


