let hrs=document.querySelector("#hr")
let min=document.querySelector("#min")
let sec=document.querySelector("#sec")
setInterval(()=>{
    let currenttime=new Date();
    hrs.innerText=(currenttime.getHours()<10?"0":"")+currenttime.getHours();
    min.innerText=(currenttime.getMinutes()<10?"0":"")+currenttime.getMinutes();
    sec.innerText=(currenttime.getSeconds()<10?"0":"")+currenttime.getSeconds();
},1000)
