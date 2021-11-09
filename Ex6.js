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
      
      console.log(inverseNum(11100));
      console.log(inverseNum(10101));
      console.log(inverseNum(1111111111));
      console.log(inverseNum(10000001));
      console.log(inverseNum(1000000000000000000));
    