const Menu = document.querySelector('.menuLink');
const menuExtended = document.querySelector('.menuExtended')
const duplicateMenu = document.getElementById('duplicateMenu');
const menuAbout = document.getElementById('menuAbout');
const menuTrainings = document.getElementById('menuTrainings');
const menuEducation = document.getElementById('menuEducation');
const menuPortfolio = document.getElementById('menuPortfolio');
const menuCerts = document.getElementById('menuCerts');
const menuSkills = document.getElementById('menuSkills');
// adding events for Menu at right-top to show extended menu
Menu.addEventListener('click', function (e) {
    e.preventDefault();
    menuExtended.style.display = 'block'

})
// closing extended menu by using duplicate menu in the extended menu
duplicateMenu.addEventListener('click', function (e) {
    e.preventDefault();
    menuExtended.style.display = 'none'
})
// now getting description Section ELements
const about = document.getElementById('about');
const skill = document.getElementById('skill');
const trainings = document.getElementById('trainings');
const education = document.getElementById('education');
const portfolio = document.getElementById('portfolio');
const certs = document.getElementById('certs');
// making a list for corressponding description sections with their extended menu links
const sectionArray = [[menuAbout, about],
[menuEducation, education],
[menuTrainings, trainings],
[menuPortfolio, portfolio],
[menuCerts, trainings],
[menuSkills, skill]];
// trainings and certs are compiled in the same section

//removing all description sections by default and adding 
// events to their corresponding links in extended menu to show them when clicked 
for (let index = 0; index < sectionArray.length; index++) {
    // initially all sections are disabled
    sectionArray[index][1].style.display = 'none';
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
sectionArray[0][1].style.display = 'block';

// now making list of projects done for portfolio
const portfolioPro = [
    { name: 'DiscountQueen', imgUrl: './discountIcon.png', category: 'Front End', url: 'https://discountqueen.in/' },
    { name: 'Meditation App', imgUrl: './javaScript.jpg', category: 'Java Script', url: 'https://github.com/mozammilkarim/vanilla-Java-Script-Projects/tree/main/meditation%20app' },
    { name: 'Random Pass Generator', imgUrl: './javaScript.jpg', category: 'Java Script', url: 'https://github.com/mozammilkarim/vanilla-Java-Script-Projects/tree/main/password%20generator' },
    { name: 'Desktop Assistant(Jarvis)', imgUrl: './python.jpg', category: 'Python', url: 'https://github.com/mozammilkarim/Python/blob/master/desktopAssistant.py' },
    { name: 'Billing Software', imgUrl: './python.jpg', category: 'Python', url: 'https://github.com/mozammilkarim/Python/blob/master/GUI%20projects/billingSoftwareGUI.py' }
]
// grabbing portfolio section elements to change/append it
const portfolioResult = document.getElementById('portfolioResult');
const all = document.getElementById('all');
const javaScript = document.getElementById('javaScript');
const python = document.getElementById('python2');
const frontEnd = document.getElementById('frontEnd');
// portfolio Options array for changing style of clicked option
const portfolioOptions = [all, javaScript, python, frontEnd];

// now adding event listeners to all links/buttons
// to dynamically present projects done
function createProjects(portfolioItem) {
    // adding all projects in portfolioResult node
    // that are passed by respection category of link clicked ,i.e. options like js,python
    const element = document.createElement("div");
    element.className = 'allPortfolio';
    element.innerHTML = `<a href="${portfolioItem.url}"><img src="${portfolioItem.imgUrl}" alt="${portfolioItem.name}"></a>
    <h5>${portfolioItem.name}</h5>`
    portfolioResult.appendChild(element);
}

// changing the styles of clicked portfolio option
function clickOption(option) {
    // changing style of only clicked option and 
    // resetting all other options
    portfolioOptions.forEach(element => {
        if (element == option) {
            option.style.color = 'rgb(6 6 6)';
            option.style.backgroundColor = 'rgb(208 176 207)';
            option.style.padding = '0px 5px';
            option.style.borderRadius = '5px';
        } else {
            unclickOption(element);
        }
    });


}
// for changing unclicked(not clicked) option to be normal
function unclickOption(option) {
    option.style.color = '#7a798c';
    option.style.backgroundColor = '';
    option.style.padding = '0px';
    option.style.borderRadius = '0px';
}


//initially show all category projects by default
portfolioPro.forEach(portfolioItem => {
    // adding all projects in portfolioResult node
    createProjects(portfolioItem);
});
// initially all option is clicked and styled
clickOption(all);

// adding events to portfolio option links/buttons
// to show their category projects
all.addEventListener('click', (e) => {
    e.preventDefault();
    // clicking only all option, changing its style
    clickOption(all);
    // empty the portfolio result to show only clicked category results
    portfolioResult.innerHTML = ``;
    portfolioPro.forEach(portfolioItem => {
        // adding all projects in portfolioResult node
        createProjects(portfolioItem);
    });
})
// for java script projects
javaScript.addEventListener('click', (e) => {
    e.preventDefault();
    // clicking only java script option, 
    // changing its style
    clickOption(javaScript);
    // empty the portfolio result
    portfolioResult.innerHTML = ``;
    portfolioPro.forEach(portfolioItem => {

        if (portfolioItem.category === 'Java Script') {
            // adding javaScript projects in portfolioResult node
            createProjects(portfolioItem)
        }
    });
})
// for Python projects
python.addEventListener('click', (e) => {
    e.preventDefault();
    // clicking only this option, changing its style
    clickOption(python);
    // empty the portfolio result
    portfolioResult.innerHTML = ``;
    portfolioPro.forEach(portfolioItem => {
        console.log('inside pyhton click2')
        if (portfolioItem.category === 'Python') {
            // adding javaScript projects in portfolioResult node
            createProjects(portfolioItem)
        }
    });
})
// for Front End projects
frontEnd.addEventListener('click', (e) => {
    e.preventDefault();
    // clicking only this option, changing its style
    clickOption(frontEnd);
    // empty the portfolio result
    portfolioResult.innerHTML = ``;
    portfolioPro.forEach(portfolioItem => {
        if (portfolioItem.category === 'Front End') {
            // adding javaScript projects in portfolioResult node
            createProjects(portfolioItem);
        }
    });
})
