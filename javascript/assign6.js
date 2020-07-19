function sum(){
    var n = document.getElementById('num2').value;
    var i = 0;
    while (n != 0) {
        i = Number(i + n);
        n--;
    }
    if (n == 0) document.getElementById('assign6').innerHTML = "result : " + i;
}
function product(){
    var n = document.getElementById('num2').value;
    i = 1;
    while (n != 0) {
        i = Number(i * n);
        n--;
    }
    if (n == 0) document.getElementById('assign6').innerHTML = "result : " + i;
}