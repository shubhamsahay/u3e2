// On clicking remove button the item should be removed from DOM as well as localstorage.
var collect=JSON.parse(localStorage.getItem("items"))

var p=collect.reduce(function(sum,elem){
    return sum+elem.price
},0)

var h=document.getElementById("total_amount")
h.innerText=p

collect.map(function(elem,index){
    var y=document.createElement("div")
    var image=document.createElement("img")
    image.src=elem.image;
    var name=document.createElement("p");
    name.innerText=elem.title;
    var price=document.createElement("p");
    name.innerText=elem.price

    var remove=document.createElement("button")
    remove.innerText="remove"
    remove.setAttribute("id","remove_coffee");
    remove.addEventListener("click",function(elem,index){
        del(elem,index)
    })

    y.append(image,name,price,remove)
    document.getElementById("cart").append(y)

})

function del(elem,index){
    collect.splice(index,1)

    localStorage.setItem("items",JSON.stringify(collect))
    window.location.reload()
}
