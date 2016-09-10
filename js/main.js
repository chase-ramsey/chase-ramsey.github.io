// Hide content/project cards initially
$('.first-card .glyphicon-sunglasses').show()
$('.skills-card').hide()
$('.broadsheet-card').hide()

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
$current = $('.about-card')
$currentLink = $('.first-card')

$('.sidebar-nav a').click(function(e) {
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
