function feedbackReaction_k(id_value){
    if (id_value === "star5" || id_value === "star4") {
        window.open("https://www.google.com");
        var form_iframe = document.getElementById("feedbackForm-konstantin");
        form_iframe.classList.add("hide-konstantin");
    }
    else {
        var form_iframe = document.getElementById("feedbackForm-konstantin");
        form_iframe.classList.remove("hide-konstantin");
    }
}