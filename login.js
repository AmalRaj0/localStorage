function login(){
    const userName=document.getElementById("username").value
    localStorage.setItem("username",userName)
    // console.log(userName);
    window.location="./home.html"
}