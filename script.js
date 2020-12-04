//event listener
window.addEventListener("keydown", checkKeyPress, false);


function checkKeyPress(key){
    if(key.keyCode == "32")
        {   
            for(let i=0; i<document.getElementsByClassName("screens").length; i++)
                document.getElementsByClassName("screens")[i].style.display = "none";
            
            
            var pool = YouTube;
            
            let rIndex = Math.floor(Math.random() * pool.length);
            
            document.getElementById("screenYT").style.display = "block";
            document.getElementById("screenYT").src =pool[rIndex].link;
        }
}


