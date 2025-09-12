const header=document.querySelector(".header");
const display=document.querySelector(".display");
const ifr=document.querySelector("iframe");

const tabarr=["First","Second","Third","Fourth"];

for(let i=0;i<4;i++){
    const tab=document.createElement("button");
    tab.textContent=`${tabarr[i]} Tab`;
    tab.setAttribute("value",`${i}`)
    tab.setAttribute("class","tab");
    header.appendChild(tab);
}
const tabs=document.querySelectorAll(".tab");

function displayTab(e){
    let num=e.target.textContent.split(" ").at(0);
    console.log(num);
    ifr.setAttribute("src",`tab${tabarr.indexOf(num)+1}.html`);
}

tabs.forEach(tab=>tab.addEventListener("click",displayTab));