function scrollFooter(scrollY, heightFooter)
{
    console.log(scrollY);
    console.log(heightFooter);

    if(scrollY >= heightFooter)
    {
        $('footer').css({
            'bottom' : '0px'
        });
        
    }
    else
    {
        $('footer').css({
            'bottom' : '-' + heightFooter + 'px'
        });
    }
    
}

$(window).on('load resize', function(){
    var windowHeight        = $(window).height(),
        footerHeight        = $('footer').height(),
        heightDocument      = (windowHeight) + ($('.content').height()) + ($('footer').height());

    $('#scroll-animate, #scroll-animate-main').css({
        'height' :  heightDocument + 'px'
    });
   
    $('header').css({
        'height' : windowHeight + 'px',
    });

    $('.wrapper-parallax').css({
        'margin-top' : windowHeight + 'px',
    });

    scrollFooter(window.scrollY, footerHeight);

    $(window).on('scroll', function(){
        var scroll = window.scrollY;

        $('#scroll-animate-main').css({
            'top' : '-' + scroll + 'px'
        });

        
        if(scroll >= (heightDocument/2)){
            $('header').css({
                'top' : '-' + windowHeight + 'px'
            });
        }else{
            $('header').css({
                'top':'0px'
            });  
        }

        scrollFooter(scroll, footerHeight);
    });

});