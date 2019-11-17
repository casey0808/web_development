// Check off specific todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

// Click X to delete todos
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class=\"fa fa-trash\"></i></span> " + todoText + "</li>");
    };
})

$("#toggle-form").on("click", function(){
    $("input[type='text']").fadeToggle(200);
})