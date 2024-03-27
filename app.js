let profile = document.querySelector(".nav-user-icon");
let settingsMenu = document.querySelector(".setting-menu")
let darkBtn = document.querySelector("#dark-btn");
let body = document.querySelector("body");
let rightSidebar = document.querySelector("#right-sidebar");
let postContainer = document.querySelectorAll(".post-container");
let writePostContainer = document.querySelector("#write-post-container");
let settingsMenuInner = document.querySelector("#settings-menu-inner");
let navBar = document.querySelector("#nav-bar");

profile.addEventListener("click",(e)=>{
  settingsMenu.classList.toggle("setting-menu-height")
})


darkBtn.addEventListener("click",(e)=>{
  darkBtn.classList.toggle("dark-btn-on");
  console.log(e.target);
  // console.log(postContainer)
  if(e.target.className==="dark-btn-on"){
    body.style.backgroundColor = "black"
    rightSidebar.style.backgroundColor = "black";
    
    for(let i = 0;i<5;i++){
      postContainer[i].style.backgroundColor = "black"
    }
    writePostContainer.style.backgroundColor = "black";
    settingsMenuInner.style.backgroundColor = "black";
    navBar.style.backgroundColor = "black";
  }
  if(e.target.className===""){
    body.style.backgroundColor = "#efefef"
    rightSidebar.style.backgroundColor = "#efefef"
    
    for(let i = 0;i<5;i++){
      postContainer[i].style.backgroundColor = "#fff"
    }
    writePostContainer.style.backgroundColor = "#fff";
    settingsMenuInner.style.backgroundColor = "#fff";
    navBar.style.backgroundColor = "#1876f2";
  }

})
