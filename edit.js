let s = prompt("Nhập vào từ cần kiểm tra:");
let test = true;
function isPalindrome(text){
    for(let i = 0; i<text.length; i++) {
        if(text[i] != text[s.length-i-1]) {
            test = false;
            break;
        }
    }
    return test;
}
if(isPalindrome(s)) {
    alert(` ${s} is Palindrome.`);
} else {
    alert(` ${s} is not Palindrome.`);
}