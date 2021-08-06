var translate_func = (e) => {
    var str = $('#this-trans').text();
    $.ajax({
        type: "GET",
        url: "https://dapi.kakao.com/v2/translation/translate?src_lang=kr&target_lang=en&query=" + str,
        dataType: 'json',
        headers: {"Authorization": "KakaoAK 2973b252d29afb061a175276d6c6c0f0"},
        data: '{}',
        success: function (data) {
            var tans = data.translated_text[0][0];
            console.log(tans)
            $('#trans-result').text(tans);
        },
        error: function (xhr, ajaxOptions, throwError) {
            reject(throwError);
        }
    });
}


var heart = (obj) => {
    $(obj).toggleClass('animate');
    var new_form = new FormData($('#like-kpop').get(0));
    var idol_name = $('#idol_name').text();
    var idol_group = $('#idol_group').attr('src');
    var idol_image = $('#idol_image').attr('src');
    new_form.append('idol_name', idol_name)
    new_form.append('idol_group', idol_group)
    new_form.append('idol_image', idol_image)
    if ($(obj).hasClass('animate') == false) {
        new_form.append('delete', 'yes')
    }else{
        new_form.append('delete', 'no')
    }
    var url = $('#like-kpop').attr('action')
    $.ajax({
        type: 'post',
        url: url,
        data: new_form,
        cache: false,
        processData: false,
        contentType: false,
    })
        .done((data) => {

        })
}
// document.getElementById("trans-btn").addEventListener("click", translate);

var idol_mouse_on = (obj) => {
    var name = $(obj).children().eq(0).attr('name');
    var sibling = $(obj).children().eq(1);
    sibling.html(`<h3 style="font-family: NanumSquareRound; color: black;font-weight: 600;">${name}</h3>`);
    $(obj).children().eq(0).addClass("idol-circle-hover");
    $(obj).children().eq(0).removeClass("idol-circle-out");
}

var idol_mouse_out = (obj) => {
    var sibling = $(obj).children().eq(1);
    sibling.empty();
    $(obj).children().eq(0).removeClass("idol-circle-hover");
    $(obj).children().eq(0).addClass("idol-circle-out");
}

var show = () => {
    $("#this-video").owlCarousel({
        nav: true,
        loop: true,
        dots: true,
        autoplay: true,
        rewind: true,
        autoplayTimeout: 5000,
        margin: 10,
        responsiveClass: true,
        responsive: {0: {items: 2,}, 600: {items: 2}, 1000: {items: 2}}
    });
}
$('#video02Link').magnificPopup({
    type: 'inline',
    midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
});

$('#video03Link').magnificPopup({
    type: 'inline',
    midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
});


