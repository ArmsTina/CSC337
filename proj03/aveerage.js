function is_palindrome_word(text){
    for(let i = 0; i < text.length/2; i++){
        if(text[i] != text[text.length-1-i]){
            return false;
        }
    }
    return true;
}
console.log(is_palindrome_word('test'));

console.log(is_palindrome_word('civic'));

console.log(is_palindrome_word('non'));

console.log(is_palindrome_word('contemporary'));