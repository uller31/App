var tal_1;
var input_1;
var input;

function konverter(){
	tal_1= parseFloat(document.test.tal_1.value);
	input= parseFloat(document.test.input.value);
	input_1= parseFloat(document.test.input_1.value);
}

function meh(){
	document.test.input.value=Math.floor((Math.random()*10)+1);
	document.test.input_1.value=Math.floor((Math.random()*10)+1);
}

function svar(){
	konverter();
	if(tal_1==input*input_1){
		document.test.kommentar.value="Korrekt";
	}else{
		document.test.kommentar.value="Forkert";
	}
}

function slet(){
	document.test.input.value=""
	document.test.input_1.value=""
	document.test.tal_1.value=""
	document.test.kommentar.value=""
}