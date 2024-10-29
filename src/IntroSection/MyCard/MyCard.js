const mobHomeLink=document.getElementById('mobileHome');
const mobProjectsLink=document.getElementById('mobileProjects');
const mobAboutLink=document.getElementById('mobileAbout');
const mobContactLink=document.getElementById('mobileContact');

const home=document.getElementById('homeSection');
const projects=document.getElementById('projectsSection');
const about=document.getElementById('aboutSection');
const contact=document.getElementById('contactSection');

const menuButton=document.getElementById('menuIconButton');
const mobileMenu=document.getElementById('mobileMenu');
const negateButton=document.getElementById('negateButton');

const idsObj=[{
        link:'Home',
        mobileLink:'mobileHome',
        section:'homeSection'
    },{
        link:'Projects',
        mobileLink:'mobileProjects',
        section:'projectsSection'
    },{
        link:'About',
        mobileLink:'mobileAbout',
        section:'aboutSection'
    },{
        link:'Contact',
        mobileLink:'mobileContact',
        section:'contactSection'
    }
];

const elementsObj=idsObj.map(obj=>({
    elementLink:document.getElementById(obj.link),
    elemMobileLink:document.getElementById(obj.mobileLink),
    elementSection:document.getElementById(obj.section)
}));


function showSection(e){
    e.preventDefault();
    const elemId=e.target.id.match(/[A-Z]\w+/)[0];
    elementsObj.forEach(elementObj=>{ 
        if(elementObj.elementLink.id===elemId){
            if(elemId==='Home' && window.innerWidth>800 || elemId==='Contact'){
                elementObj.elementSection.style.display='grid';
            }else{
                elementObj.elementSection.style.display='flex';
            }
        }else{
            elementObj.elementSection.style.display='none';
        }
    });
    location.hash=`/${elemId}`;
}

menuButton.addEventListener('click',()=>mobileMenu.style.left='0');
negateButton.addEventListener('click',()=>mobileMenu.style.left='-100%');

elementsObj.forEach(elementObj=>elementObj.elementLink.addEventListener('click',showSection));
elementsObj.forEach(elementObj=>elementObj.elemMobileLink.addEventListener('click',(e)=>{
    mobileMenu.style.left='-100%';
    showSection(e);
}));
