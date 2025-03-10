const handleSidebarOpen = () =>{
    const sidebar = document.querySelector(".sidebar");
    const overlay = document.querySelector(".overlay");
        sidebar.classList.add("active")
       // overlay.classList.add("active")
    }

const handleSidebarClose = () =>{
    const sidebar = document.querySelector(".sidebar");
    const overlay = document.querySelector(".overlay");
    sidebar.classList.remove("active");
    overlay.classList.remove("active")
}

const overlay = document.querySelector(".overlay");
overlay.addEventListener("click", function(){
    handleSidebarClose();
});


var x = 5;
if (function f() {}) {
  x += typeof f;
}
console.log(x);

