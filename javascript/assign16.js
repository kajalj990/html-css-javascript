<p id="demo"><button onclick="palindrome()">click</button></p>

<script>
function palindrome() {
	str=prompt("Enter your string for palindrome");
    reversed = str
    .split('')
    .reverse()
    .join('');

   if( str === reversed){
   		alert("its a palindrome")
   }else{
    	alert ("Not a palindrome")
   }
}

</script>