function login(){
    const userName=document.getElementById("username").value
    localStorage.setItem("username",userName)
    console.log(userName);
   if(userName.length>0){
    window.location="./home.html"
   }
}