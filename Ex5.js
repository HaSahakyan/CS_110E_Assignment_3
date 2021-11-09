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
   
   

    console.log(binNumAdd(110, 101));
    console.log(binNumAdd(110, 1010000));
    console.log(binNumAdd(1101, 10110011));
    console.log(binNumAdd(10011, 110111111110));
    console.log(binNumAdd(1000000101, 1011111111));