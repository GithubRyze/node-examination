// function test(number){
//     if (typeof number === 'number' && number % 1 === 0){
//         return true;
//     }
//     return false;
// }
// function isPositiveInteger(s){//是否为正整数
//     const re = /^[0-9]+$/;
//     return re.test(s);
// } 
// console.log(isPositiveInteger(''));
// console.log(isPositiveInteger(1.1));
// console.log(isPositiveInteger(-1));
// console.log(isPositiveInteger('11qq'));
// console.log(isPositiveInteger(92233720368547758071));
// console.log(isPositiveInteger(null));
// console.log(isPositiveInteger(false));
// console.log(isPositiveInteger(true));
// console.log(isPositiveInteger('undefined'));

// function testsrt(str){
//     const strings = ['C', 'PF', 'SF', 'PG', 'SG'];
//     for (var i = 0; i < 5; i++) {
//         console.log(strings[i]);
//         if (strings[i] === str)
//             return true;
//     }
//     return false;
// }

// console.log(testsrt('SF'));
fetchPromiseValue = () => {
    return new Promise(function(resolve, reject) {
        resolve({value: 'PromiseReturnValue'});   // Promise 抛出状态值
    })
};

handlePromise = async () =>{
    let  getValue  = await this.fetchPromiseValue();  // 异步获取 Promise  抛出的状态值
    console.log('Promise 的状态值： ',getValue.value);
};
console.log(handlePromise);