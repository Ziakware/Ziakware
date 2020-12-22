if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function () {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function () {
        loaded();
    });
}

function loaded() {

    setInterval(loop, 300);

}

var x = 0;

var titleText = ["|",
					"★…",
					"★… ",
					"★… A",
					"★… Av",
					"★… Avi",
					"★… Avir",
					"★… Avira",
					"★… Avira ",
                    "★… Avira ★…",
                    "★… Avira ★…",
                    "★… Avira ",
                    "★… Avira",
                    "★… Avir",
                    "★… Avi",
                    "★… Av",
                    "★… A",
                    "★… ",
                    "★…",
                    "|",
                    "★…",
                    "★… ",
                    "★… M",
                    "★… Ma",
                    "★… Mad",
                    "★… Mad ",
                    "★… Mad D",
                    "★… Mad Do",
                    "★… Mad Dog",
                    "★… Mad Dog ",
                    "★… Mad Dog ★…",
                    "★… Mad Dog ★…",
                    "★… Mad Dog ",
                    "★… Mad Dog",
                    "★… Mad Do",
                    "★… Mad D",
                    "★… Mad ",
                    "★… Mad",
                    "★… Ma",
                    "★… M",
                    "★… ",
                    "★…", ];


function loop() {
    document.getElementsByTagName("title")[0].innerHTML = titleText[x++ % titleText.length];
}

$(window).on("scroll", function () {
    var a = $("#header");
    200 < $(window).scrollTop() ? a.addClass("sticky_navigation") : a.removeClass("sticky_navigation")
}), $("#wrapper-dropdown").click(function (a) {
    $(this).hasClass("active") ? $(this).removeClass("active") : $(this).addClass("active")
}), $("a[href^='#']").click(function (a) {
    a.preventDefault();
    var s = $(this).attr("href");
    return $("html, body").animate({
        scrollTop: $(s).offset().top + "px"
    }, 2e3, function () {
        "#home" == s && ($(".navbar-auth").removeClass("advantages-a buy-a support-a").addClass("home-a"), $(".navbar-lang").removeClass("lang-advantages lang-buy lang-support").addClass("lang-home")), "#advantages" == s && ($(".navbar-auth").removeClass("home-a buy-a support-a").addClass("advantages-a"), $(".navbar-lang").removeClass("lang-home lang-buy lang-support").addClass("lang-advantages")), "#buy" == s && ($(".navbar-auth").removeClass("home-a advantages-a support-a").addClass("buy-a"), $(".navbar-lang").removeClass("lang-home lang-advantages lang-support").addClass("lang-buy")), "#support" == s && ($(".navbar-auth").removeClass("home-a advantages-a buy-a").addClass("support-a"), $(".navbar-lang").removeClass("lang-home lang-advantages lang-buy").addClass("lang-support"))
    }), !1
}), $(".support-item").click(function (a) {
    $(this).is("#hw-1") && ($("#1").addClass("active-win"), $("#2").removeClass("active-win"), $("#3").removeClass("active-win"), $("#4").removeClass("active-win"), $("#5").removeClass("active-win")), $(this).is("#hw-2") && ($("#1").removeClass("active-win"), $("#2").addClass("active-win"), $("#3").removeClass("active-win"), $("#4").removeClass("active-win"), $("#5").removeClass("active-win")), $(this).is("#hw-3") && ($("#1").removeClass("active-win"), $("#2").removeClass("active-win"), $("#3").addClass("active-win"), $("#4").removeClass("active-win"), $("#5").removeClass("active-win")), $(this).is("#hw-4") && ($("#1").removeClass("active-win"), $("#2").removeClass("active-win"), $("#3").removeClass("active-win"), $("#4").addClass("active-win"), $("#5").removeClass("active-win")), $(this).is("#hw-5") && ($("#1").removeClass("active-win"), $("#2").removeClass("active-win"), $("#3").removeClass("active-win"), $("#4").removeClass("active-win"), $("#5").addClass("active-win")), $(this).is("#hw-6") && window.open("https://vk.com/qn1s_it")
})