
$(document).ready(function () {
    $('.scrollLink').click(function (event) {
        event.preventDefault();
        $('html').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
    })
    let homePage = ($(window).scrollTop() + $(window).innerHeight() > $("#home").offset().top) && ($(window).scrollTop() < $("#home").offset().top + $("#home").outerHeight());
    let aboutPage = ($(window).scrollTop() + $(window).innerHeight() > $("#about").offset().top) && ($(window).scrollTop() < $("#about").offset().top + $("#about").outerHeight());
    let applicationsPage = ($(window).scrollTop() + $(window).innerHeight() > $("#applications").offset().top) && ($(window).scrollTop() < $("#applications").offset().top + $("#applications").outerHeight());
    let blogPage = ($(window).scrollTop() + $(window).innerHeight() > $("#blog").offset().top) && ($(window).scrollTop() < $("#blog").offset().top + $("#blog").outerHeight());
    let contactPage = ($(window).scrollTop() + $(window).innerHeight() > $("#contact").offset().top) && ($(window).scrollTop() < $("#contact").offset().top + $("#contact").outerHeight());
    if (homePage) {
        $(".fixed-top .second-nav-div a:not(a[href='#home'])").removeClass('blue-curPage blue-underlined').addClass('white-underlined');
        $(".fixed-top .second-nav-div a[href='#home']").addClass('white-curPage').removeClass('white-underlined blue-underlined');
        $('.fixed-top a').addClass('white-text').removeClass('blue-text');
    } else if (aboutPage) {
        $('.fixed-top').addClass('white-bg');
        $(".fixed-top .second-nav-div a:not(a[href='#about'])").removeClass('white-curPage blue-curPage').addClass('blue-underlined');
        $("a[href='#about']").addClass('blue-curPage').removeClass('white-underlined blue-underlined');
        $('.fixed-top a').addClass('blue-text').removeClass('white-text');
    } else if (applicationsPage) {
        $('.fixed-top').addClass('white-bg');
        $(".fixed-top .second-nav-div a:not(a[href='#applications'])").removeClass('white-curPage blue-curPage').addClass('blue-underlined');
        $("a[href='#applications']").addClass('blue-curPage').removeClass('white-underlined blue-underlined');
        $('.fixed-top a').addClass('blue-text').removeClass('white-text');
    } else if (blogPage) {
        $('.fixed-top').addClass('white-bg');
        $(".fixed-top .second-nav-div a:not(a[href='#blog'])").removeClass('white-curPage blue-curPage').addClass('blue-underlined');
        $("a[href='#blog']").addClass('blue-curPage').removeClass('white-underlined blue-underlined');
        $('.fixed-top a').addClass('blue-text').removeClass('white-text');
    } else if (contactPage) {
        $('.fixed-top').addClass('white-bg');
        $('.fixed-top a').addClass('blue-text').removeClass('white-text');
    } else if (toolsPage) {
        $('.fixed-top').addClass('white-bg');
        $(".fixed-top .second-nav-div a:not(a[href='#contact'])").removeClass('white-curPage blue-curPage').addClass('blue-underlined');
        $("a[href='#contact']").addClass('blue-curPage').removeClass('white-underlined blue-underlined');
        $('.fixed-top a').addClass('blue-text').removeClass('white-text');
    }
    $(window).on('scroll', function (e) {
        let homePage = ($(window).scrollTop() + $(window).innerHeight() > $("#home").offset().top) && ($(window).scrollTop() < $("#home").offset().top + $("#home").outerHeight());
        let aboutPage = ($(window).scrollTop() + $(window).innerHeight() > $("#about").offset().top) && ($(window).scrollTop() < $("#about").offset().top + $("#about").outerHeight());
        let applicationsPage = ($(window).scrollTop() + $(window).innerHeight() > $("#applications").offset().top) && ($(window).scrollTop() < $("#applications").offset().top + $("#applications").outerHeight());
        let blogPage = ($(window).scrollTop() + $(window).innerHeight() > $("#blog").offset().top) && ($(window).scrollTop() < $("#blog").offset().top + $("#blog").outerHeight());
        let contactPage = ($(window).scrollTop() + $(window).innerHeight() > $("#contact").offset().top) && ($(window).scrollTop() < $("#contact").offset().top + $("#contact").outerHeight());
        if (homePage) {
            $('.fixed-top').removeClass('white-bg');
            $(".fixed-top .second-nav-div a:not(a[href='#home'])").removeClass('blue-curPage blue-underlined').addClass('white-underlined');
            $(".fixed-top .second-nav-div a[href='#home']").addClass('white-curPage').removeClass('white-underlined blue-underlined');
            $('.fixed-top a').addClass('white-text').removeClass('blue-text');
        } else if (aboutPage) {
            $('.fixed-top').addClass('white-bg');
            $(".fixed-top .second-nav-div a:not(a[href='#about'])").removeClass('white-curPage blue-curPage').addClass('blue-underlined');
            $("a[href='#about']").addClass('blue-curPage').removeClass('white-underlined blue-underlined');
            $('.fixed-top a').addClass('blue-text').removeClass('white-text');
        } else if (applicationsPage) {
            $('.fixed-top').addClass('white-bg');
            $(".fixed-top .second-nav-div a:not(a[href='#applications'])").removeClass('white-curPage blue-curPage').addClass('blue-underlined');
            $("a[href='#applications']").addClass('blue-curPage').removeClass('white-underlined blue-underlined');
            $('.fixed-top a').addClass('blue-text').removeClass('white-text');
        } else if (blogPage) {
            $('.fixed-top').addClass('white-bg');
            $(".fixed-top .second-nav-div a:not(a[href='#blog'])").removeClass('white-curPage blue-curPage').addClass('blue-underlined');
            $("a[href='#blog']").addClass('blue-curPage').removeClass('white-underlined blue-underlined');
            $('.fixed-top a').addClass('blue-text').removeClass('white-text');
        } else if (contactPage) {
            $('.fixed-top').addClass('white-bg');
            $(".fixed-top .second-nav-div a:not(a[href='#blog'])").removeClass('white-curPage blue-curPage').addClass('blue-underlined');
            $("a[href='#blog']").addClass('blue-curPage').removeClass('white-underlined blue-underlined');
            $('.fixed-top a').addClass('blue-text').removeClass('white-text');
        }
    });
    function toggleAppModal() {
        $('body').css('overflow', 'hidden');
        $(".appBackdropSec").toggle("active");
        $('.appsModal').empty();
        let demoHeader = $(this).closest('.work-content').find('.w-title').clone();
        let demoToClone = $(this).siblings('.demo').clone();
        demoToClone.removeClass('hidden');
        $('.appsModal').append('<div class="closeModalDiv"></div>');
        console.log();
        $('.appsModal .closeModalDiv').append(demoHeader);
        $('.appsModal .closeModalDiv').append(`<button class='closeX closeAppModel'>close</button>`);
        $('.appsModal').append(demoToClone);
        const techStackToClone = $(this).siblings('.tech-stack').clone();
        $('.appsModal').append(techStackToClone);
        techStackToClone.removeClass('hidden');
        const conclusionToClone = $(this).siblings('.appsConclusion').clone();
        $('.appsModal').append(conclusionToClone);
        conclusionToClone.removeClass('hidden');
        $('.appsModal').append(`
            <div class="btmCloseDiv">
                <a href="${$(this).closest('.workbox').find('.gitHubLink').attr('href')}" target="_blank">
                    <span class="ico-circle">
                        <i class="fa-brands fa-github about-ico"></i>
                    </span>
                </a>
                <button class="closeAppModel">Close</button>
            </div>
        `);
    }
    function toggleCloseAppModel() {
        console.log('testest')
        $('body').css('overflow', 'auto');
        $(".appBackdropSec").toggle("active");
    }
    $(".appBackdrop").click(() => toggleCloseAppModel());
    $(document).on('click', '.closeAppModel', toggleCloseAppModel);
    $(document).on('click', '.viewAppDemo', toggleAppModal);
});
