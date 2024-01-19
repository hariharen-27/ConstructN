const hour=document.getElementById('hour');
const min=document.getElementById('min');
const sec=document.getElementById('sec');

const start=document.getElementById('start');
const reset=document.getElementById('reset');

const disp=document.getElementById('disp');

var interval=null;
var total=0;
totalValue=()=>{
    total=Number(hour.value)*3600 +Number(min.value)*60 +Number(sec.value);
}

Timer=() => {
    totalValue();
    total--;
    console.log("came");
    if(total>=0) {
        var hr=Math.floor(total/3600);
        var m=Math.floor((total/60 )- (hr*60));
        var sc=total-((hr*3600)+(m*60));
        hour.value=hr;
        min.value=m;
        sec.value=sc;
    }
    else{
        alert("time over");
        disp.innerText="time over";
        clearInterval(interval);
    }
}

start.addEventListener('click',() =>{
    clearInterval(interval);
    interval= setInterval(Timer,1000);
    disp.innerText="timer Started";
})
pause.addEventListener('click', () => {
    clearInterval(interval);
    if (disp) {
        disp.innerText = "timer Paused";
    }
});

reset.addEventListener('click',()=>{
    clearInterval(interval);

    hour.value=0;
    min.value=0;
    sec.value=0;
})



// const hour:HTMLInputElement| null =document.getElementById('hour')as HTMLInputElement;
// const min:HTMLInputElement | null =document.getElementById('min')as HTMLInputElement;
// const sec:HTMLInputElement | null=document.getElementById('sec')as HTMLInputElement;

// const start=document.getElementById('start');
// const reset=document.getElementById('reset');

// const disp=document.getElementById('disp');

// var interval=null;
// var total=0;
// let totalValue=():void=>{
//     total=Number(hour.value)*3600 +Number(min.value)*60 +Number(sec.value);
// }

// let Timer=() :void => {
//     totalValue();
//     total--;
//     console.log("came");
//     if(total>=0) {
//         var hr=Math.floor(total/3600);
//         var m=Math.floor((total/60 )- (hr*60));
//         var sc=total-((hr*3600)+(m*60));
//         hour.value=`${hr}`;
//         min.value=`${m}`;
//         sec.value=`${sc}`;
//     }
//     else{
//         alert("time over");
//         disp.innerText="time over";
//         clearInterval(interval);
//     }
// }

// start.addEventListener('click',()=>{
//     clearInterval(interval);
//     interval= setInterval(Timer,1000);
//     disp.innerText="timer Started";
// })

// reset.addEventListener('click',()=>{
//     clearInterval(interval);

//     hour.value="0";
//     min.value="0";
//     sec.value="0";
// })
