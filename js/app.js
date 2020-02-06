// $(".spoiler button").click( function () {
//     $(".spoiler span").slideDown();
//     $(".spoiler button").fadeOut(1000);
// });
$('.spoiler').on('click', 'button', function() {
    $(".spoiler span").slideDown();
    $(".spoiler button").fadeOut(1000);
});

const $button = $("<button>RevealSpoiler</button>")

$(".spoiler").append($button);

$(".spoiler span").hide();


