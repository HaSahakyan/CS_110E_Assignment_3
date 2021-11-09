function reverseNumber(num){
    let result = " ";
    let numA = " ";
    numA = numA + num; 
    for(let i = numA.length - 1; i >= 0; i--){
      result = result + numA.charAt(i);
    }
    return Number(result);
  }
  
  
  function palindromeNumber(number){
  let result = " ";
  if(reverseNumber(number) === number){
  result = result + " is palindrome";
  }else{
  result = result + " is not palindrome";
  }
  return "The number " + number + result;
  }
  
  console.log(palindromeNumber(12221));
  console.log(palindromeNumber(1234));
  console.log(palindromeNumber(7689867));
  console.log(palindromeNumber(9191));
  console.log(palindromeNumber(919));
  