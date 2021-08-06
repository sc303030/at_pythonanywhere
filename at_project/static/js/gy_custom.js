var reset_table = (array, text, px) => {
    text += '<div class="row">'
    Array.prototype.forEach.call(array, (element, index, array) => {
        var onclick = $(element.children).attr('onclick')
        var alt = $(element.children).children().attr('alt')
        var src = $(element.children).children().attr('src')
        text += `<div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="product__item recipe-hover">
                        <div class="product__item__pic set-bg" data-setbg="${src}"
                            style="background-image: url(${src}); background-size: 100%;" onclick="${onclick}">
                        </div>
                    <div class="product__item__text" style="padding-top:${px}px;">
                    <h6 class="new-recipe-h4"><a href="#" onclick="${onclick}">${alt}</a></h6>
                    </div>
                    </div>
                </div>`
    });
    text += "</div>"
    return text
};
var reload_recipe = () => {
    var table_1 = $('#nongsaroApiLoadingAreaResult').children('.apiContArea').children('.tabelRound').children('ul').children();
    var table_2 = $('#nongsaroApiLoadingAreaResult1').children('.apiContArea').eq(0).children('.tabelRound').children('ul').children();
    var table_3 = $('#nongsaroApiLoadingAreaResult1').children('.apiContArea').eq(1).children('.tabelRound').children('ul').children();
    var text_1 = ''
    var text_2 = ''
    var text_3 = ''
    text_1 += reset_table(table_1, text_1, 0)
    text_2 += reset_table(table_2, text_2, 20)
    text_3 += reset_table(table_3, text_3, 10)
    $('#nongsaroApiLoadingAreaResult').children('.apiContArea').children().eq(1).remove();
    $('#nongsaroApiLoadingAreaResult').children('.apiContArea').append(text_1);

    $('#nongsaroApiLoadingAreaResult1').children('.apiContArea').eq(0).children().eq(1).remove();
    $('#nongsaroApiLoadingAreaResult1').children('.apiContArea').eq(1).children().eq(1).remove();

    $('#nongsaroApiLoadingAreaResult1').children('.apiContArea').eq(0).append(text_2);
    $('#nongsaroApiLoadingAreaResult1').children('.apiContArea').eq(1).append(text_3);
};
$('.modal-backdrop').css('background-color', '');

