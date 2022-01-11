module.exports = function reverse (n) {
    let a = Math.abs(n);
    let res = '';
    for(let i = String(a).length - 1; i>=0; i--){
        res += String(a)[i];
    }return Number(res);
};