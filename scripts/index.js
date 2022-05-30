// Add the coffee to local storage with key "coffee"
let arr=JSON.parse(localStorage.getItem("coffee"))||[];
var y=document.getElementById("coffee_count");
y.innerText=arr.length;
    const url=`https://masai-mock-api.herokuapp.com/coffee/menu`;
    fetch(url)
    .then(function(res){
        return res.json();
    })
    .then(function (res){
        console.log(res);
        display(res.data)
    })
    .catch(function(err){
        console.log("err",err);
    })

    

    function display(data){
        data.map(function(ele,index){
            let div1=document.createElement("div");
            let image=document.createElement("img");
            image.src=ele.image;
            image.style.width="20%";
            image.style.height="55%";
            let p=document.createElement("p");
            p.innerText=ele.title;
            let p2=document.createElement("p");
            p.innerText=ele.price;
            let btn=document.createElement("button");
            btn.innerText="add to Bucket";
            btn.setAttribute("id","add_to_bucket");
            btn.addEventListener("click",function(){
                myfun1(ele);
            })
            div1.append(image,p,p2,btn)
            document.querySelector("#menu").append(div1);


        })
    }

    function myfun1(ele){
        arr.push(ele)
        localStorage.setItem("coffee",JSON.stringify(arr));
        window.location.reload();
    }