
// Array of cat objects that holds all cat information.
var arrCatsObj = [{name:'Bella', score:0, image:'cat.jpg',obj:[]},
	{name:'Tigger', score:0, image:'cat02.jpg',obj:[]},
	{name:'Chloe', score:0, image:'cat03.jpg',obj:[]},
	{name:'Shadow', score:0, image:'cat04.jpg',obj:[]},
	{name:'Dandy', score:0, image:'cat05.jpg',obj:[]}
	];

var catpic = document.getElementById('cat');
var number = document.getElementById('number');
var catNameContainer = document.getElementById('cat-name-container');
var catName;
var catElement;

for(var i=0; i<arrCatsObj.length; i++) {
	catName = document.createElement('div');
	catName.className = 'cat-name';
	catName.innerHTML = arrCatsObj[i].name;
	catNameContainer.appendChild(catName);
}

catElement = document.getElementsByClassName('cat-name');
for(i=0; i<catElement.length; i++) {
	arrCatsObj[i].obj = catElement[i];
}

for(var i=0; i<arrCatsObj.length; i++) {

	arrCatsObj[i].obj.addEventListener('click', function() {
		
		for(var i=0; i<arrCatsObj.length; i++) {
			if(this === arrCatsObj[i].obj) {
				catpic.src = arrCatsObj[i].image;

				number.innerHTML = "~" + arrCatsObj[i].score + "~";

			}
		}

	}, false);
}

/**** For cat pic listener */
catpic.addEventListener('click', function() {
	var currentScore = 0;
	var currentImgSrc;

	for(var i=0; i<arrCatsObj.length; i++) {
		currentImgSrc = this.src.search(arrCatsObj[i].image);

		if(currentImgSrc > 0) {
			console.log(arrCatsObj[i].name + " " + arrCatsObj[i].score);
			arrCatsObj[i].score++;
			currentScore = arrCatsObj[i].score;
		}
	}

	number.innerHTML = "~" + currentScore + "~";

}, false);