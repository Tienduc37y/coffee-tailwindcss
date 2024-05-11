const topMenu = document.getElementById("td-top-menu")
const toggleTopMenu = document.getElementById("td-toggle-top-menu")
document.addEventListener("click",(e)=>{
    // contains là thuộc hiểu đơn giản là event thuộc đúng toggletopmenu
    if(toggleTopMenu.contains(e.target)){
        topMenu.classList.toggle('td-top-menu-extended')
        topMenu.classList.toggle("hidden")
    } else {
        // Click ra ngoài toggleTopMenu
        if(topMenu.classList.contains('td-top-menu-extended')){
            topMenu.classList.remove('td-top-menu-extended')
            topMenu.classList.add("hidden")
        }
    }
})