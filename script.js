var btn=document.querySelector("button");
var h5=document.querySelector("h5");

var flag=0;


btn.addEventListener("click",function() {
   
    if(flag==0)
    {
      
    h5.innerHTML = "Friends";
    h5.style.color= "green";
    btn.innerHTML="UFriends";
    flag=1;
    }
   else
   {
    h5.innerHTML = "Strangers";
    h5.style.color= "red";
    btn.innerHTML="Friends";
    flag=0;
   }
})


var h1=document.querySelector("h1");
var img=document.querySelector("img");
 
var ans=0;
img.addEventListener("click",function(){
   if(ans==0)
   {
    h1.innerHTML="Oyee!!!";
    h1.style.color="blue";
    ans=1;
   }
   else
   {
    h1.innerHTML="Angel Priya";
    h1.style.color="black";
    ans=0;
   }
    
})



// document.getElementById('main').addEventListener('click', function(e) {
//    console.log("clicked on main");
  
// }, false);



// document.getElementById('card').addEventListener('click', function(e) {
//    console.log("clicked on card");
//    e.stopPropagation()
// }, false);

// Object.preventdefault()
// //agar link pe click karrahe hai and waha pe nahi jana chahiye

// Object.setPrototype()
// //bubbling nahi karna hai to


//jo objet ko touch karenge wo delete ho jayegaa


// document.querySelector("#main").addEventListener('click',function(e){
// console.log(e.target.tagName);

// if(e.target.tagName==='img')
// {   console.log(e.target.id);
//     let remove=e.target.id;
//     remove.remove()
// }

// },false)



