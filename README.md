# time-to-ms

![npm](https://img.shields.io/npm/v/@tgxd/time-to-ms?color=red&logo=npm)
![npm](https://img.shields.io/npm/dt/@tgxd/time-to-ms?color=blue)

## Installation

### npm

```
npm install @tgxd/time-to-ms
```

### git

```
git clone https://github.com/ToxicGamerXD/time-to-ms.git
```

## Example Usage

### Convert Seconds to Milliseconds

```javascript
const time_to_ms = require("@tgxd/time-to-ms")

console.log(time_to_ms({seconds: 30}))
// -> 30.000 (milliseconds)
```

### Convert Minutes to Milliseconds

```javascript
const time_to_ms = require("@tgxd/time-to-ms")

console.log(time_to_ms({minutes: 5}))
// -> 300.000 (milliseconds)
```

### Convert Hours to Milliseconds

```javascript
const time_to_ms = require("@tgxd/time-to-ms")

console.log(time_to_ms({hours: 1}))
// -> 3.600.000 (milliseconds)
```

### Convert Days to Milliseconds

```javascript
const time_to_ms = require("@tgxd/time-to-ms")

console.log(time_to_ms({days: 3}))
// -> 259.200.000 (milliseconds)
```

### Convert Weeks to Milliseconds

```javascript
const time_to_ms = require("@tgxd/time-to-ms")

console.log(time_to_ms({weeks: 1}))
// -> 604.800.000 (milliseconds)
```

### Convert Months to Milliseconds

```javascript
const time_to_ms = require("@tgxd/time-to-ms")

console.log(time_to_ms({months: 3}))
// -> 7.884.000.000 (milliseconds)
```

### Convert years to Milliseconds

```javascript
const time_to_ms = require("@tgxd/time-to-ms")

console.log(time_to_ms({years: 5}))
// -> 157.680.000.000 (milliseconds)
```

### Multiple Convert Time to Milliseconds

```javascript
const time_to_ms = require("@tgxd/time-to-ms")

console.log(time_to_ms({years: 3, months: 5, weeks: 2, days: 11, hours: 33, minutes: 45, seconds: 250, milliseconds: 30000}))
// -> 110.029.780.000 (milliseconds)
```