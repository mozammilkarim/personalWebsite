const Menu = document.querySelector('.menuLink');
const menuExtended = document.querySelector('.menuExtended')
const duplicateMenu = document.getElementById('duplicateMenu');
const menuAbout = document.getElementById('menuAbout');
const menuTrainings = document.getElementById('menuTrainings');
const menuEducation = document.getElementById('menuEducation');
const menuPortfolio = document.getElementById('menuPortfolio');
const menuCerts = document.getElementById('menuCerts');
const menuSkills = document.getElementById('menuSkills');
// const menuArray = [menuAbout, menuEducation, menuTrainings, menuPortfolio, menuCerts, menuSkills];
Menu.addEventListener('click', function (e) {
    e.preventDefault();
    console.log('Menu clicked');
    menuExtended.style.display = 'block'

})
duplicateMenu.addEventListener('click', function (e) {
    e.preventDefault();
    console.log('Menu clicked Again');
    menuExtended.style.display = 'none'
})
// now getting realSection ELements
const about = document.getElementById('about');
const skill = document.getElementById('skill');
const trainings = document.getElementById('trainings');
const education = document.getElementById('education');
const portfolio = document.getElementById('portfolio');
const certs = document.getElementById('certs');
const sectionArray = [[menuAbout, about],
[menuEducation, education],
[menuTrainings, trainings],
[menuPortfolio, portfolio],
[menuCerts, trainings],
[menuSkills, skill]];
// trainings and certs are compiled in the same section

for (let index = 0; index < sectionArray.length; index++) {
    // initially all sections are disabled
    sectionArray[index][1].style.display='none';
    sectionArray[index][0].addEventListener('click', () => {
        // removing extended menu
        menuExtended.style.display = 'none'
        // removing all description sections
        for (let i = 0; i < sectionArray.length; i++) {
            sectionArray[i][1].style.display = 'none';
        }
        // only showing clicked description section
        sectionArray[index][1].style.display = 'block';
    })
}
// only about section is enabled
sectionArray[0][1].style.display='block';

// now making list of projects done for portfolio
const myGitHub='https://github.com/mozammilkarim';
const portfolioPro=[
    {name:'DiscountQueen',img:'./discountQueen.png',category:'Frond End',url:'https://discountqueen.in/'},
    {name:'Meditation App',imgUrl:'./Meditation App.png',category:'Java Script',url:'https://github.com/mozammilkarim/vanilla-Java-Script-Projects/tree/main/meditation%20app'},
    {name:'Random Password Generator',img:'./Random Password Generator.png',category:'Java Script',url:'https://github.com/mozammilkarim/vanilla-Java-Script-Projects/tree/main/password%20generator'},
    {name:'Desktop Assistant(Jarvis)',img:'./Jarvis.png',category:'Python',url:'https://github.com/mozammilkarim/Python/blob/master/desktopAssistant.py'},
    {name:'Billing Software',img:'./billingSoftware.png',category:'Python',url:'https://github.com/mozammilkarim/Python/blob/master/GUI%20projects/billingSoftwareGUI.py'}
]
