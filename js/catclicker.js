
var arrCats = ['Andy','Sandy'];

var catpic = document.getElementsByClassName('cat');
var number = document.getElementById('number');
var catNames = document.getElementsByClassName('cat-name');

for(var i=0; i<catNames.length; i++) {
	catNames[i].innerHTML = arrCats[i];

	catpic[i].addEventListener('click', function() {
		number.innerHTML++;

	}, false);
}