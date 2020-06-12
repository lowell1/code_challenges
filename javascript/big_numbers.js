//https://www.codewars.com/kata/525f4206b73515bffb000b21/train/javascript

function add(a,b) {
  var carry = 0;
  var res = "";

  if(a.length < b.length) {
    const tmp = b;
    b = a;
    a = tmp;
  }

  for(var i = 0; i < a.length; i++) {
    const digA = parseInt(a[a.length - i - 1], 10);
    const digB = i < b.length ? parseInt(b[b.length - i - 1], 10) : null;
    
    if(digB !== null) {
      const sum = digA + digB + carry;

      carry = sum >= 10 ? 1 : 0;
      res = sum % 10 + res;
    } else if(carry) {
      const sum = digA + carry;
      carry = sum >= 10 ? 1 : 0;
      res = sum % 10 + res;
    } else {
      return res = a.slice(0, a.length - i) + res;
    }
  }

  return carry ? carry + res : res;
}