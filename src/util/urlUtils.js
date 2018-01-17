export default function queryStrToObj(str) { 
    const queryString = str.substring(1);
    const pairs = queryString.split('&').map((pair) => pair.split('='));
    let obj = {};
    for(let i = 0; i < pairs.length; i++){
        let pair = pairs[i];
        obj = {
            ...obj,
            [pair[0]]: pair[1]
        }
    }
    return obj;
}