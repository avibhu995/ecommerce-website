let cloths  = document.getElementById("cloths");
let reviews  = document.getElementById("reviews");
let contacts = document.getElementById("contact");
let blogs  = document.getElementById("blog");

cloths.addEventListener("click" , function(){
    cloths.style.color = "red";
    reviews.style.color = "black";
    contacts.style.color = "black";
    blogs.style.color = "black";
    
})
reviews.addEventListener("click" , function(){
    cloths.style.color = "black";
    reviews.style.color = "red";
    contacts.style.color = "black";
    blogs.style.color = "black";
    
})
blogs.addEventListener("click" , function(){
    cloths.style.color = "black";
    reviews.style.color = "black";
    contacts.style.color = "black";
    blogs.style.color = "red";
    
})
contacts.addEventListener("click" , function(){
    cloths.style.color = "black";
    reviews.style.color = "black";
    contacts.style.color = "red";
    blogs.style.color = "black";
    
})
let login =  document.getElementById("login");
login.addEventListener("click",function(){
  letloginPage  =  document.querySelector(".loginPage").style.display = "block";

})
let loged = document.getElementById("loged");

loged.addEventListener("click", function(){
    let email = document.getElementById("email");
    let pass = document.getElementById("pass");
    if (email.value == "" || pass.value == ""){
         alert("please Enter Email password")
    }
    else {
        alert("You Loged In")
        document.querySelector(".loginPage").style.display = "none";
    }
})
let submit = document.getElementById("submit");
submit .addEventListener("click", function(){
    let names = document.getElementById("name");
    let password  = document.getElementById("pass");
    if (names.value == "" || pass.value == ""){
        alert("please Enter name and password")
   }
   else {
       alert("Thanks for Connecting")
       
   }

})