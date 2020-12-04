//event listener
window.addEventListener("keydown", checkKeyPress, false);

function checkKeyPress(key){
    if(key.keyCode == "32")
        {
            let ranR = Math.floor(Math.random()*255);
            let ranG = Math.floor(Math.random()*255);
            let ranB = Math.floor(Math.random()*255);
            
            let newProperty = "rgb(" + ranR + "," + ranG + "," + ranB +")";
            console.log(newProperty);
            
            document.getElementById("generated").style.backgroundColor = newProperty;
        }
}