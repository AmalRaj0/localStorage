let adminName=document.getElementById("head")
let uname=localStorage.getItem("username")
console.log(uname);
adminName.innerHTML=`Welcome ${uname}`
function logOut(){
    adminName.innerHTML=`Welcome admin`
    window.location="./login.html"
    localStorage.clear()
}
function AddEmp(){
    var EmpId=document.getElementById("empId").value
    const EmpName=document.getElementById("EmpName").value
    const EmpAddress=document.getElementById("EmpAddress").value
    const EmpDesignation=document.getElementById("EmpDesignation").value
    const EmpExp=document.getElementById("EmpExp").value
    const EmpSalary=document.getElementById("EmpSalary").value
    if(EmpId.length==0&&EmpName.length==0&&EmpAddress.length==0&&EmpDesignation.length==0&&EmpExp.length==0&&EmpSalary.length==0){
        alert("PLEASE FULLFILL THE FORM")
    }else{
        localStorage.setItem("EMPID",EmpId)
        localStorage.setItem("EMPNAME",EmpName)
        localStorage.setItem("EMPADDRESS",EmpAddress)
        localStorage.setItem("EMPDESIGNATION",EmpDesignation)
        localStorage.setItem("EMPEXP",EmpExp)
        localStorage.setItem("EMPSALARY",EmpSalary)
        alert("Employee details Added Successfully")
    }    
}
var EMPID=localStorage.getItem("EMPID")
console.log(EMPID);
function Search(){
var item=document.getElementById("idsearch").value
console.log(item);
const detail=document.getElementById("Details1")
if(item==EMPID){
    detail.style.width="420px"
    detail.style.backgroundColor="white"
    detail.style.padding="30px"
    const head1=document.getElementById("head1")
    head1.innerHTML="EMPLOYEE DETAILS"
    const emId=document.getElementById("EmId")
    emId.innerHTML=`Employee Id : ${EMPID}`
    emId.style.border=".5px solid"
    emId.style.padding="10px"
    const emname=document.getElementById("emname")
    const EMPNAME1=localStorage.getItem("EMPNAME")
    emname.innerHTML=`Employee Name : ${EMPNAME1}`
    emname.style.border=".5px solid"
    emname.style.padding="10px"
    const emaddress=document.getElementById("emaddress")
    const EMPADDRESS=localStorage.getItem("EMPADDRESS")
    emaddress.innerHTML=`Employee Address : ${EMPADDRESS}`
    emaddress.style.border=".5px solid"
    emaddress.style.padding="10px"
    const emdesignation=document.getElementById("emdesignation")
    const EMPDESIGNATION=localStorage.getItem("EMPDESIGNATION")
    emdesignation.innerHTML=`Employee Designation : ${EMPDESIGNATION}`
    emdesignation.style.border=".5px solid"
    emdesignation.style.padding="10px"
    const emexp=document.getElementById("emexp")
    const EMPEXP=localStorage.getItem("EMPEXP")
    emexp.innerHTML=`Employee Experince : ${EMPEXP}`
    emexp.style.border=".5px solid"
    emexp.style.padding="10px"
    const emsalary=document.getElementById("emsalary")
    const EMPSALARY=localStorage.getItem("EMPSALARY")
    emsalary.innerHTML=`Employee Experince : ${EMPSALARY}`
    emsalary.style.border=".5px solid"
    emsalary.style.padding="10px"
}
else{
    alert("CAN'T FIND THIS ID")
    detail.style.display="none"
}
}

