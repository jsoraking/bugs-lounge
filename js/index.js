$(document).ready(function () {

    //메인 이미지 슬라이드
    var swiper = new Swiper('.swiper-container', {
        auto: 3000,
        pagination: { //페이징 버튼
            el: '.swiper-pagination',
            type: 'bullets',
        },
        loop: true,
        auto: true,
    });


    //이미지 슬라이드 백그라운드
    var imgSlide = new Image();

    //이미지 경로
    imgSlide1 = 'img/thumb/main-slide_thumb_0.jpg';
    imgSlide2 = 'img/thumb/main-slide_thumb_1.jpg';
    imgSlide3 = 'img/thumb/main-slide_thumb_2.jpg';
    imgSlide4 = 'img/thumb/main-slide_thumb_3.jpg';

    setTimeout(function () {
        var myImg = [];
        var context = [];
        for (var i = 0; i <= $('.swiper-slide').length - 1; i++) {
            $('.canvas-wrap').append('<canvas id="canvas' + i + '"></canvas>'); //이미지슬라이드 밖에 추가
            myImg[i] = new Image();
            //console.log(myImg[i]); //이미지경로
            myImg[i].src = './img/thumb/main-slide_thumb_' + i + '.jpg'; //이미지 파일명
            context[i] = document.getElementById('canvas' + i).getContext('2d');
            context[i].drawImage(myImg[i], 0, 0);
            $('.js-swiper-container .swiper-slide[data-swiper-slide-index="'+i+'"]').attr('data-back', 'rgb(' + context[i].getImageData(0, 0, 1, 1).data[0] + ',' + context[i].getImageData(0, 0, 1, 1).data[1] + ',' + context[i].getImageData(0, 0, 1, 1).data[2] + ')');
        }
        $('.swiper-container').css('background-color', $('.swiper-slide-active').attr('data-back'));
        swiper.on('slideChange', function () {
            setTimeout(function () {
                $('.js-swiper-container').css('background-color', $('.swiper-slide-active').attr('data-back'));
            }, 100);
        });
    }, 100);
});