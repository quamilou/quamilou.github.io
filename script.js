let darkMode = false;

function changeDarkMode(){
    if (darkMode){
        darkMode = false;
        document.documentElement.style.setProperty("--text-color","black");
        document.documentElement.style.setProperty("--background-color","#d8f1de");
        document.getElementById("dark-light-mode").innerHTML = "Mode Sombre";
    }else{
        darkMode = true;
        document.documentElement.style.setProperty("--text-color","white");
        document.documentElement.style.setProperty("--background-color","#2b362e");
        document.getElementById("dark-light-mode").innerHTML = "Mode Clair";
    }
}