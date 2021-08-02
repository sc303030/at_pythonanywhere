var mapContainer = document.getElementById('map'), // 지도를 표시할 div
    mapOption = {
        center: new kakao.maps.LatLng(37.54699, 127.09598), // 지도의 중심좌표
        level: 4 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption);

// --------------- 지도 여러개 작업 시작 ------------------

// map_list.forEach((element, idx, array) => {
//     // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
//     var markerPosition = new kakao.maps.LatLng(element['위도'], element['경도']); // 마커가 표시될 위치입니다
//
// // 마커를 생성합니다
//     var marker = new kakao.maps.Marker({
//         position: markerPosition
//     });
//
// // 마커가 지도 위에 표시되도록 설정합니다
//     marker.setMap(map);
//
// // 커스텀 오버레이에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
//     var content = `<div class="customoverlay">
//                         <a data-toggle="modal" data-target="#exampleModal" id="model-click" onclick="new_click();">
//                             <span class="title">${element['시설명']}</span>
//                         </a>
//                     </div>`;
//
// // 커스텀 오버레이가 표시될 위치입니다
//     var position = new kakao.maps.LatLng(element['위도'], element['경도']);
//
// // 커스텀 오버레이를 생성합니다
//     var customOverlay = new kakao.maps.CustomOverlay({
//         map: map,
//         position: position,
//         content: content,
//         yAnchor: 1
//     });
// })

// ------------- 지도 여러 개 끝 --------------
// ---------- 지도 컨트롤 추가 시작 -------
var mapTypeControl = new kakao.maps.MapTypeControl();

// 지도에 컨트롤을 추가해야 지도위에 표시됩니다
// kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

// 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
// ---------- 지도 컨트롤 추가 끝 -------

var menu_btn = document.querySelector("#menu-btn");
var menu_btn_span = document.querySelector("#menu-btn > span");
var sidebar = document.querySelector("#sidebar");
var menu_btn_click = () => {
    menu_btn.addEventListener("click", () => {
        sidebar.classList.toggle("active-nav");
        // container.classList.toggle("active-cont");
        menu_btn_span.classList.toggle("slide-btn-left");
        menu_btn_span.classList.toggle("new-span-left");
        menu_btn.classList.toggle("menu-btn-left");
    });
}
menu_btn_click();
var new_click = (e) => {
    var temp = document.querySelector("#menu-btn");
    var span = e.children;
    var address = $(span).attr('data-address');
    var tel = $(span).attr('data-tel');
    var title = $(span).text();
    $('#food-title').text(`${title}`);
    $('#food-address').text(`주소 : ${address}`);
    $('#food-tel').text(`전화번호 : ${tel}`);
    if($('#sidebar').hasClass('active-nav') == false){
        temp.click();
    }
}

// ----------------- 정보 지도 끝 ------------------
var seoul_select = document.querySelector('map');

seoul_select.addEventListener("click", eventHandler, false);

function eventHandler(e) {
    e.preventDefault();
    var url = e.target.href
    $.ajax({
        url: url,
        type: 'get',
    })
        .done((data) => {
            var map_list = JSON.parse(data['map'])
            var mapContainer = document.getElementById('map'), // 지도를 표시할 div
                mapOption = {
                    center: new kakao.maps.LatLng(map_list[0]['위도'], map_list[0]['경도']), // 지도의 중심좌표
                    level: 4 // 지도의 확대 레벨
                };

            var map = new kakao.maps.Map(mapContainer, mapOption);
            // forEach 시작
            map_list.forEach((element, idx, array) => {
                // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
                var markerPosition = new kakao.maps.LatLng(element['위도'], element['경도']); // 마커가 표시될 위치입니다

// 마커를 생성합니다
                var marker = new kakao.maps.Marker({
                    position: markerPosition
                });

// 마커가 지도 위에 표시되도록 설정합니다
                marker.setMap(map);

// 커스텀 오버레이에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
                var content = `<div class="customoverlay">
                        <a data-toggle="modal" data-target="#exampleModal" id="model-click" onclick="new_click(this);">
                            <span class="title" data-address="${element['주소']}" data-tel="${element['전화번호']}">${element['시설명']}</span>
                        </a>
                    </div>`;

// 커스텀 오버레이가 표시될 위치입니다
                var position = new kakao.maps.LatLng(element['위도'], element['경도']);

// 커스텀 오버레이를 생성합니다
                var customOverlay = new kakao.maps.CustomOverlay({
                    map: map,
                    position: position,
                    content: content,
                    yAnchor: 1
                });
            }) // forEach 끝
            // ---------- 지도 컨트롤 추가 시작 -------
            var mapTypeControl = new kakao.maps.MapTypeControl();

// 지도에 컨트롤을 추가해야 지도위에 표시됩니다
// kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
            map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

// 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
            var zoomControl = new kakao.maps.ZoomControl();
            map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
// ---------- 지도 컨트롤 추가 끝 -------
        })
}