/**
 * sequence3.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 17 Apr 2016
 */
const Promise = require("bluebird");

console.log("----------");
console.log("SEQUENCE 3");
console.log("----------");

const delay = 1000;

const startTime = Date.now();

function logWithTimestamp(msg) {
    console.log(Date.now() - startTime + ": " + msg);
}

function sequence(...p) {
    return Promise.reduce(p, (seq, curr) => curr(), p[0]);
}

function action(msg) {
    return () => Promise.delay(delay).then(() => logWithTimestamp(msg));
}

sequence(
    action("singen"),
    action("tanzen"),
    action("lachen")
);

