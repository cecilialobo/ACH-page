const aboutLink = document.querySelector('.about-link');
const workLink = document.querySelector('.work-link');
const actionLink = document.querySelector('.action-link');
const partnersLink = document.querySelector('.partners-link');

aboutLink.addEventListener('click', () => {
    const aboutSection = document.querySelector('.about');
    aboutSection.scrollIntoView({behavior: "smooth"});
});

workLink.addEventListener('click', () => {
    const workSection = document.querySelector('.work');
    workSection.scrollIntoView({behavior: "smooth"});
});

actionLink.addEventListener('click', () => {
    const actionSection = document.querySelector('.take-action');
    actionSection.scrollIntoView({behavior: "smooth"});
});

partnersLink.addEventListener('click', () => {
    const partnersSection = document.querySelector('.partners');
    partnersSection.scrollIntoView({behavior: "smooth"});
});
