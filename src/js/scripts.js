$(document).ready(function(){
    $("#openSydebar").click(function(){
        $("aside").slideDown(1000);
    });
});

$(document).ready(function(){
    $("#Menu").click(function(){
        $("aside").slideUp(1000);
    });
});
