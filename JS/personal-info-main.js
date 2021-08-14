function addScript(url) {
    document.write("<script language=javascript src=./config/config.js></script>");
}
addScript();
//不使用配置文件请注释点上面代码

//星光依旧灿烂，激情仍然燃烧。因为有梦想，所以我存在。你在你的领域里不惜青春，我在我的道路上不知疲倦。
$(function () {
    if (config) {
        $(".name").html(config.name);
        $(".sex").html(config.sex);
        $(".age").html(config.age);
        $(".phone").html(config.phone);
        $(".email").html(config.email);
        $(".address").html(config.address);
        $(".qq").html(config.qq);
        $(".log").html(config.log);
        $(".self-intro").html(config.welcome);
        $(".me").html(config.about);
        $(".for-work").html(config.excpect_work);
        $(".profile-page .page-header").css("background-image", "url(" + config.url[0] + ")");
        $(".myphoto").attr("src", config.url[1]);
        $(".portfolio-section").css({
            "background": "url(" + config.url[2] + ") no-repeat center top",
            "margin-top": "30px",
            "padding-top": "50px",
            "text-align": "center !important",
            "background-attachment": "relative !important",
            "background-position": "center center !important",
            "min-height": "800px",
            "width": "100%",
            "background-size": "100%",
            "background-size": "cover",
            "position": "relative !important"
        });
        $(".others-section").css("background", "url(" + config.url[3] + ")");
        $(".desc").html(config.skills_description);
        //------E-------


        if (config.skills) {
            for (let i = 0; i < config.skills.length; i++) {
                let skill_name = config.skills[i][0];
                let num = config.skills[i][1];
                let color = config.skills[i][2];
                let s = "<div class=\"progress_bar\">\n" +
                    "    <div class=\"pro-bar\">\n" +
                    "        <small class=\"progress_bar_title\">\n" +
                    skill_name +
                    "            <span class=\"progress_number\">%</span>\n" +
                    "        </small>\n" +
                    "        <span class=\"progress-bar-inner p-a\"\n" +
                    "              style=\"background-color:" + color + "; width:" + num + "%;\" data-value=\"" + num + "\"\n" +
                    "              data-percentage-value=\"" + num + "\"></span>\n" +
                    "    </div>\n" +
                    "</div>";
                $(".skill-body").append(s)
            }
        }


        let row_i = 0;
        if (config.portfolio) {
            for (let i = 0; i < config.portfolio.length; i++) {
                if (i % 3 == 0) {
                    $(".portfolio-section-main-container").append("<div class=\"row\"></div>");
                    row_i++;
                }
                let e = $(".portfolio-section-main-container .row").eq(row_i - 1);
                let img = config.portfolio[i][0];
                let url = config.portfolio[i][1];
                let projectName = config.portfolio[i][2];
                let brief = config.portfolio[i][3];
                e.append("<div class=\"col-md-4\">\n" +
                    "    <div class=\"porfolio-image img-raised\" data-aos=\"fade-up\"\n" +
                    "         data-aos-anchor-placement=\"top-bottom\">\n" +
                    "        <a href=\"" + url + "\" title=\"点击查看详细信息\">\n" +
                    "            <figure class=\"portfolio-section-main\">\n" +
                    "                <img src=\"" + img + "\" alt=\"Image\" />\n" +
                    "                <figcaption>\n" +
                    "                    <div class=\"h4\">" + projectName + "</div>\n" +
                    "                    <p>" + brief + "</p>\n" +
                    "                </figcaption>\n" +
                    "            </figure>\n" +
                    "        </a>\n" +
                    "    </div>\n" +
                    "</div>");
            }
        }


        if (config.work) {
            for (let i = 0; i < config.work.length; i++) {

                let time = config.work[i][0];
                let what = config.work[i][1];
                let desc = config.work[i][2];


                $(".experience-section .container").append(
                    "<div class=\"card\">\n" +
                    "    <div class=\"row\">\n" +
                    "        <div class=\"col-md-3 bg-primary\" data-aos=\"fade-right\" data-aos-offset=\"50\"\n" +
                    "             data-aos-duration=\"500\">\n" +
                    "            <div class=\"card-body\">\n" +
                    "                <p class=\"time\">\n" +
                    "                    " + time + "\n" +
                    "                </p>\n" +
                    "                <strong class=\"work\">" + what + "</strong>\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "        <div class=\"col-md-9\" data-aos=\"fade-left\" data-aos-offset=\"50\" data-aos-duration=\"500\">\n" +
                    "            <div class=\"card-body\">\n" +
                    desc +
                    "            </div>\n" +
                    "        </div>\n" +
                    "    </div>\n" +
                    "</div>"
                );
            }
        }

        if (config.others) {
            for (let i = 0; i < config.others.length; i++) {
                var e;
                if (i % 2 == 0) {
                    e = $(".timeline-left .timeul");
                } else {
                    e = $(".timeline-right .timeul");
                }
                let time = config.others[i][0];
                let what = config.others[i][1];
                let desc = config.others[i][2];
                e.append(
                    "<li>\n" +
                    "    <div class=\"time-title\">" + time + "</div>\n" +
                    "    <span></span>\n" +
                    "    <div class=\"time-content\">\n" +
                    "        <h5>" + what + "</h5>\n" +
                    "        <p>" + desc + "</p>\n" +
                    "    </div>\n" +
                    "\n" +
                    "</li>"
                )
            }
        }

        if (config.icon) {
            for (let i = 0; i < config.icon.length; i++) {
                let img = config.icon[i][0];
                let url = config.icon[i][1];
                let desc = config.icon[i][2];
                $(".icon-insert").append(
                    "<a class=\"my-tooltip\" href=\"" + url + "\" title=\"访问我的社交平台\">\n" +
                    "    <img src=\"" + img + "\" alt=\"\">\n" +
                    "    <span class=\"my-tooltiptext\">" + desc + "</span>\n" +
                    "</a>"
                );
            }
        }
    }



    var h;

    $(window).resize(function () {
        h = $(".page-header").height() - $(".page-header .bg-primary").height();
    })

    progress();
    if ($(window).scrollTop() >= $(".page-header").height() - $(".page-header .bg-primary").height()) {
        $(".page-header .bg-primary").css("cssText", "background-color:rgb(55 65 178)!important");
    }
    $(window).scroll(function () {
        h = $(".page-header").height() - $(".page-header .bg-primary").height();
        if ($(window).scrollTop() >= h) {
            $(".page-header .bg-primary").css("cssText", "background-color:rgb(55 65 178)!important");
        } else {
            $(".page-header .bg-primary").css("cssText", "background-color:rgba(0,0,0,0.20)!important");
        }


        if ($(".skill-section .card").hasClass("aos-animate")) {
            $(".progress-bar-inner").addClass("p-a");
            progress();
        } else {
            $(".progress-bar-inner").removeClass("p-a");
        }

    });

    function progress() {
        var progress = $(".progress-bar-inner");
        progress.each(function (i) {
            var data = $(this).attr('data-value');
            $(this).prev().find("span").html(data + "%");
        });
    }

    $(".send-btn").on("click", mailsend);

    function mailsend() {
        var subject = $(".subject").val();
        var content = $(".message").val();
        content = content.replace(new RegExp(' ', 'g'), '%20');

        content = content.replace(new RegExp('\n', 'g'), '%0d%0a');

        // if (confirm("你确定要向" + who + "放送邮件吗?") == true) {
        //     location="mailto:sample@fly63.com?subject=test&cc=sample@hotmail.com&subject=主题&body=内容";
        // }
        location = "mailto:" + config.email + "?subject=" + subject + "&body=" + content;
    }




    // ---- 座右铭字缓出效果 -----
    var text = "衣带渐宽终不悔，为伊消得人憔悴";
    var length = text.length;
    let index = 0;
    var mottoArrs = config.motto;
    // $.ajaxSettings.async = false;
    // $.getJSON("./motto.json", function (data) {
    //     mottoArrs = data;
    // })
    var e1 = setInterval(insWords, 150);
    var e2 = 0;

    function insWords() {
        if (index <= length + 1 && index >= 0) {
            $(".page-header .motto").append(text[index]);
        }
        index++;
        if (index > length) {
            index += 50;
            e2 = setInterval(delWords, 50);
            clearInterval(e1);
        }
    }

    function delWords() {
        if (index <= length && index >= 0) {
            let shower = text.substr(0, index);
            $(".page-header .motto").html(shower);
        }
        index--;
        if (index < 0) {
            index = -5;
            let i = Math.floor(mottoArrs.length * Math.random());
            text = mottoArrs[i];
            length = text.length;
            e1 = setInterval(insWords, 150);
            clearInterval(e2);
        }

    }

    // ----- END ------



    //--- 绑定按钮特效和文字淡入淡出 ---
    $(".self-intro").fadeIn(3000);
    $(".hvr-bounce-to-right").fadeIn(3000);

    //----END---


});