/**
 * sequence1.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 17 Apr 2016
 */
const Promise = require("bluebird");

console.log("----------");
console.log("SEQUENCE 1");
console.log("----------");

const startTime = Date.now();

function logWithTimestamp(msg) {
    console.log(Date.now() - startTime + ": " + msg);
}

Promise.delay(1000).then(() => logWithTimestamp("singen")).
    then(() => Promise.delay(1000).then(() => logWithTimestamp("tanzen"))).
    then(() => Promise.delay(1000).then(() => logWithTimestamp("lachen")));

