const a = document.getElementById("home");

a.innerText = "sandhya";



const a = document.getElementById("home");

a.innerHTML = "<h1>New title</h1>";

// console.log(a)


const a = document.getElementById("home");

a.textContent= "New Home page";


// geyElementByClassName():

var mySHOP = document.getElementsByClassName("SHOP")[0]
mySHOP.textContent = "lalitha"


// getElementByTagName():


const tagTest = document.getElementsByTagName("p")[2]
tagTest.textContent = "This Text of Paragraph is Changed"

console.log(tagTest)


// QuerySelector():


// document.getElementById(home)

// document.getElementsByClassName(Sandhya)

// document.getElementsByTagName(nav)


const newHomepage = document.querySelector("#home");
newHomepage.textContent = "Javascript"


const newHomepage = document.querySelectorAll(".SHOP");

for(let x=0; newHomepage.length; x++){
    newHomepage[x].textContent = "templates"
}




