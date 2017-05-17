

function cloneObject(obj) {
    let newObj = {};
    for (let k in obj) {
        newObj[k] = obj[k];
    }
    return newObj;
}

module.exports = {
    cloneObject: cloneObject
};