
var musicAudio = document.getElementById("javu");

var isplayingjavu = false;

function changeColor(elem){
	elem.classList.toggle("tan");
}


function resetAll(){
	document.getElementById("one").innerHTML='<img class="img" src="images/ren.png"/>'
	document.getElementById("two").innerHTML='<img class="img" src="images/aron.png"/>'
	document.getElementById("three").innerHTML='<img class="img" src="images/baeko.png"/>'
	document.getElementById("four").innerHTML='<img class="img" src="images/jr.png"/>'
}

function biographyOne(elem){
	elem.innerHTML="Aaron Youngmin Kwak, better known by the stage name Aron, is an American-Korean singer, rapper, and DJ. He debuted in 2012 as a sub-vocalist and sub-rapper of South Korean boy group NU'EST. He is the oldest member of NU'EST, and is the group's English spokesperson.";

	
}

function biographyTwo(elem){
	elem.innerHTML="Kim Jong-hyun, more commonly known by his stage name JR, is a South Korean singer, rapper, actor and leader of the South Korean boy group NU'EST. He is also known for competing in the 2017 series Produce 101 Season 2" ;
	
	
}

function biographyThree(elem){
	elem.innerHTML="Kang Dong-ho, better known by the stage name Baekho, is a South Korean singer-songwriter. He debuted in 2012 as the main vocalist of South Korean boy band NU’EST. He is also known for competing in the 2017 series Produce 101 Season 2." ;
	
	
}

function biographyFour(elem){
	elem.innerHTML="Choi Min-Ki, better known by his stage name Ren, is a South Korean singer and actor. He debuted in 2012 as a vocalist of NU'EST and remains an active member of the group" ;
	
	
}
function playMusic() {
	if (isplayingjavu) {
		musicAudio.pause();
		musicAudio.currentTime = 0;
		isplayingjavu = false;
		console.log("stop");
	}
	else {
		musicAudio.play();
		isplayingjavu = true;
		console.log("play");
	}
}