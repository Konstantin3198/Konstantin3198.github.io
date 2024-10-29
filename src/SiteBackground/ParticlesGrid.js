class ParticlesGrid{
    #particles=[];
    createParticles(){
        const amount=Math.floor((canvas.width*canvas.height)/7000);
        for(let i=0;i<amount;++i){
          let radius=Math.ceil(4*Math.random());
          let centerX=(canvas.width-radius)*Math.random()+radius;
          let centerY=(canvas.height-radius)*Math.random()+radius;
          let speed=2/radius;
          let directionX=Math.random()>.5?true:false;
          let directionY=Math.random()>.5?false:true;
          this.#particles.push(new Particle(centerX,centerY,radius,speed,directionX,directionY,'#ffffffc5'));
        }
    }
      
    animateParticles(){
       requestAnimationFrame(this.animateParticles.bind(this));
       conxt.clearRect(0,0,canvas.width,canvas.height);
       for(let i=0;i<this.#particles.length;++i){
          this.#particles[i].update();
          this.#particles[i].connectParticle(this.#particles,'#ffffffc5');
       }
    }
}