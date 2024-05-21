const setup = () => {
	let colorDemos=document.getElementsByClassName("navbar");
	let sliders = document.getElementsByClassName("slider");
	const btn = document.getElementById("pagesBtn");
	
	

	for (const element of sliders) {
		element.addEventListener("change", update);
		element.addEventListener("input", update);
	}	

	let tables = document.getElementsByTagName("table");
	const averageNumberOfPages = 250;
	const totalNumberOfPages = tables[0].rows.length * averageNumberOfPages;
	
	btn.addEventListener("click", function() {createPagesTable(250, totalNumberOfPages)});

}

const createPagesTable = (averageNumberOfPages,totalNumberOfPages) =>{
var table = document.createElement("table");

var headerRow = table.createTHead().insertRow();

var headers = ["Just so you know: average number of pages per book", "Total number of pages"];
headers.forEach(headerText => {
    var th = document.createElement("th");
    th.textContent = headerText;
    headerRow.appendChild(th);
});

var row1 = table.insertRow();
var r1cell1 = row1.insertCell();
var r1cell2 = row1.insertCell();
r1cell1.textContent = averageNumberOfPages;
r1cell2.textContent = totalNumberOfPages;

var row2 = table.insertRow();
var r2cell1 = row2.insertCell();

r2cell1.textContent = "This is far from enough...";

table.style.border = "1px solid";
r1cell1.style.border = "1px solid white";
r1cell2.style.border = "1px solid white";

document.getElementById("pages-table-container").appendChild(table);
}

const update = () => {
	let sliderRed = document.getElementById("sliderRed");
	let sliderGreen = document.getElementById("sliderGreen");
	let sliderBlue = document.getElementById("sliderBlue");
	
	let colorDemos=document.getElementsByClassName("navbar");

	colorDemos[0].style.backgroundColor= "rgb(" + sliderRed.value +
			", " + sliderGreen.value + 
			", " + sliderBlue.value + ")";
}


window.addEventListener("load", setup);


