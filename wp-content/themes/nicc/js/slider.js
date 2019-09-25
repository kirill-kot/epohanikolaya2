$(document).ready(function () {
   var $watchArea = $("#slider-content-watch");
   var $sliderContent = $("#slider-all-content").find("img");
   var $sliderNavPrev = $("#slider-nav-bar").find("button:first-of-type");
   var $sliderNavNext = $("#slider-nav-bar").find("button:last-of-type");
   var $sliderSmallSlide = $("#slider-nav-bar .content");
   var $activSlide = $sliderContent.eq(0).clone().appendTo($watchArea);
   // watchSizeImg($activSlide);
   var $activeIndex = 0;
    var $oldSmall;
   var $smallSlide = [];
   for (i = 0;i < $sliderContent.length;i++){
       $smallSlide[i] = $sliderContent.eq(i).clone().appendTo($sliderSmallSlide);
       $smallSlide[i].wrap('<div></div>');
       // watchSizeImg($smallSlide[i]);
       $smallSlide[i].click(function () {
           selectSlide(this);
       })
   }
   var $colSlide = $("#slider-nav-bar .content").find('div');
   setInterval(autoPlay,10000);
   $sliderNavPrev.click(function () {
       leafSlide('prev');
   })
   $sliderNavNext.click(function () {
       leafSlide('next');
   })
    function selectSlide($obj) {
        var $oldSlide;
        var $object = $obj;
        let $tempSlides = $($object).clone().appendTo($watchArea);
        // watchSizeImg($tempSlides);
        $oldSlide = $activSlide;
        $activSlide = $tempSlides;
        $oldSlide.animate({marginLeft:- $activSlide.outerWidth() + 1},1000);
        let $anim = $.when($oldSlide.animate({marginLeft:- $activSlide.outerWidth() + 1},1000));
        $anim.done(function () {
            $oldSlide.remove();
        })
    }
    function leafSlide($direction) {
        var $oldSlide;
        if ($direction == 'next'){
            if ($activeIndex < $sliderContent.length - 1){
                $activeIndex++;
                let $tempSlides = $sliderContent.eq($activeIndex).clone().prependTo($watchArea);
                // watchSizeImg($tempSlides);
                $tempSlides.css({'margin-left':- $tempSlides.outerWidth() + 1})
                $oldSlide = $activSlide;
                $activSlide = $tempSlides;
                let $anim = $.when($activSlide.animate({marginLeft:'0'},1000));
                $anim.done(function () {
                    $oldSlide.remove();
                })
                $sliderSmallSlide.find('div:last-child').css({'margin-left':- $sliderSmallSlide.find('div:last-child').outerWidth() - 5}).prependTo($sliderSmallSlide);
                $sliderSmallSlide.find("div:first-child").animate({marginLeft:'5px'},300);
            } else {
                $activeIndex = 0;
                let $tempSlides = $sliderContent.eq($activeIndex).clone().prependTo($watchArea);
                // watchSizeImg($tempSlides);
                $tempSlides.css({'margin-left':- $tempSlides.outerWidth() + 1})
                $oldSlide = $activSlide;
                $activSlide = $tempSlides;
                let $anim = $.when($activSlide.animate({marginLeft:'0'},1000));
                $anim.done(function () {
                    $oldSlide.remove();
                })
                $sliderSmallSlide.find('div:last-child').css({'margin-left':- $sliderSmallSlide.find('div:last-child').outerWidth() - 5}).prependTo($sliderSmallSlide);
                $sliderSmallSlide.find("div:first-child").animate({marginLeft:'5px'},300);
            }
        } else if($direction == 'prev'){
            if ($activeIndex < $sliderContent.length - 1){
                $activeIndex++;
                let $tempSlides = $sliderContent.eq($activeIndex).clone().appendTo($watchArea);
                // watchSizeImg($tempSlides);
                $oldSlide = $activSlide;
                $activSlide = $tempSlides;
                $oldSlide.animate({marginLeft:- $activSlide.outerWidth() + 1},1000);
                let $anim = $.when($oldSlide.animate({marginLeft:- $activSlide.outerWidth() + 1},1000));
                $anim.done(function () {
                    $oldSlide.remove();
                })
                let $nowSmall =   $sliderSmallSlide.find('div:first-child');
                $nowSmall.animate({'margin-left':- $nowSmall.outerWidth() - 5},300,function () {
                    $nowSmall.appendTo($sliderSmallSlide);
                    $nowSmall.css({'margin-left':'5px'});
                    $nowSmall.stop()
                });
            } else {
                $activeIndex = 0;
                let $tempSlides = $sliderContent.eq($activeIndex).clone().appendTo($watchArea);
                // watchSizeImg($tempSlides);
                $oldSlide = $activSlide;
                $activSlide = $tempSlides;
                $oldSlide.animate({marginLeft:- $activSlide.outerWidth()},1000);
                let $anim = $.when($oldSlide.animate({marginLeft:- $activSlide.outerWidth()},1000));
                $anim.done(function () {
                    $oldSlide.remove();
                })
                let $nowSmall =   $sliderSmallSlide.find('div:first-child');
                $nowSmall.animate({'margin-left':- $nowSmall.outerWidth() - 5},300,function () {
                    $nowSmall.appendTo($sliderSmallSlide);
                    $nowSmall.css({'margin-left':'5px'});
                    $nowSmall.stop()
                });
            }
        } else {
            alert('error');
        }
    }
    function watchSizeImg($object) {
       if($object.outerWidth() < $object.parent().outerWidth()){
           $object.css({'width':'100%','height':'auto'});
       } else {
           $object.css({'width':'auto','height':'100%'});
       }
   }
   function autoPlay() {
       var $oldSlide;
       if ($activeIndex < $sliderContent.length - 1){
           $activeIndex++;
           let $tempSlides = $sliderContent.eq($activeIndex).clone().appendTo($watchArea);
           // watchSizeImg($tempSlides);
           $oldSlide = $activSlide;
           $activSlide = $tempSlides;
           $oldSlide.animate({marginLeft:- $activSlide.outerWidth() + 1},1000);
           let $anim = $.when($oldSlide.animate({marginLeft:- $activSlide.outerWidth() + 1},1000));
           $anim.done(function () {
               $oldSlide.remove();
           })
           $sliderSmallSlide.find("div:first-child").animate({marginLeft:- $sliderSmallSlide.find("div:first-child").outerWidth() - 5},1000);
           let $smallAnim = $.when($sliderSmallSlide.find("div:first-child").animate({marginLeft:- $sliderSmallSlide.find("div:first-child").outerWidth() - 5},1000));
           $smallAnim.done(function () {
               $sliderSmallSlide.find("div:first-child").css({'margin-left':'5px'}).appendTo($sliderSmallSlide);
           })

       } else {
           $activeIndex = 0;
           let $tempSlides = $sliderContent.eq($activeIndex).clone().appendTo($watchArea);
           // watchSizeImg($tempSlides);
           $oldSlide = $activSlide;
           $activSlide = $tempSlides;
           $oldSlide.animate({marginLeft:- $activSlide.outerWidth()},1000);
           let $anim = $.when($oldSlide.animate({marginLeft:- $activSlide.outerWidth()},1000));
           $anim.done(function () {
               $oldSlide.remove();
           })
           $sliderSmallSlide.find("div:first-child").animate({marginLeft:- $sliderSmallSlide.find("div:first-child").outerWidth() - 5},1000);
           let $smallAnim = $.when($sliderSmallSlide.find("div:first-child").animate({marginLeft:- $sliderSmallSlide.find("div:first-child").outerWidth() - 5},1000));
           $smallAnim.done(function () {
               $sliderSmallSlide.find("div:first-child").css({'margin-left':'5px'}).appendTo($sliderSmallSlide);
           })
       }
   }
});