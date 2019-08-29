function toggleMenu (menu){
    var statusMenu = $(menu).closest("ul").hasClass("ocult-all")
    if(statusMenu){
        $(menu).closest("ul").removeClass("ocult-all")
    }
    else{
        $(menu).closest("ul").addClass("ocult-all")
    }
}

function goSection (id){
    $('html,body').animate({
        scrollTop: $(id).offset().top
    }, 'slow')
}

function doScroll (id){
    let nextSection = $(id).closest(".primary-element").next()
    $('html,body').animate({
        scrollTop: $(nextSection).offset().top
    }, 'slow')
}