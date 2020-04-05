const p1 = {x: 0, y: 0};
const p2 = {x: 1920, y: 937};

const c1 = {x: 0, y: 468.5};
const c2 = {x: 1920, y: 468.5};

const d1 = {x: 0, y: 937};
const d2 = {x: 1920, y: 0};

const z1 = {x: 960, y: 0};
const z2 = {x: 960, y: 937};



function setup() {
	createCanvas(windowWidth, windowHeight);
	
}

function draw() {

  ecuapp(p1, p2)
  ecuapp(c1, c2)
  ecuapp(d1, d2)
  vertical(z1, z2)

}

function ecuapp(p1, p2){
	  const dx = p2.x - p1.x;
	  const dy = p2.y - p1.y;

	  const m = dy / dx;
	  const b = p1.y - m * p1.x;

	  point(p1.x, p1.y);
	  
	  let x = p1.x + 1;
	  let y;
	  while(x != p2.x){
	  	y = m * x + b;
	  	point(x, y);
	  	x++;
	  }

}

function vertical(p1,p2){
	const dx=p1.x
	const dy=p1.y

	let y= dy

	while(y != p2.y){
		 
		point(dx,y)
		y++
	}

}

