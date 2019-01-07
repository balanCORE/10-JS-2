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

//  HTML elements
var box_1 = document.getElementById('box1');
var box_2 = document.getElementById('box2');
var box_3 = document.getElementById('box3');
var box_4 = document.getElementById('box4');
var box_5 = document.getElementById('box5');

var boxContainer = document.getElementsByClassName('container');

// Listener
box_1.addEventListener('click', function() {
	newBox(0);
})
box_2.addEventListener('click', function() {
	newBox(1);
})
box_3.addEventListener('click', function() {
	newBox(2);
})
box_4.addEventListener('click', function() {
	newBox(3);
})
box_5.addEventListener('click', function() {
	newBox(4);
})

//functions
function newBox(value) {
	var d = document.createElement( 'div' );
        d.id = data[value].id;
        d.innerHTML = data[value].content;
        d.classList.add(data[value].categories)
        var p = document.getElementById('container');
        p.appendChild(d);
}






































