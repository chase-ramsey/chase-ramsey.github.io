$(document).ready(() => {
    $('.projects-list').hide();
    $('.project-item').hide();

    $('.content-card').hide();
    $('.glyphicon-sunglasses').hide();
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

// Animate sidebar links
$('.sidebar-nav a').mouseover((e) => {
    $(e.target).animate({
        left: '+=5'
    }, 150);
})

$('.sidebar-nav a').mouseout((e) => {
    $(e.target).animate({
        left: '-=5'
    }, 150)
})

// Hide/show content-cards when clicked in sidebar
$current = null
$currentLink = null

$('.sidebar-nav a').click((e) => {
    $clicked = $(e.target);
    if ($clicked.attr('show') !== 'none') {
        if ($currentLink !== null) {
            $currentLink.children('.glyphicon-sunglasses').fadeOut(150)
        }
        $clicked.children('.glyphicon-sunglasses').fadeIn(150)
        $currentLink = $clicked
        next = $clicked.attr('show');
        if ($current !== null) {
            $current.slideUp(250);
        }
        $(next).slideDown(250);
        $current = $(next);
    }
})
