$(document).ready(function () {
    var $callBackBtn = $("[key = call-back]");
    var $answersBtn = $("[key = answers]");
    var $popUpAnswers = $("#pop-up__call-back");
    var $popUpCallUs = $("#pop-up__call-us");
    var $collapseBtn = $("#collapse-btn");
    var $collapseNav = $(".content__header__nav-bar");
    var $collapseCard = $collapseNav.find('input[type="checkbox"]');
    var $collapseCardBtn = $("#collapse-card");
    var $mobilColapseBtn = $("#collapse__button");
    var $mobilNavMenu = $("#mobil-menu");
    var $mobilCloseBtn = $mobilNavMenu.find(".mobil-menu__close");
    var $fotoCard = $(".foto__catalog__card");
    var $inputNavBar = $('.content__header__nav-bar input');
    $inputNavBar.on('change',function () {
       let $tempInput = $(this);
       let $inputNumb = 0;
       for(i = 0;i < $inputNavBar.length;i++){
           if($inputNavBar.eq(i).prop('checked')){
               $inputNumb += 1;
           }
       }
       if($inputNumb > 1){
           $inputNavBar.prop('checked',false);
           $tempInput.prop('checked',true);
       }
        $(document).mouseup(function (e){
            if (!$tempInput.is(e.target)
                && $tempInput.has(e.target).length === 0) {
                $inputNavBar.prop('checked',false);
            }
        });
    });
    $mobilCloseBtn.click(function () {
        $mobilNavMenu.css({display:'none'});
    });
    $mobilColapseBtn.click(function () {
       $mobilNavMenu.css({display:'block'});
    });
    $collapseBtn.click(function () {
        collapseMenu();
    });
    $answersBtn.click(function () {
        answersPopUp();
        return false;
    });
    $callBackBtn.click(function () {
        callBackPopUp();
        return false;
    });
    function collapseMenu() {
        $collapseCard.unbind();
        $collapseCardBtn.unbind();
        $collapseCard.prop('checked',false);
        $collapseBtn.css({'position':'absolute','left':'85%','top':'10px'});
        $collapseNav.animate({padding:'20px 15px',height:"show"},400);
        $collapseBtn.unbind();
        $collapseCard.change(function () {
            $collapseCardBtn.css('display','block');
            $collapseCard.unbind();
            $collapseCard.change(function () {
                $collapseCardBtn.css('display','none');
                collapseMenu();
            })
            $collapseCardBtn.click(function () {
                $collapseCard.prop('checked',false);
                $collapseCardBtn.css('display','none');
                collapseMenu();
            })
        });
        $collapseBtn.click(function () {
            $collapseNav.animate({padding:'0px 15px',height:"hide"},400);
            if($collapseNav.parent().parent().hasClass("clone")){
                $collapseBtn.css({'position':'relative','left':'0','top':'10px'});
            } else {
                $collapseBtn.css({'position':'relative','left':'0','top':'120px'});
            }
            $collapseCardBtn.css('display','none');
            $collapseBtn.unbind();
            $collapseBtn.click(function () {
                collapseMenu();
            })
        });
    }
    function callBackPopUp() {
        $("#pop-up").css('display','block');
        $popUpCallUs.css('display','block');
        let $closedPopUp = $('button.btn-close');
        $closedPopUp.unbind();
        $('.pop-up__shadow').click(function () {
            closePop();
        })
        $(document).keydown(function (e) {
            if (e.which == "27"){
                closePop();
            };
        })
        $closedPopUp.click(function () {
            closePop();
        })
    }
    function answersPopUp() {
        $("#pop-up").css('display','block');
        $popUpAnswers.css('display','block');
        let $closedPopUp = $('button.btn-close');
        $closedPopUp.unbind();
        $('.pop-up__shadow').click(function () {
            closePop();
        })
        $(document).keydown(function (e) {
            if (e.which == "27"){
                closePop();
            };
        })
        $closedPopUp.click(function () {
            closePop();
        })
    };
    $('.news-card__body').ready(function () {
        var $fixImg = $('.news-card__body img').not(".news-card__body__slider *");
       if($fixImg.length >= 1 ){
           for(i=0;i <= $fixImg.length - 1;i++){
               $fixImg.eq(i).removeAttr('width').removeAttr('height');
               // $fixImg.eq(i).wrap('<div style="max-height: 80vh"></div>')
               imgFitParentMyToo($fixImg.eq(i));
           }
       }
        function imgFitParent(imgElemt)
        {
            if(imgElemt.parent().width() > imgElemt.parent().height()){
                imgElemt.height("80%");
                imgElemt.width('auto');
            }else{
                imgElemt.width("80%");
                imgElemt.height('auto');
            }
        }
        function imgFitParentMy(imgElemt)
        {
            if(imgElemt.width() > imgElemt.height()){
                imgElemt.height("auto");
                imgElemt.width('80%');
            }else{
                imgElemt.width("auto");
                imgElemt.height('80%');
            }
        }
        function imgFitParentMyToo(imgElemt)
        {
            if(imgElemt.width() > imgElemt.height()){
                imgElemt.height("auto");
                imgElemt.width('80%');
            }else{
                let $tempCof = imgElemt.height() / imgElemt.width();
                let $modWitdh = 80 / $tempCof + '%';
                imgElemt.width($modWitdh);
                imgElemt.height('auto');
            }
        }
})
});
function closePop() {
    $("#pop-up").css('display','none');
    $("#pop-up__call-back").css('display','none');
    $("#pop-up__call-us").css('display','none');
    $popUpCalendar.css('display','none');
};