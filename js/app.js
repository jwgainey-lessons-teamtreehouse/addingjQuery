// $(".spoiler button").click( function () {
//     $(".spoiler span").slideDown();
//     $(".spoiler button").fadeOut(1000);
// });
$('.spoiler').on('click', 'button', function(event) {
    console.log(event.target);
    $(this).prev().show();
    $(this).hide();
});

const $button = $("<button>RevealSpoiler</button>")

$(".spoiler").append($button);

$(".spoiler span").hide();


