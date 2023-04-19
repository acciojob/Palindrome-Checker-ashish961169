// complete the given function

function palindrome(str){
// Remove non-alphanumeric characters and convert to lowercase
  const cleanStr = str.replace(/[\W_]/g, '').toLowerCase();
  // Reverse the cleaned string and compare to original
  return cleanStr === cleanStr.split('').reverse().join('');
}
module.exports = palindrome
