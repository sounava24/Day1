
    var num1= parseInt(prompt("Enter the first number"));
    var num2= parseInt(prompt("Enter the second number"));
    console.log(`Values of num1 and num2 are ${num1} and ${num2}`);
    num1= num1+num2;
    num2=num1-num2;
    num1=num1-num2;
    console.log(`Values of num1 and num2 after swapping are ${num1} and ${num2}`);
