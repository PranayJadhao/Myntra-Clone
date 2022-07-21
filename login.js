let form=document.querySelector("form");
   

   let signupls=JSON.parse(localStorage.getItem("signup"))||[]
   form.addEventListener("submit",function(e){
        e.preventDefault()
        if(signupls.length==0){
            alert("No user till now")
            return;
        }
        let obj={
            mblno:form.mbl.value
        }
      signupls.forEach(function(ele){
        if(ele.mblno===obj.mblno){
            localStorage.setItem("login",JSON.stringify(ele));
            alert("Login Successfull")
            window.location.href="home.html"
        }
        else{
            alert("User does not Exist")
        }
       
      })
        
    })