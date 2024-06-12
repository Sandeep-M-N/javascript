function checkdata(){
    let user_id=document.getElementById("uid").value;
    if(user_id.trim()==""){
        // window.alert("hi");
        document.getElementById("uerror").innerHTML="user id is required";
        document.getElementById("uerror").style.color="red";
    }
    else if(!user_id.trim().match('^[a-zA-Z]{3,20}$')){
        document.getElementById("uerror").innerHTML="user id must be in proper format";
        document.getElementById("uerror").style.color="red";
    }
    else{
        document.getElementById("uerror").innerHTML="";
    }
}
function checkpass(){
    let user_pass=document.getElementById("upass").value;
    if(user_pass.trim()==""){
        document.getElementById("upassword").innerHTML="password is required";
        document.getElementById("upassword").style.color="red";
    }
    else if(!user_pass.trim().match(`^[a-zA-Z@!@#%&*()0-9]{8,20}$`)){
        document.getElementById("upassword").innerHTML="password is not valid";
        document.getElementById("upassword").style.color="red";
    }
    else{
         document.getElementById("upassword").innerHTML=""
    }

}