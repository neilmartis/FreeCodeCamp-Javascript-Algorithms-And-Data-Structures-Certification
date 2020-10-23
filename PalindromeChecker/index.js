function palindrome(str) {
    let matchedStrArray = str.split("").map((c,i)=>
    c===str[str.length-1-i]);
    matchedStrArray.some((m)=>m);

  return true;
}

palindrome("eye");