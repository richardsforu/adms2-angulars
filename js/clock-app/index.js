
let indianClock = document.querySelector('#indianClock');
let dubaiClock = document.querySelector('#dubaiClock');
let usClock = document.querySelector('#usClock');



let jsClock = (props) => { // ES6

    let date = new Date().toLocaleTimeString('en-US',{timeZone:props});

    let ui = `
    <div>${props}</div>
    <p> ${date} </p>
    `
    return ui;
}


setInterval(()=>{
    indianClock.innerHTML=jsClock('Asia/kolkata');
    dubaiClock.innerHTML=jsClock('Asia/dubai');
    usClock.innerHTML=jsClock('America/New_York');

},1000);
