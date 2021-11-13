const widget = document.querySelector('#widget')

const mainContent = document.querySelectorAll('.visible')
const headerTitle = document.querySelector('#headerTitle')

function handleForm(form) {

    if (form[0].value !== '') {
     let name = form[0].value
     widget.hidden = 'true'
     mainContent.forEach(elem => elem.classList.toggle('visible'))
     headerTitle.innerHTML = `Привет, ${name}`
    }

    return false
}

const skillsContainer = document.querySelector('#skills')

const skills = [
{
    icon: 'fas fa-file-code',
    title: 'HTML/CSS',
    description: 'HTML5, CSS3, mobile-first approach, CSS libraries, animation, grid, flexbox'
},
{
    icon: 'fab fa-sass',
    title: 'SASS',
    description: 'Nesting, mixins and variables'
},
{
    icon: 'fab fa-git',
    title: 'GIT',
    description: 'Pushing and cloning code, branching'
},
{
    icon: 'fab fa-js-square',
    title: 'Javascript',
    description: 'JS fundamentals: variables, data types, functions, ES6 syntax, OOP principles, asynchronous JS'
},
{
    icon: 'fab fa-react',
    title: 'ReactJS',
    description: 'Functional and class components, react hooks, JSX syntax'
},
{
    icon: 'fas fa-box-open',
    title: 'Webpack',
    description: 'Configuring webpack to bundle projects'
},
{
    icon: 'fas fa-fire-alt',
    title: 'Firebase API',
    description: 'Used Firebase auth and database for my projects'
},
{
    icon: 'fab fa-figma',
    title: 'Figma, Pixelmator',
    description: 'Extracting CSS and elements, resizing images'
},
{
    icon: 'fas fa-language',
    title: 'English',
    description: 'Upper intermediate'
},
]

skills.forEach(skill => {
    skillsContainer.insertAdjacentHTML('beforeend', renderCard(skill))
})

skillsContainer.addEventListener('click', (e) => {
    e.target.previousElementSibling.classList.toggle('invisible')
    e.target.nextElementSibling.classList.toggle('invisible')
})

function renderCard({id, icon, title, description}) {
    return `<div class="skill-card">
    <i class="${icon} invisible"></i>
    <h3 class="skill-card-title">${title}</h3>
    <p class="skill-card-description invisible" >
    ${description}
    </p>
</div>`
}

const educationContainer = document.querySelector('.education')

const education = [
    {
        source: 'React course | Udemy',
        period: 'apr - june 2021',
    },
    {
        source: 'EPAM frontend program',
        period: 'sep - dec 2020',
    },
    {
        source: 'Frontend developnent course',
        period: 'feb - apr 2020',
    },
    {
        source: 'Borys Grinchenko Kyiv University',
        period: 'sep 2012 - july 2016',
    },
]

education.forEach(item => {
    educationContainer.insertAdjacentHTML('beforeend', renderEducationInfo(item))
})

function renderEducationInfo({source, period, info}) {
    return `<div class="education-card">
    <h3 class="education-card-title">${source}</h3>
    <span class="education-card-period">${period}</span>
</div>`
}

const projectsContainer = document.querySelector('.project')

const projects = [
{
    title: 'Client Manager',
    url: 'https://olhalatun.github.io/client-table/',
    img: './assets/project1.png',
    info: 'Приложение отображает клиентов, полученных из сервера. Можно фильтровать и искать нужных пользователей. Основная технология ReactJS' 
}, 
{
    title: 'Todo List',
    url: 'https://olhalatun.github.io/todo-list/',
    img: './assets/project2.png',
    info: 'Туду лист сохраняет введенные данные в localstorage, следит за измнением статуса задач. Использовала нативный JS' 
}, 
{
    title: 'Github Stargazer',
    url: 'https://olhalatun.github.io/github_stargazer/',
    img: './assets/project3.png',
    info: 'Приложение для поиска git репозиториев, сортирует список по количеству звезд репозиториев. Использовала GitHub API, Bootstrap, JS' 
},
]

projects.forEach(project => {
    projectsContainer.insertAdjacentHTML('beforeend', renderProjectCard(project))
})

function renderProjectCard({title, url, img, info }) {
    return `<div class="project-card">
    <div class="project-card-preview">
        <h3 class="project-card-title">${title}</h3>
        <a href="${url}" target="_blank"><img class="project-card-img" src="${img}" alt="project"></a>
    </div>
    <p class="project-card-info">${info}</p>
</div>`
}

const assesment = document.querySelector('.assess-container')
const assesmentResult = document.querySelector('.assess-result')

assesment.addEventListener('click', (e) => {
    switch(e.target.id) {
    case 'good': 
    assesmentResult.innerHTML = "Спасибо! Рада, что тебе понравилось :)"
    break;
    case 'ok': 
    assesmentResult.innerHTML = "Спасибо! Подумаю как улучшить интерфейс :)"
    break;
    case 'bad': 
    assesmentResult.innerHTML = "Что ж, я не могу нравиться всем ;)"
    break;
    }
})

