/*
 * Copyright (C) Saranyu Technologies - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 *
 * Written by :  Raghavendra AK <hiraghuak@gmail.com>, Year 2018
 * File Description : Play iframe video on user viewport
*/

//------------------start
    var getActiveIframeSrc;
    function getSRcbro() {
      getActiveIframeSrc = setTimeout(getIframeSrcFun, 200);
    }
    function getIframeSrcFun() {
      var getIframeScr = $('.videoActive').find('iframe');
      var IsElementHasVideoActiveClassw2 = $('.videoDiv').parent().hasClass('videoActive');
      if (IsElementHasVideoActiveClassw2 == true) {
        getIframeScr.each(function () {
          var $this = $(this);
          var _src = $this.attr("src");
          var u = new Url(_src);
          delete u.query.notplay;
          u.query.scrollply = 'true';
          var decodedUri = decodeURIComponent(u);
          $this.attr("src", decodedUri);
        });
      }
    }
//------------------end

//------------------start
    function checkSrcGetits() {
      var SrcHasGetVideoScrClass = $('.Get_VideoSrc').find('iframe').attr('src');
      console.log(SrcHasGetVideoScrClass + ' bro SRC');
    }
//------------------end

//------------------start
    var removeGetVideoClass;
    function RemoveGetVideoSrcClass() {
      removeGetVideoClass = setTimeout(RemoveGetFuction, 300);
    }
    function RemoveGetFuction() {
      $('.videoDiv').parent('.saranyuiframevideo').find('.videoDiv').removeClass('Get_VideoSrc');
    }
//------------------end

//------------------start
function makeOrginalSrc(){
       var GetVideoElementAddingOrginalSrc = $('.Get_VideoSrc').find('iframe');
       var Getviesers = $('iframe').parent().hasClass('Get_VideoSrc');
       if (Getviesers == true) {
        var dasdrewe = $('.Get_VideoSrc').find('iframe');
        var _src = dasdrewe.attr("src");
        var getrulsSRcs = _src;
        var u = new Url(getrulsSRcs);
        delete u.query.scrollply;
        u.query.notplay = 'true';
        var decodedUri = decodeURIComponent(u);
          $('.Get_VideoSrc').find('iframe').attr('src', decodedUri);
      }
}
//------------------end

//------------------start
var addgetVideoSrcs;
function AddGetVideosSClass() {
  addgetVideoSrcs = setTimeout(advioersrse, 100);
}
function advioersrse() {
  $('.videoDiv').parent('.videoActive').find('.videoDiv').addClass('Get_VideoSrc');
}
//------------------end

    // FIND THE VIDEO POSTION ON VIEWPORT START 
    // ScrollMagic.min.js NEED TO USE 
    var controller = new ScrollMagic.Controller();
    $('.saranyuiframevideo').each(function () {
      var scene = new ScrollMagic.Scene({
          triggerElement: this,
          duration: 400
        })

        .on("enter ", function (e) {
          if (e.type == "enter") {
            console.log("Enter");
            getSRcbro();
            AddGetVideosSClass();
          }
        })

        .on("leave", function (e) {
          console.log("Leave");
          RemoveGetVideoSrcClass();
          makeOrginalSrc();
        })

        .setClassToggle(this, "videoActive")
        .addIndicators() // its only for development
        .addTo(controller);
    });
    // FIND THE VIDEO POSTION ON VIEWPORT END