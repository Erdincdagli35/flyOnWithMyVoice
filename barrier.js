class Barrier{
	constructor(){
		this.r=30;
		this.x=width;
		this.y = height - this.r;
	}
	move(){
		this.x-=3;
	}
	show(){
		image(bIMG,this.x,this.y,this.r,this.r);
		//fill(255,60);
		//rect(this.x, this.y, this.r, this.r);
	}
}