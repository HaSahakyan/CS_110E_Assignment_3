function testPrime(num){
    for(let i = 2; i <= Math.sqrt(num); i++){
      if(num % i === 0){
      return false;
      }
    }
    return true;
  }
  
  console.log(testPrime(2)); //true
  console.log(testPrime(7));//true
  console.log(testPrime(9)); //false
  console.log(testPrime(17));//true
  console.log(testPrime(121)); //false
  console.log(testPrime(41));  //true