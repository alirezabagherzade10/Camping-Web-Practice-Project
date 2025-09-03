const sidenav = document.querySelector('.sidenav');
const burgurIcon = document.querySelector('.burgur-icon');
const openBurgurIcon = document.querySelector('.open-burgur-icon');
const navList = document.querySelector('.nav___list');

sidenav.addEventListener('click', () => {
    burgurIcon.classList.toggle('hidden');
    openBurgurIcon.classList.toggle('hidden');
    if(burgurIcon.classList.contains('hidden')){
        navList.classList.remove('hidden-992')
    }else 
    navList.classList.add('hidden-992')
});
