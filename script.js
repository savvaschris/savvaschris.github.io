


$(function () {

    //Scroll page on click event
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

    /*Expand sub-sections*/
    var subSectionInfo = ["#masters", "#bachelors"];

    for (i = 0; i < subSectionInfo.length; i++) {
        $(subSectionInfo[i] + "-education").hide();
        $(subSectionInfo[i] + " .glyphicon-chevron-right").hide();
    }
    $(subSectionInfo[0]).click(function () {
        $(subSectionInfo[0] + "-education").toggle("slow");
        toggleChevronAndText(subSectionInfo[0]);
    });
    $(subSectionInfo[1]).click(function () {
        $(subSectionInfo[1] + "-education").toggle("slow");
        toggleChevronAndText(subSectionInfo[1]);
    });

    /*Expand each element of sub-sections*/
    var courseIds = ["#gvc", "#ase", "#compv", "#compg", "#resMethCS", "#advDb", "#distrSys", "#compNetInt", "#mastThe"];

    for (i = 0; i < courseIds.length; i++) {
        $(courseIds[i] + "-text").hide();
        $(courseIds[i] + " .glyphicon-chevron-right").hide();
    }

    $(courseIds[0]).click(function () {
        $(courseIds[0] + "-text").toggle("fast");
        toggleChevronAndText(courseIds[0]);
    });
    $(courseIds[1]).click(function () {
        $(courseIds[1] + "-text").toggle("fast");
        toggleChevronAndText(courseIds[1]);
    });
    $(courseIds[2]).click(function () {
        $(courseIds[2] + "-text").toggle("fast");
        toggleChevronAndText(courseIds[2]);
    });
    $(courseIds[3]).click(function () {
        $(courseIds[3] + "-text").toggle("fast");
        toggleChevronAndText(courseIds[3]);
    });
    $(courseIds[4]).click(function () {
        $(courseIds[4] + "-text").toggle("fast");
        toggleChevronAndText(courseIds[4]);
    });
    $(courseIds[5]).click(function () {
        $(courseIds[5] + "-text").toggle("fast");
        toggleChevronAndText(courseIds[5]);
    });
    $(courseIds[6]).click(function () {
        $(courseIds[6] + "-text").toggle("fast");
        toggleChevronAndText(courseIds[6]);
    });
    $(courseIds[7]).click(function () {
        $(courseIds[7] + "-text").toggle("fast");
        toggleChevronAndText(courseIds[7]);
    });
    $(courseIds[8]).click(function () {
        $(courseIds[8] + "-text").toggle("fast");
        toggleChevronAndText(courseIds[8]);
    });


    /*Expand each element of sub-sections*/
    var projectsIds = ["#personal-website", "#master-thesis", "#adv-soft-eng", "#comp-vision", "#comp-games", "#bachelors-project"];

    for (i = 0; i < projectsIds.length; i++) {
        $(projectsIds[i] + "-text").hide();
        $(projectsIds[i] + " .glyphicon-chevron-right").hide();
    }

    $(projectsIds[0]).click(function () {
        $(projectsIds[0] + "-text").toggle("fast");
        toggleChevronAndText(projectsIds[0]);
    });
    $(projectsIds[1]).click(function () {
        $(projectsIds[1] + "-text").toggle("fast");
        toggleChevronAndText(projectsIds[1]);
    });
    $(projectsIds[2]).click(function () {
        $(projectsIds[2] + "-text").toggle("fast");
        toggleChevronAndText(projectsIds[2]);
    });
    $(projectsIds[3]).click(function () {
        $(projectsIds[3] + "-text").toggle("fast");
        toggleChevronAndText(projectsIds[3]);
    });
    $(projectsIds[4]).click(function () {
        $(projectsIds[4] + "-text").toggle("fast");
        toggleChevronAndText(projectsIds[4]);
    });
    $(projectsIds[5]).click(function () {
        $(projectsIds[5] + "-text").toggle("fast")
        toggleChevronAndText(projectsIds[5]);;
    });

    function toggleChevronAndText(selectorValue){
        $(selectorValue + " .glyphicon-chevron-down").toggle("fast");
        $(selectorValue + " .glyphicon-chevron-right").toggle("fast");
    }

});

/*Add star rating to Technical skills section in cv page*/
$(document).ready(function () {

    //Star ratings for skills
    var fullStar  = "<span class=\"glyphicon glyphicon-star\"></span>";
    var emptyStar = "<span class=\"glyphicon glyphicon-star-empty\"></span>";
    var oneStar   = fullStar + emptyStar + emptyStar + emptyStar + emptyStar,
        twoStar   = fullStar + fullStar + emptyStar + emptyStar + emptyStar,
        threeStar = fullStar + fullStar + fullStar + emptyStar + emptyStar,
        fourStar  = fullStar + fullStar + fullStar + fullStar + emptyStar,
        fiveStar = fullStar + fullStar + fullStar + fullStar + fullStar;

    var skills = [{ skillName: "html", skillRating: threeStar }, { skillName: "xml", skillRating: oneStar },
                  { skillName: "css", skillRating: threeStar }, { skillName: "javascript", skillRating: threeStar },
                  { skillName: "jquery", skillRating: threeStar }, { skillName: "bootstrap", skillRating: threeStar },
                  { skillName: "wordpress", skillRating:threeStar}, { skillName:"xampp", skillRating:oneStar},
                  { skillName: "cplusplus", skillRating: threeStar }, { skillName: "java", skillRating: threeStar },
                  { skillName: "csharp", skillRating: threeStar }, { skillName: "visualstudio", skillRating: fourStar },
                  { skillName: "eclipse", skillRating: twoStar }, { skillName: "git", skillRating: twoStar },
                  { skillName: "mysql", skillRating: oneStar }, { skillName: "unity", skillRating: threeStar },
                  { skillName: "axis", skillRating: twoStar }, { skillName: "dotnet", skillRating: threeStar },
                  { skillName: "posix", skillRating: twoStar }, { skillName: "opencv", skillRating: fourStar },
                  { skillName: "opengl", skillRating: twoStar }, 
                  { skillName: "openni", skillRating: twoStar }, { skillName: "kinectsdk", skillRating: oneStar },
                  { skillName: "latex", skillRating: threeStar }, { skillName: "gimp", skillRating: threeStar },
                  { skillName: "inkscape", skillRating: twoStar }, { skillName: "windows", skillRating: fiveStar },
                  { skillName: "linux", skillRating: threeStar }, { skillName: "androidos", skillRating: fourStar }
                 ];

    for (i = 0; i < skills.length; i++) {
        $("#skill-" + skills[i].skillName).append("<span class=\"star-rating\">" + skills[i].skillRating + "</span>");
    }


});

/*Make each section visible on scroll*/
$(document).ready(function () {

    $(window).scroll(function () {

        $("#cv section").each(function (i) {

            var top_of_object = $(this).position().top;
            var top_of_window = $(window).scrollTop();
            console.log("top_of_object " + top_of_object + " top_of_window " + top_of_window);
            if (top_of_window > top_of_object - 100) {
                $(this).animate({ "opacity": '1' }, 1000);
            }
        });

        $("#index-page section").each(function (i) {

            var top_of_object = $(this).position().top;
            var top_of_window = $(window).scrollTop();
            console.log("top_of_object " + top_of_object + " top_of_window " + top_of_window);
            if (top_of_window > top_of_object - 100) {
                $(this).animate({ "opacity": '1' }, 800);
            }
        });
    });

});

