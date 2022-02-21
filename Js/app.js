// hide/show
$(function(){
    $('#hidBtn') .click(function(){
        $('#heading') .hide()
    })
    $('#shoBtn') .click(function(){
        $('#heading') .show()
    })
    $('#togBtn') .click(function(){
        $('#heading') .toggle()
    })
})

// fade

$(function(){
    $('.fdOut') .click(function(){
        $('.fadeBox') .fadeOut(2000)
    })

    $('.fdIn') .click(function(){
        $('.fadeBox') .fadeIn(3000)
    })

    $('.fdToggle') .click(function(){
        $('.fadeBox') .fadeToggle(4000)
    })

    $('.fdTo') .click(function(){
        $('.fadeBox') .fadeTo(5000,.2,function(){
            alert('fadeTo')
            })
        
    })
    $('.stop') .click( function(){
        $('.fadeBox') .stop();
    })
        
    
})

// slide

$(function(){
    $('.flip') .dblclick(function(){
        $('.pannel') .slideDown(3000)
    })

    $('.flip') .dblclick(function(){
        $('.pannel') .slideUp(3000)
    })

    $('.flip') .click(function(){
        $('.pannel') .slideToggle(3000)
    })
    $('.sstop') .click(function(){
        $('.pannel') .stop();
    })
    $('.sstart') .click(function(){
        $('.pannel') .slideDown(3000)
    })

})