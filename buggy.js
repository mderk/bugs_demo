function when(someFunc, someCallback) {

}

function callback() {}

module.exports = function buggy(stages, cs) {
    for (let i = 0; i < stages.length; i++) {
        if (cs > i) {
            continue;
        }
        let stage = stages[i];
        if (!stage.complete) {
            when(() => stage.complete, callback);
            break;
        }
    }
    return true;
}
