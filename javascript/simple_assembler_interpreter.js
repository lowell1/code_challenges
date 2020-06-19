//https://www.codewars.com/kata/58e24788e24ddee28e000053/train/javascript

function isRegister(operand) {
  return operand >= "A" && operand <= "z";
}

function simple_assembler(program) {
  var registers = {};
  var i = 0;

  while(i < program.length) {
    const string = program[i];
    const [operator, operand1, operand2] = string.split(" ");
    
    switch(operator) {
        case "mov":
          if(isRegister(operand2))
            registers[operand1] = registers[operand2];
          else
            registers[operand1] = parseInt(operand2, 10);
            break;
        case "inc":
          registers[operand1]++;
          break;
        case "dec":
          registers[operand1]--;
          break;
        case "jnz":
          if(registers[operand1] !== 0) {
            if(isRegister(operand2))
              i = registers[operand2];
            else
              i += parseInt(operand2, 10);
              
            continue;
          }
      }
      i++
  }