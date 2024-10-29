const myCard=document.getElementById('myCard');

function isPointerOverMyCard(mouseX,mouseY){
  const cardWidth=myCard.offsetWidth;
  const cardHeight=myCard.offsetHeight;
  const cardLeftX=myCard.getBoundingClientRect().x;
  const cardLeftY=myCard.getBoundingClientRect().y;
  return (mouseX>=cardLeftX && mouseX<=cardLeftX+cardWidth && mouseY>=cardLeftY && mouseY<=cardLeftY+cardHeight)?(
    true
  ):false;
}

class Particle{
  constructor(centerX,centerY,radius,speed,directionX,directionY,color){
    this.centerX = centerX;
    this.centerY = centerY;
    this.radius = radius;
    this.dx = directionX?speed:-speed;
    this.dy = directionY?speed:-speed;
    this.color=color;
  }
  
  #draw(){
    conxt.beginPath();
    conxt.arc(this.centerX,this.centerY,this.radius,0,2*Math.PI);
    conxt.fillStyle=this.color;
    conxt.fill();
    conxt.closePath();
  }

  update(){
    if(this.centerX - this.radius <= 0 || this.centerX + this.radius >= canvas.width){
      this.dx = -this.dx;
    }
      
    if(this.centerY - this.radius <= 0 || this.centerY + this.radius >= canvas.height){
      this.dy = -this.dy;
    }
  
    if(Math.sqrt(Math.pow(this.centerX-mouse.X,2)+Math.pow(this.centerY-mouse.Y,2))<=this.radius+mouse.R){
      if(this.centerX>mouse.X && this.centerX<canvas.width-this.radius*10 && !isPointerOverMyCard(mouse.X,mouse.Y)){
        this.centerX+=10;
      } 
      if(this.centerX<mouse.X && this.centerX>this.radius*10 && !isPointerOverMyCard(mouse.X,mouse.Y)){
        this.centerX-=10; 
      }
      if(this.centerY>mouse.Y && this.centerY<canvas.height-this.radius*10 && !isPointerOverMyCard(mouse.X,mouse.Y)){
        this.centerY+=10;
      }
      if(this.centerY<mouse.Y && this.centerY>this.radius*10 && !isPointerOverMyCard(mouse.X,mouse.Y)){
        this.centerY-=10;
      }
    }
    this.centerX+=this.dx;
    this.centerY+=this.dy;
    this.#draw();
  }

  connectParticle(particles,color,width=0.3){
    const distLimit=Math.floor(window.innerWidth/10);
    for(let i=0;i<particles.length;++i){
      if(Math.sqrt(Math.pow(this.centerX-particles[i].centerX,2)+Math.pow(this.centerY-particles[i].centerY,2))<=distLimit){
        conxt.beginPath();
        conxt.moveTo(this.centerX,this.centerY);
        conxt.lineTo(particles[i].centerX,particles[i].centerY);
        conxt.lineWidth=width;
        conxt.strokeStyle=color;
        conxt.stroke();
        conxt.closePath();
      }
    }
  }
};