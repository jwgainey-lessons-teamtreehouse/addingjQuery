const $button = $("<button>RevealSpoiler</button>")

$(".spoiler").append($button);

$(".spoiler span").hide();
$(".spoiler button").click( function () {
    $(".spoiler span").slideDown();
    $(".spoiler button").fadeOut(1000);
});

