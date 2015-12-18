/*=============================================================================================	
 Document   : Javascript Plugin - oblagio Auto Complete
 Author     : Rizki Nida Chaerulsyah - akuiki.net
 ==============================================================================================*/

$.fn.oblagioAutoComplete = function (s) {
    var
            elem = this,
            wrapper = '',
            xhr,
            t = {},
            act = {};

    t.url = '';
    t.method = 'get'
    t.keyboard = false;

    s = $.extend(t, s);

    act.init = function () {
        $("body").append("<div class='obla_listdata'></div>");
        $(".obla_listdata").css({
            top: elem.offset().top + elem.outerHeight(),
            left: elem.offset().left
        });

        act.searchingProccess();

    };

    act.getData = function (param) {
        if (xhr) {
            xhr.abort();
        }

        xhr = $.ajax({
            url: t.url,
            type: "get",
            dataType: "html",
            data: param,
            beforeSend: function () {
                act.loading();
                act.showList();
            },
            success: function (html) {
                $(".obla_listdata").html(html);
            },
            complete: function () {
                act.loading();
            }

        });
    };

    act.searchingProccess = function () {
        elem.on('keyup', function () {
            var param = "param=" + $(this).val();
            act.getData(param);

            if ($(this).val() === "")
                act.hideList();
        });

        $(".obla_listdata").on('click', '.opt', function () {
            console.log('coba');
            elem.val($(this).text());
            $(this).addClass('active');
            if ($(this).attr('param') != undefined)
                act.getData($(this).attr('param'))
            else
                act.hideList();
        });
    };

    act.showList = function () {
        if (!$(".obla_listdata").is(":visible")) {
            $(".obla_listdata").stop().css({
                marginTop: '-20px',
                opacity: 0,
                display: 'block'
            });
            $(".obla_listdata").animate({
                marginTop: '10px',
                opacity: 1,
            }, 300);
        }
    };


    act.hideList = function () {
        $(".obla_listdata").animate({
            marginTop: '-20px',
            opacity: 0,
        }, 300, function () {
            $(".obla_listdata").stop().css({
                display: 'none'
            });
        });
    };


    act.loading = function () {
        if (!$(".obla_listdata").hasClass('loading'))
            $(".obla_listdata").addClass('loading')
        else
            $(".obla_listdata").removeClass('loading')
    };

    act.init();
    return false;
};

