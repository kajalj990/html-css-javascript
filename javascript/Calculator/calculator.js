function runCalculator() {
    var n = prompt("Enter your choice \n1.Add\n2.Subtract\n3.Multiply\n4.Divide\n5.Exponent\n6.Mean\n7.Quit");
    switch (Number(n)) {
        case 1: var a = prompt("Enter your first number");
            var b = prompt("Enter your second number");
            var c = Number(a) + Number(b);
            document.getElementById('result').innerHTML = c;
            break;
        case 2: var a = prompt("Enter your first number");
            var b = prompt("Enter your second number");
            var c = Number(a) - Number(b);
            document.getElementById('result').innerHTML = c;
            break;
        case 3: var a = prompt("Enter your first number");
            var b = prompt("Enter your second number");
            var c = Number(a) * Number(b);
            document.getElementById('result').innerHTML = c;
            break;
        case 4: var a = prompt("Enter your first number");
            var b = prompt("Enter your second number");
            var c = Number(a) / Number(b);
            document.getElementById('result').innerHTML = c;
            break;
        case 5: var a = prompt("Enter your base number");
            var b = prompt("Enter your exponent number");
            var c = Math.pow(Number(a),Number(b));
            document.getElementById('result').innerHTML = c;
            break;
        case 6:
            var i = 0;
            var sum = 0;
            do{
                var a = prompt("Enter your series number and if you wanna end please type ***");
                if(a != "***" ){
                    sum=sum+parseInt(a);
                }
                else{
                    break;
                }
                i++;
        }while(i<10);
        document.getElementById('result').innerHTML=sum/i;
        break;
        case 7:
            break;
        default:alert("Entered a wrong value");
            
    }

}