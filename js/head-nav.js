window.onload = function () {

    var index = 1;

    function lunbo(){
        index ++ ;
        //判断index是否大于3
        if(index > 4){
            index = 1;
            // document.getElementById("div1").style.backgroundColor = "white"
        }
        //获取img对象
        var img = document.getElementById("toggle_img");
        img.src = "./images/banner"+index+".jpg";
        if (index==1){
             document.getElementById("div1").style.backgroundColor = "white";
            document.getElementById("div2").style.backgroundColor = "";
            document.getElementById("div3").style.backgroundColor = "";
            document.getElementById("div4").style.backgroundColor = "";
        }else if (index==2){
            document.getElementById("div1").style.backgroundColor = "";
            document.getElementById("div2").style.backgroundColor = "white";
            document.getElementById("div3").style.backgroundColor = "";
            document.getElementById("div4").style.backgroundColor = "";
        }else if (index==3){
            document.getElementById("div1").style.backgroundColor = "";
            document.getElementById("div2").style.backgroundColor = "";
            document.getElementById("div3").style.backgroundColor = "white";
            document.getElementById("div4").style.backgroundColor = "";
        }else if (index==4){
            document.getElementById("div1").style.backgroundColor = "";
            document.getElementById("div2").style.backgroundColor = "";
            document.getElementById("div3").style.backgroundColor = "";
            document.getElementById("div4").style.backgroundColor = "white";
        }






    }
    //2.定义定时器
    setInterval(lunbo,2000);

}
