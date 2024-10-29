const canvas=document.getElementById('canvas');
canvas.style.backgroundColor='#4a4af5';
if(window.innerWidth<=800){
  canvas.setAttribute('width',window.innerWidth+100);
}else{
  canvas.setAttribute('width',window.innerWidth);
}
canvas.setAttribute('height',window.innerHeight);

const conxt=canvas.getContext("2d");

const mouse={
  X:null,
  Y:null,
  R:Math.ceil(canvas.width*canvas.height/6000)
};

window.addEventListener('resize',()=>{ 
  canvas.setAttribute('height',window.innerHeight);
  canvas.setAttribute('width',window.innerWidth);
});

window.addEventListener('mousemove',(e)=>{
  mouse.X=e.clientX;
  mouse.Y=e.clientY;
});

window.addEventListener('mouseout',()=>{
  mouse.X=undefined;
  mouse.Y=undefined;
});

const grid=new ParticlesGrid();
grid.createParticles();
grid.animateParticles();