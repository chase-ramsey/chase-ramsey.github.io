// Hide content/project cards initially
$('.skills').hide();
$('.broadsheet').hide();

// Show the active-link-sunglasses on the first card
$('.first-card .glyphicon-sunglasses').show();

// Animate sidebar links
$('.sidebar-nav a').mouseover(function(e) {
    $(e.target).animate({
        left: '+=5'
    }, 150);
})

$('.sidebar-nav a').mouseout(function(e) {
    $(e.target).animate({
        left: '-=5'
    }, 150);
})

// Hide/show content-cards when clicked in sidebar
$current = $('.about')
$currentLink = $('.first-card')

$('.sidebar-nav a').click(function(e) {
    $clicked = $(e.target);
    // Check to see if the link clicked leads to the card currently shown
    if ($clicked[0] === $currentLink[0]) {
        return;
    }
    // Make sure the link clicked is a navigation link (i.e. not an external link)
    if ($clicked.attr('show') !== 'none') {
        // If a current link is active, hide the active-link-sunglasses
        if ($currentLink !== null) {
            $currentLink.children('.glyphicon-sunglasses').fadeOut(150);
        }
        // Show the active-link-sunglasses
        $clicked.children('.glyphicon-sunglasses').fadeIn(150);
        // Save the current link as $currentLink for use when user navigates to another section
        $currentLink = $clicked;
        // Find the next card by checking the class stored in the "show" attribute of the link clicked
            // Slide up the current section
            // Slide in the new section
            // Save the current section in $current for use when user navigates to another section
        next = $clicked.attr('show');
        if ($current !== null) {
            $current.slideUp(250);
        }
        $(next).slideDown(250);
        $current = $(next);
    }
})
