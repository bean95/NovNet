$(document).ready(function() {
    $("#menu .li .a").mouseover(function() {
        $("#menu .li").removeClass("select");
        $(this).parent().addClass("select");
    });
    allwidth = document.getElementById("imagelisttable").clientWidth;
    scrolltimeout = setTimeout("loadsetInterval()", splitspeed); //add test
    $("#num div").click(function() {
        $("#num div").removeClass("selectnum");
        $(this).addClass("selectnum");
        index_ = Number($(this).text()) - 1;
        $("#bannerlist").scrollLeft(scrollwidth * index_);
        var image_index = $("#imagelisttable td:first");
        for (var i = 0; i < $("#imagelisttable td").length; i++) {
            if (i < index_) {
                image_index = image_index.next();
            } else break;
        }
        // $("#image_title").html($(image_index).find("img").attr("title"));
        scrollnum = 0;
        addwidth = 0;
        clearTimeout(scrollset);
        clearTimeout(scrolltimeout);
        scrolltimeout = setTimeout("loadsetInterval()", splitspeed);
    });
    var image_index = $("#imagelisttable img:first");
    for (var i = 0; i < $("#imagelisttable img").length; i++) {
        if (i < index_) {
            image_index = image_index.next();
        }
        break;
    }

});
var index_ = 0;
var scrollwidth = 488;
var scrollnum = 0;
var addwidth = 0;
var allwidth = 0;
var scrollset;
var scrolltimeout;
var leftorright = "right";
var splitspeed = 1500;
var speed = 10;
function leftclick() {
    var prevleft = $("#bannerlist").scrollLeft();
    if (prevleft > 0) {} else {

}
    if (prevleft >= (allwidth - scrollwidth)) {} else {}
    addwidth = addwidth + scrollnum;
    if (addwidth <= scrollwidth) {
        if (prevleft - scrollnum > 0) {
            $("#bannerlist").scrollLeft(prevleft - scrollnum);
        } else {

            index_ = 0;
            $("#num div").removeClass("selectnum");
            $("#menu_" + index_).addClass("selectnum");
            $("#bannerlist").scrollLeft(0);
            var image_index = $("#imagelisttable td:first");
            for (var i = 0; i < $("#imagelisttable td").length; i++) {
                if (i < index_) {
                    image_index = image_index.next();
                } else break;
            }
            leftorright = "right";
            clearTimeout(scrollset);
            clearTimeout(scrolltimeout);
            scrolltimeout = setTimeout("loadsetInterval()", splitspeed);
            scrollnum = 0;
            addwidth = 0;
            return;
        }
    } else {

        index_--;
        $("#num div").removeClass("selectnum");
        $("#menu_" + index_).addClass("selectnum");
        $("#bannerlist").scrollLeft(prevleft - (scrollwidth - (addwidth - scrollnum)));
        var image_index = $("#imagelisttable td:first");
        for (var i = 0; i < $("#imagelisttable td").length; i++) {
            if (i < index_) {
                image_index = image_index.next();
            } else break;
        }
        clearTimeout(scrollset);
        clearTimeout(scrolltimeout);
        scrolltimeout = setTimeout("loadsetInterval()", splitspeed);
        scrollnum = 0;
        addwidth = 0;
        prevleft = $("#bannerlist").scrollLeft();
        if (prevleft > 0) {} else {}
    }
    scrollnum += 5;

}
function rightclick() {
    addwidth = addwidth + scrollnum;
    var prevleft = $("#bannerlist").scrollLeft();
    if (prevleft >= (allwidth - scrollwidth)) {} else {}
    if (prevleft > 0) {} else {}

    if (addwidth <= scrollwidth) {

        if (prevleft + scrollnum >= (allwidth - addwidth)) {
            $("#bannerlist").scrollLeft(allwidth - addwidth);
            clearTimeout(scrollset);
            clearTimeout(scrolltimeout);
            scrolltimeout = setTimeout("loadsetInterval()", splitspeed);
            scrollnum = 0;
            addwidth = 0;
            leftorright = "left";
            return;
        } else {
            $("#bannerlist").scrollLeft(prevleft + scrollnum);
        }
    } else {

        index_++;
        $("#num div").removeClass("selectnum");
        $("#menu_" + index_).addClass("selectnum");
        $("#bannerlist").scrollLeft(prevleft + (scrollwidth - (addwidth - scrollnum)));
        var image_index = $("#imagelisttable td:first");
        for (var i = 0; i < $("#imagelisttable td").length; i++) {
            if (i < index_) {
                image_index = image_index.next();
            } else break;
        }
        clearTimeout(scrollset);
        clearTimeout(scrolltimeout);
        scrolltimeout = setTimeout("loadsetInterval()", splitspeed);
        scrollnum = 0;
        addwidth = 0;
    }
    scrollnum += 5;
}
function loadsetInterval() {
    if (addwidth == 0) {
        if (leftorright == "right") {

            clearTimeout(scrollset);
            scrollset = setInterval("rightclick()", speed);
        } else {
            clearTimeout(scrollset);
            scrollset = setInterval("leftclick()", speed);
        }
    }

}
