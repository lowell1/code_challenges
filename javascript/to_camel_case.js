function toCamelCase(str){
    if(str === "")
      return "";
  
    const arrStr = str.split(/[_-]/);
    var res = "";
    const isCamel = arrStr[0][0] >= "a" && arrStr[0][0] <= "z";
  
    arrStr.forEach((item, idx) => {
      if(idx === 0 && isCamel)
        res += item.toLowerCase();
      else
        res += item[0].toUpperCase() + item.slice(1).toLowerCase();
    });
    
    
    return res;
  }