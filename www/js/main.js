$("#cookies_accept").on("click", function () {
    localStorage.setItem("cookies_checked","true")
    $(".cookies_show_hide").hide();
});
$(document).ready(function () {
    const cookies_value = localStorage.getItem("cookies_checked")
    if (cookies_value == "true") {
        $(".cookies_show_hide").hide();
    }
    else {
        $(".cookies_show_hide").show();
    }
}) 
$(".navbar-toggler").on("click", function () {
    $(".navbar-nav").show()
});

$(".close").on("click", function () {
    $(".navbar-nav").hide()
});
$("#Privacy").on("click", function () {
    const languageIdentifier = localStorage.getItem("language")
    if (languageIdentifier == "NL") {
        //  window.location.href = "https://www.hillspet.be/nl-be/legal-statement-and-privacy-policy"
        window.open('https://www.hillspet.be/nl-be/legal-statement-and-privacy-policy', '_blank');
    }
    else {
        window.open('https://www.hillspet.be/fr-be/legal-statement-and-privacy-policy', '_blank');
    }
});
$("#cookies").on("click", function () {
    const languageIdentifier = localStorage.getItem("language")
    if (languageIdentifier == "NL") {
        //  window.location.href = "https://www.hillspet.be/nl-be/cookie-policy"
        window.open('https://www.hillspet.be/nl-be/cookie-policy', '_blank');
    }
    else {
        window.open('https://www.hillspet.be/fr-be/cookie-policy', '_blank');
    }
})
$("#contact_menu").on("click", function () {
    const languageIdentifier = localStorage.getItem("language")
    if (languageIdentifier == "NL") {
        window.open('https://www.hillspet.be/nl-be/contact-us', '_blank');
    }
    else {
        window.open('https://www.hillspet.be/fr-be/contact-us', '_blank');
    }
})
$("#menu_game_rules").on("click", function () {
    const languageIdentifier = localStorage.getItem("language")
    if (languageIdentifier == "NL") {
        window.location.href = "nl-rules.html"
    }
    else {
        window.location.href = "fr-rules.html"
    }
})   
$("#game_rules").on("click", function () {
    const languageIdentifier = localStorage.getItem("language")
    if (languageIdentifier == "NL") {
        window.location.href = "nl-rules.html"
    }
    else {
        window.location.href = "fr-rules.html"
    }
}) 
$("#cookies_below").on("click", function () {
   
const languageIdentifier = localStorage.getItem("language")
if (languageIdentifier == "NL") {
  window.open('https://www.hillspet.be/nl-be/cookie-policy', '_blank');
}
else {
  window.open('https://www.hillspet.be/fr-be/cookie-policy', '_blank');
}
})