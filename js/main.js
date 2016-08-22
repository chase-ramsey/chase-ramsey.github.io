$(document).ready(() => {
    $('.projects-list').hide();
    $('.project-item').hide();

    $('.content-card').hide();
})

// Hide/show project links in sidebar
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

// Hide/show content-cards when clicked in sidebar
$current = null

$('.sidebar nav a').click((e) => {
    $clicked = $(e.target);
    if ($clicked.attr('show') !== 'none') {
        next = $clicked.attr('show')
        if ($current !== null) {
            $current.slideUp(250)
        }
        $(next).slideDown(250)
        $current = $(next)
    }
})
