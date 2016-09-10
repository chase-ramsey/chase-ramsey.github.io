// Hide content/project cards initially
$('.skills').hide()
$('.broadsheet').hide()

// Animate sidebar links
$('.sidebar-nav a').mouseover(function(e) {
    $(e.target).animate({
        left: '+=5'
    }, 150);
})

$('.sidebar-nav a').mouseout(function(e) {
    $(e.target).animate({
        left: '-=5'
    }, 150)
})

// Hide/show content-cards when clicked in sidebar
$current = $('.about')
$currentLink = $('.first-card')

$('.sidebar-nav a').click(function(e) {
    $currentLink.removeClass('active');
    $currentLink = $(e.target);
    $currentLink.addClass('active');
    next = $currentLink.attr('show');
    if ($current !== null) {
        $current.slideUp(250);
    }
    $(next).slideDown(250);
    $current = $(next);
})

$('.dropdown').click(function(e) {
    e.preventDefault();
    $('.contact-links').fadeToggle(200);
})
