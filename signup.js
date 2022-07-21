let form=document.querySelector("form");
   

let signupls=JSON.parse(localStorage.getItem("signup"))||[]
form.addEventListener("submit",function(e){
     e.preventDefault()
     let obj={
         mblno:form.mbl.value
     }
     if(obj.mblno==""){
         alert("Please fill the mobile number")
         return;
     }
     signupls.push(obj)
     console.log(obj)
     alert("Signup Successfull")
     localStorage.setItem("signup",JSON.stringify(signupls));
     window.location.href="login.html"
 })
