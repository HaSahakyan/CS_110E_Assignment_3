
function reverseNumber(num){
    let result = " ";
    let numA = " ";
    numA = numA + num; 
    for(let i = numA.length - 1; i >= 0; i--){
      result = result + numA.charAt(i);
    }
    return result;
  }
  console.log(reverseNumber(777778));
  console.log(reverseNumber(122256));
  console.log(reverseNumber(987654321));
  console.log(reverseNumber(1000010));
  console.log(reverseNumber(2121));