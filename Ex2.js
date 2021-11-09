function testPrime(num){
    for(let i = 2; i <= Math.sqrt(num); i++){
      if(num % i === 0){
      return false;
      }
    }
    return true;
  }
  function testA(a, b){  
    let arreyPrime = [];  
    let num1;
    if(a < b){
      num1 = a;
      while(num1 <= b){    
      if(testPrime(num1)){      
        arreyPrime.push(num1);    
      }    
        num1++; 
      }
    }else{
      num1 = b;
      while(num1 <= a){    
      if(testPrime(num1)){      
        arreyPrime.push(num1);    
      }    
        num1++; 
    }
     
    }   
    return arreyPrime;
  }
        console.log(testA(77, 41));
        console.log(testA(41, 77));
        console.log(testA(2, 100));
        console.log(testA(7, 11));