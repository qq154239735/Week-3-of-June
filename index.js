$(function(){

    // 导航过渡效果
    $('.navbar-nav a[href]').click(function(event){
        event.preventDefault();  //先关了a标签默认事件
        // console.log(window.location.hash)
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    })

    // 查看更多
    var flag = false;
    $('#case button').click(function(){
        if(!flag){
           
            $('#case .row').css('height','auto')
            $(this).text('收起');
         
        }else{
            $('#case .row').css('height','1143px')
            $(this).text('查看更多');
        }
        flag =!flag;
    })
})
