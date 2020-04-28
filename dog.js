class Dog {
    constructor() {
        this.r = 45;
        this.x = this.r;
        this.y = height - this.r;
        this.vy = 0;
        this.gravity = 1.5;
		
    }
	
    jump() {
    	if(this.y == height - this.r){
    		this.vy = -30;
    	}
        

    }
	hits(barrier){
		return collideRectRect(this.x,this.y,this.r,this.r,barrier.x,barrier.y,barrier.r,barrier.r);
		
	}
    move() {
        this.y += this.vy;
        this.vy += this.gravity;
        this.y = constrain(this.y, 0, height - this.r);
    }

    show() {
        image(dIMG,this.x, this.y, this.r, this.r);
        
    }
}