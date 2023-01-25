$(".agregar").click(function(e){
    e.preventDefault();
    let text=$("#newText").val();
    if (text != ""){
        $(".Lista").append(`
        <div class="shopItem">
        <li class = "lis">
        <p class = "itemShop">${text}</p>
        <button class = "checar" type ="text">Check</button>
        <button class = "del" type = "text">Delete</button>
        <p></p>
        `);
    }   
})

$(".Lista").on('click','.del',function(e){
    e.preventDefault();
    $(this).parent().parent().remove()
})

$(".Lista").on('click','.checar',function(e){
    e.preventDefault();
    $(this).parent().toggleClass('chec')
})




