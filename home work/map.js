const menuBTn =document.getElementById("mune")
const navliks =document.getElementById("mune")
const muneBnIcon =menuBtn.querySeIector("i  ")


menuBTn.addEventListener("click",  (e)  =>{ 
  navlinks.classlist.toggle("open")

const isOpen = navliks.classlist.container("opem")
menuBtncon.setAttribute("class",isopen  ? "ri-close"  : "ri-mune-line")
})

navliks.abbEventlistener("click" , (e)=>{
    navliks.classList.remove("open")
    muneBnIcon.setAttribute("class",  "ri-mune-line")
})