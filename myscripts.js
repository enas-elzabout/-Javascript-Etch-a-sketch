var my_container = document.querySelector('.container');

var my_button = document.createElement("button");
my_button.innerText = "The number of squares has changed"; 
my_button.style.padding = ("15px");
my_button.style.backgroundColor = "#4CAF50";
my_button.style.border = "none";
my_button.style.color = "white";

my_container.insertAdjacentElement('beforebegin',my_button);        

function numberSquares(num=16){
	var createDiv = document.createElement("div");
	createDiv.classList.add('Big');
	createDiv.style.border = "2px solid #000";
	createDiv.style.width = "500px";
	createDiv.style.height = "500px";
	createDiv.style.margin = "30px auto";
	createDiv.style.padding = "0";
	my_container.appendChild(createDiv);

	for (let i = 1; i <= num; i++) {
		for (let x = 1; x <= num; x++) {
			var div = document.createElement("div");
			div.style.backgroundColor = "#c2c2c2";
			div.style.width = `${500/num}px`;
			div.style.height = `${500/num}px`;	
			div.style.float = "left";	
			createDiv.appendChild(div);
		}	
	}

	var Divs = document.querySelectorAll('div');
	  	
	for (let e = 1; e <= Divs.length-1; e++) {
		Divs[e].addEventListener("mouseover", 
			function(){
				Divs[e].style.backgroundColor = random_Color(999999);
			}
		);
	};
};
numberSquares();

function random_Color(number) {
    return ('#' + Math.floor(Math.random() * (number)));
};

function Numbers() {
  var Div = document.querySelector('.Big');
  my_container.removeChild(Div); 

  var Prompt_Message = prompt("Enter the number of squares has changed" , 16);
  numberSquares(Prompt_Message);  
};

my_button.addEventListener('click', Numbers);