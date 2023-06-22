function isAnagram(str1, str2) {
    let arrStr1 = str1.split('');
    let arrStr2 = str2.split('');
    arrStr1.sort();
    arrStr2.sort()
    for(let i = 0; i < arrStr1.length; i++) {
        if(arrStr1[i] !== arrStr2[i]) {
            return false;
        }
    }

    return true;

}

let ans = isAnagram("venom", "monev");
console.log(ans);