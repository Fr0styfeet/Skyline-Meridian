
const submitForm=()=>{
    event.preventDefault();
    var pass= document.getElementById('password').value
    if (pass=="ani") {
        console.log("success")
        doorAnimate();
    }
    else{
        document.getElementById('warn').style.display = 'block';
    }
}

const doorAnimate=()=>{
    gsap.to('.circle',{duration:1 , rotation: 360, opacity: 0 } )
    // gsap.to('.circle', { duration: 1, y: '-100%' });
    gsap.to('.box1',{duration:2 , x:'-100%'})
    gsap.to('.box2',{duration:2 , x:'100%'})
    gsap.to('.innercontainer', {delay:2, visibility: 'visible' });
}

const exit=()=>{
    gsap.to('.box1',{duration:.5 , x:'0%'})
    gsap.to('.box2',{duration:.5 , x:'0%'})
    gsap.to('.innercontainer', {delay:.1, visibility: 'hidden' });
    gsap.to('.circle',{delay:.7 , rotation: 360, opacity: 1 } )
}
