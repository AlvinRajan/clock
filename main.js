const hrel = document.getElementById("hour");
const minel = document.getElementById("minute");
const secel = document.getElementById("second"); 
const ampmel = document.getElementById("ampm");

function clock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = h>= 12 ? 'PM' : 'AM'; //convert am and pm coverting //
    
    h = h % 12 || 12; //convert 24 hr into 12 hr//
    h = h<10 ? "0" + h : h; 
    m = m<10 ? "0" + m : m; 
    s = s<10 ? "0" + s : s; 

    hrel.innerText = h;
    minel.innerText = m;
    secel.innerText = s;
    ampmel.innerText =ampm;
    setTimeout(()=>{
        clock();
    },1000)
    
}
clock();


