function startup() {
            document.getElementById("searchbar").style.display = "none";
            document.getElementById("searchbutton").style.display = "block";
        }
        window.onload = startup;
function searchShow() {
    document.getElementById("searchbar").style.display = "block";
   	document.getElementById("searchbutton").style.display = "none";
   }