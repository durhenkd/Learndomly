//event listener
window.addEventListener("keydown", checkKeyPress, false);

function FlipButton()
{
    
		document.getElementById("flippy2").classList.toggle("flip");
	
	
}

function ImageFalse()
{
    document.getElementById("trick").style.display="block";	
}
function Toopen()
{
	document.getElementById("bara").style.display="block";
    document.getElementById("iconita_o").style.display = "none";
}

function Toclose()
{
	document.getElementById("bara").style.display="none";
    document.getElementById("iconita_o").style.display = "block";
}

function showSettings(){
    let temp = document.getElementById("settings").style.display
    if(temp == "none")
    document.getElementById("settings").style.display = "block";
    else
        document.getElementById("settings").style.display = "none";
}

function checkKeyPress(key){
    if(key.keyCode == "32")
        {   
            for(let i=0; i<document.getElementsByClassName("screens").length; i++)
                document.getElementsByClassName("screens")[i].style.display = "none";
            
            var settings= [false, false, false, false, false, false, true];
            
            settings[0] = document.getElementById("sport").checked; 
            settings[1] = document.getElementById("hands-on").checked;
            settings[2] = document.getElementById("arts").checked;
            settings[3] = document.getElementById("language").checked; 
            settings[4] = document.getElementById("mind").checked;
            settings[5] = document.getElementById("house").checked;
            
            for(var i=1; i<settings.length-1; i++)
                if(settings[i] != settings[i-1])
                    settings[settings.length-1] = false;
            
            if(settings[settings.length-1] == true)
                for(var i=0; i<settings.length-1; i++)
                    settings[i] = true;
            
            console.log(settings);
            
            let rPool = Math.floor(Math.random() * 2);
            var pool;
            if(rPool == 0)
                pool = YouTube;
            else
                pool = external;
                
            
            let rCat = Math.floor(Math.random() * pool.length);
            while(settings[rCat] != true)
                rCat = Math.floor(Math.random() * pool.length);
            
            let rIndex = Math.floor(Math.random() * pool[rCat].length);
            
            if(rPool == 0)
                {
                    document.getElementById("screenYT").src = pool[rCat][rIndex].link;
                    document.getElementById("screenYT").style.display = "block";
                }
            else{
                document.getElementById("external").href = pool[rCat][rIndex].link;
                document.getElementById("external").innerHTML = pool[rCat][rIndex].title;
                document.getElementById("externalWrapper").style.display = "block";
            }
        }
}



