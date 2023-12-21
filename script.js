
// Door animation
const doorAnimate=()=>{
    gsap.to('.circle',{duration:1 , rotation: 360, opacity: 0 } )
    gsap.to('.box1',{duration:2 , x:'-100%'})
    gsap.to('.box2',{duration:2 , x:'100%'})
    gsap.to('#timer', {delay:2,  opacity:'1' });
    gsap.to('#exitbutt', {delay:2, opacity:'1' });
}

let timer;
let minutes = 10;
let seconds = 2;


const startTimer=()=>{
    timer = setInterval(updateTimer, 1000);   // every second
}

const updateTimer =()=> {
    const timerDisplay = document.getElementById('timer');

    if (minutes === 0 && seconds === 0) {
        clearInterval(timer);
        timerDisplay.innerHTML = 'Times up!';
        timerDisplay.style.backgroundColor = 'red';
        exit();
        document.getElementById('enterbutt').disabled = true;
        let done=document.getElementById('warn');
        done.style.display = 'block';
        done.innerHTML='You cannott enter now';
    } else {
        if (seconds === 0) {
            minutes--;
            seconds = 59;
        } else {
            seconds--;
        }

        const updatedmins = String(minutes).padStart(2, '0');
        const updatedsecs = String(seconds).padStart(2, '0');
        timerDisplay.innerHTML = `${updatedmins}:${updatedsecs}`;
    }
}


const exit=()=>{
    gsap.to('.box1',{duration:.5 , x:'0%'})
    gsap.to('.box2',{duration:.5 , x:'0%'})
    gsap.to('#exitbutt', {delay:.1, opacity:'0' });
    gsap.to('#timer', {delay:.1,position: 'absolute', top: '0', right: '0', opacity:'1'});
    gsap.to('.circle',{delay:.7 , rotation: 360, opacity: 1 } )
   console.log("mfdoifjd")
}


const submitForm=()=>{
    console.log("success")
    event.preventDefault();
    var pass= document.getElementById('password').value;
    if (pass=="ani") {
        doorAnimate();
        startTimer();
    }
    else{
        document.getElementById('warn').style.display='block';
    }
}

document.getElementById('exitbutt').addEventListener('click', exit);



