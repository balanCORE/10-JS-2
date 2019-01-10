var data = [
	{
		id: 'box1',
		title: 'First box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: ['highlighted', 'special-header', 'important']
	},
	{
		id: 'box2',
		title: 'Second box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: ['special-header', 'important']
	},
	{
		id: 'box3',
		title: 'Third box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: ['highlighted', 'important']
	},
	{
		id: 'box4',
		title: 'Fourth box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: ['highlighted']
	},
	{
		id: 'box5',
		title: 'Fifth box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: []
	},
];

//clickWay

//  HTML elements
var box_1 = document.getElementById('box1');
var box_2 = document.getElementById('box2');
var box_3 = document.getElementById('box3');
var box_4 = document.getElementById('box4');
var box_5 = document.getElementById('box5');

var boxContainer = document.getElementsByClassName('container');

// Listener
box_1.addEventListener('click', function() {
	showBox(0);
})
box_2.addEventListener('click', function() {
	showBox(1);
})
box_3.addEventListener('click', function() {
	showBox(2);
})
box_4.addEventListener('click', function() {
	showBox(3);
})
box_5.addEventListener('click', function() {
	showBox(4);
})

//clickWay
function showBox(value) {
	var d = document.createElement( 'div' );
        d.id = data[value].id;
        d.innerHTML = '<h1>' + data[value].title + '</h1>' + data[value].content;
        d.className = data[value].categories.join(' ');
        var p = document.getElementById('container');
        p.appendChild(d);
}


//loopWay

function createBox(idFromHTML) {
  var div;

  var container = document.getElementById(idFromHTML);

  for(var i = 0; i < data.length; i++) {
  	// skład
    div = document.createElement('div');
    	// działanie
    	div.id = data[i].id;
    	div.className = data[i].categories.join(' ');
    //tworzenie
    div.innerHTML = '<h1>' + data[i].title + '</h1>' + data[i].content;
    container.append(div);
  }

}

createBox('loopWay');




















