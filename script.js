//event listener
window.addEventListener("keydown", checkKeyPress, false);


function checkKeyPress(key){
    if(key.keyCode == "32")
        {   
            var pool = YouTube;
            
            
            let rIndex = Math.floor(Math.random() * pool.length);
            
            document.getElementById("screenYT").src =pool[rIndex].link;

        }
}


