function addUp() {
    var n = document.getElementById('num').value;
    var i = 0;
    while (n != 0) {
        i = Number(i + n);
        n--;
    }
    if (n == 0) document.getElementById('assign4').innerHTML = "result : " + i;
}
function sumUp() {
    var n = document.getElementById('num1').value;
    var sum=0; 

    for (var i = Number(n); i >0; --i) { 
       
        if ((i % 3 === 0) || (i % 5 === 0)){ 
           
             sum = sum + i;
             
        } 
    } 
document.getElementById('assign5').innerHTML = "result : " + sum;
}