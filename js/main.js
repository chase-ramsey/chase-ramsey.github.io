$(document).ready(() => {
    $('.projects-list').hide();
    $('.project-item').hide();
})

var projectsShow = false;

$('.projects-link').click(() => {
    if (!projectsShow) {
        $('.projects-list').slideDown();
        $('.project-item').fadeIn();
        projectsShow = true;
    } else {
        $('.projects-list').slideUp();
        $('.project-item').fadeOut();
        projectsShow = false;
    }
})
