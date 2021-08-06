var ctx = document.getElementById('myChart').getContext('2d');
var ctx_2 = document.getElementById('myChart2').getContext('2d');
var ctx_3 = document.getElementById('myChart3').getContext('2d');
var ctx_4 = document.getElementById('myChart4').getContext('2d');
var ctx_5 = document.getElementById('myChart5').getContext('2d');

var onion = predict.filter((ele) => {
    if (ele['품목'] == '양파') {
        return ele
    }
});
var pork = predict.filter((ele) => {
    if (ele['품목'] == '돼지고기') {
        return ele
    }
});
var radish = predict.filter((ele) => {
    if (ele['품목'] == '무(1kg)') {
        return ele
    }
});
var beef = predict.filter((ele) => {
    if (ele['품목'] == '쇠고기(한우1등급)') {
        return ele
    }
});
var squash = predict.filter((ele) => {
    if (ele['품목'] == '애호박') {
        return ele
    }
});
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: onion.map((e) => {
            return e.날짜
        }),
        datasets: [{
            label: 'onion',
            data: onion.map((e) => {
                return Number(e.평균가격)
            }),
            borderColor: [
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});
var myChart2 = new Chart(ctx_2, {
    type: 'line',
    data: {
        labels: pork.map((e) => {
            return e.날짜
        }),
        datasets: [{
            label: 'pork',
            data: pork.map((e) => {
                return e.평균가격
            }),
            borderColor: [
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});
var myChart3 = new Chart(ctx_3, {
    type: 'line',
    data: {
        labels: radish.map((e) => {
            return e.날짜
        }),
        datasets: [{
            label: 'radish',
            data: radish.map((e) => {
                return e.평균가격
            }),
            borderColor: [
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});
var myChart4 = new Chart(ctx_4, {
    type: 'line',
    data: {
        labels: beef.map((e) => {
            return e.날짜
        }),
        datasets: [{
            label: 'beef',
            data: beef.map((e) => {
                return e.평균가격
            }),
            borderColor: [
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});
var myChart5 = new Chart(ctx_5, {
    type: 'line',
    data: {
        labels: squash.map((e) => {
            return e.날짜
        }),
        datasets: [{
            label: 'squash',
            data: squash.map((e) => {
                return e.평균가격
            }),
            borderColor: [
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});
var show_div = (obj) => {
    var div = $('.price-div')
    var span = $('.price-select-span')
    Array.prototype.forEach.call(div, (element, index, array) => {
        $(element).addClass('price-div-none');
    });
    Array.prototype.forEach.call(span, (element, index, array) => {
        $(element).removeClass('price-select');
    });
    var name = $(obj).attr('id')
    $(obj).addClass('price-select')
    $(`div[name=${name}]`).removeClass('price-div-none')
    // cabbage_t();
};

$("#cabbage-div").owlCarousel({
    nav: true,
    dots: true,
    margin: 10,
    responsiveClass: true,
    responsive: {0: {items: 2,}, 600: {items: 2}, 1000: {items: 5}}
});


var calculation = (e) => {
    var td = $(e.parentNode.parentNode.parentNode).siblings();
    var h5 = $($(td[0]).children()[1]).children()[1].getAttribute('value');
    var cnt = $(e).siblings('input').val();
    var up_down = e.classList[0]
    var cnt_int = ''
    if(up_down == 'inc'){
        cnt_int = Number(cnt) + 1
    }else{
        cnt_int = Number(cnt) - 1
    }
    var sum = Number(h5) * cnt_int;
    td[1].setAttribute('value', sum)
    td[1].innerText = sum.toLocaleString('ko-KR')
}

Array.prototype.forEach.call($('.qtybtn'), (e, idx) => {
    $(e).attr('onclick', 'calculation(this)');
})

var update_btn =document.querySelector('.update__btn')
update_btn.addEventListener('click',()=>{
    var price = $('.cart__price');
    var sum = Number(0)
    Array.prototype.forEach.call(price, (ele, idx) => {
        if(idx != 0){
            sum += Number(ele.getAttribute('value'));
        }
    })
    $('#total-span').text(sum.toLocaleString('ko-KR'));
    $('.cart__total').css({'padding':'6px 35px'})
})