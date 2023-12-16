
/*toggle section*/
const toggle=document.getElementsByClassName('toggle')[0];
const circle=document.querySelector('.circle');
const container=document.querySelector('.main-container');
const link=document.getElementsByTagName('a');
const logo=document.getElementsByClassName('mainly');
const Menu=document.querySelector('.menu');
const hid_menu=document.querySelector('.hid-menu');

const roll=function(){
    if(circle.style.backgroundColor==='white'){
        circle.style.backgroundColor='black';
        circle.style.transform="translateX(0)";
        toggle.style.backgroundColor='hsl(260, 50%, 70%)';
    }
    else{
    circle.style.backgroundColor='white';
    circle.style.transform='translate(1.2rem)';
    toggle.style.backgroundColor='hsl(0,0%,0%)';
    }
}

function dark_mode(){
    if(container.style.color==='white'){
        for(let i=0;i<link.length;++i){
            link[i].style.color='black';
        }
        Menu.style.color='black';
        container.style.color='black';
        container.style.backgroundColor='hsl(260, 50%, 70%)';
        hid_menu.style.backgroundColor='hsl(260, 90%, 90%)'
        logo[0].style.display='block';
        logo[1].style.display='block';
    }
    else{
        for(let i=0;i<link.length;++i){
           link[i].style.color='white';
        }
    Menu.style.color='white';
    container.style.color='white';
    container.style.backgroundColor='hsl(0,5%,15%)';
    hid_menu.style.backgroundColor='hsl(0,50%,12%)';
    logo[0].style.display='none';
    logo[1].style.display='none';
    }
}


const merge=()=>{
    roll();
    dark_mode();
}

toggle.onclick=merge;

/*menu section*/


Menu.onclick=()=>{ 
    (hid_menu.style.display==='')?hid_menu.style.display='block':hid_menu.style.display='';
}
