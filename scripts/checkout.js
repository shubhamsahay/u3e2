var i=0;
function myfun(event){
    event.preventDefault();

    setInterval(function(){
        if(i==0){
            alert("Your order is accepted")
        }
        if(i==3){
            alert("Your order is being Prepared")
        }
        if(i==8){
            alert("Your order is being packed")
        }
        if(i==10){
            alert("Your order is out for delivery")
        }
        if(i==12){
            alert("Order delivered")
        }
        i++
        
    },1000)
}
