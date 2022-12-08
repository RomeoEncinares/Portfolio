const project_1 = document.getElementById('project_1');
const project_2 = document.getElementById('project_2');
const project_3 = document.getElementById('project_3');

const project_1_url = 'https://github.com'
const project_2_url = 'https://github.com'
const project_3_url = 'https://github.com'

project_1.addEventListener('click', (e) => {
    window.open(project_1_url)
})

project_2.addEventListener('click', (e) => {
    window.open(project_2_url)
})

project_3.addEventListener('click', (e) => {
    window.open(project_3_url)
})