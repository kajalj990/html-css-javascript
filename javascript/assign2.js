function your_name() {
        name= prompt("Enter your name")
            document.getElementById('assign2').innerHTML = "Hello " + name + " ! Welcome to web world";
}
function checkName(){
    name=prompt("Enter  your name");
    alert("after name"+name);
    if(name.toLowerCase() == "alice" || name.toLowerCase() == "bob"){
        
        document.getElementById('assign3').innerHTML="hello  "+name+" You are verified";
    }
    else{
        document.getElementById('assign3').innerHTML="you are a intruder";
    }
}