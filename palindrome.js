function isPalindrome(word){
  var forward = word.toLowerCase()
  var backward = forward.split("").reverse().join("");
  if(forward === backward){ 
    return true;
  } else {
    return false;
  }
};

function readline(){
 var nama = 'oko';
 return nama;
}
var word = readline()
console.log(isPalindrome(word))