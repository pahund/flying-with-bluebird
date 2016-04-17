/**
 * sequenceAndAction.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 17 Apr 2016
 */
const Promise = require("bluebird");

console.log("----------");
console.log("SEQUENCE 2");
console.log("----------");

const delay = 1000;

const startTime = Date.now();

function logWithTimestamp(msg) {
    console.log(Date.now() - startTime + ": " + msg);
}

function action(msg) {
    return Promise.delay(delay).then(() => logWithTimestamp(msg));
}

action("singen")
    .then(() => action("tanzen"))
    .then(() => action("lachen"));

