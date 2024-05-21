const indexElements = document.getElementsByClassName("navbar");

const changeColor = function(){
    this.style.backgroundColor = "#ccdd00";
    console.log("color changed");
}

for(let element of indexElements){
    element.addEventListener("click",changeColor);    
}

