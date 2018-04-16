var obj = {'.nav_prof':'.orange','.nav_work':'.magenta','.nav_block':'.cyan','.nav_oke':'.yellow','.nav_kamatte':'.green'}
function Clickmenu(selecter,color){ 
    $(selecter).on('click',function(){
        $(color).addClass("active");
        $(".page:not("+ color +")").removeClass("active");
        $(".active").before($(".page"));
    });
}
for(key in obj)
{
    Clickmenu(key,obj[key]);
}

