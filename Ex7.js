function binNumAdd(a, b){
    let aResult = [];
    let aNumAsString = String(a);
    for(let i = 0; i <= aNumAsString.length - 1; i++){
    let addnum = aNumAsString.charAt(i);
      aResult.push(Number(addnum));
    }
    
    let bResult = [];
    let bNumAsString = String(b);
    for(let i = 0; i <= bNumAsString.length - 1; i++){
    let addnum = bNumAsString.charAt(i);
      bResult.push(Number(addnum));
    }
    
    if(bResult.length < aResult.length){
        let count = aResult.length - bResult.length;
        for(let i = 1; i <= count; i++){
        bResult.unshift(0);
        }
       }else if(b.length > a.length){
        let count = bResult.length - aResult.length;
        for(let i = 1; i <= count; i++){
        aResult.unshift(0);
       }
       } 
    
       let carry = 0;
       let sum = [];
       for(let i = aResult.length-1; i >= 0; i--){
           if(aResult[i] + bResult[i] === 2){   //both numbers are 1
               sum[i] = carry;
               carry = 1;
           } else if(carry + aResult[i] + bResult[i] === 2){
               sum[i] = 0;
               carry = 1;
           } else {
               sum[i] =carry + aResult[i] + bResult[i];
               carry = 0;
           }
       }
       
       if(carry + aResult[0] + bResult[0] >= 2){
        sum.unshift(1);
        }
      
   return sum.join('');
  
  }
   
   
   
   
       
             
  
  
    function inverseNum(num){
        let result = "";
            for(let i = 0; i <= String(num).length - 1; i++){
              if(String(num).charAt(i) === "0"){
              result = result + "1";
              } else if(String(num).charAt(i) === "1"){
              result = result + "0";
              }
      
            }
            return result;
        }

        function twosComBin(number) {
            let sum = binNumAdd(inverseNum(number), 1) ;
            return sum;
        }
    console.log(twosComBin(10111));
    console.log(twosComBin(1111));
    console.log(twosComBin(10000));