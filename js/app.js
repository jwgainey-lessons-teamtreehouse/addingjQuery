const $button = $("<button>RevealSpoiler</button>")

$(".spoiler").append($button);

$(".spoiler span").hide();
$(".spoiler button").on('click mouseleave', function () {
    $(".spoiler span").slideDown();
    $(".spoiler button").fadeOut(1000);
});

