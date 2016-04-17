/**
 * sequence4.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 17 Apr 2016
 */
const Promise = require("bluebird");

console.log("----------");
console.log("SEQUENCE 4");
console.log("----------");

const delay = 1000;

const startTime = Date.now();

function log(msg) {
    console.log(Date.now() - startTime + ": " + msg);
}

function sequence(...p) {
    return () => Promise.reduce(p, (seq, curr) => curr(), p[0]);
}

function action(msg) {
    return () => Promise.delay(delay).then(() => log(msg));
}

function group(...p) {
    return () => Promise.all(p.map(curr => curr()));
}

sequence(
    action("singen"),
    action("tanzen"),
    action("lachen"),
    group(
        action("curly"),
        action("larry"),
        sequence(
            action("moe"),
            action("hoho!")
        )
    ),
    action("the end")
)();

