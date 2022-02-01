

// analog clock 01 & 02 start
// Get elements
const gsec = document.querySelector('.gs');
const gmin = document.querySelector('.gm');
const ghour = document.querySelector('.gh');

const sec = document.querySelector('.s');
const min = document.querySelector('.m');
const hour = document.querySelector('.h');

function rotetation(time, current) {
    return (360 * current) / time;
}

setInterval(() => {
let time = new Date(/*'Sat Jan 29 2022 00:12:50 GMT+0600 (Bangladesh Standard Time)'*/);
let cur_sec =  time.getSeconds();
let cur_min = time.getMinutes();
let cur_hour24 = time.getHours();

let miliSec = time.getMilliseconds() ;

let cur_hour = cur_hour24 > 12 ? cur_hour24 - 12 : cur_hour24 ;


    gsec.style.transform = `rotate(${rotetation(60, cur_sec)}deg)`;
    gmin.style.transform = `rotate(${rotetation(60, cur_min + cur_sec/60)}deg)`;
    ghour.style.transform = `rotate(${rotetation(12, (cur_hour +(cur_min/60)))}deg)`;

    sec.style.transform = `rotate(${rotetation(60, cur_sec)+((360 * miliSec) / 1000)/60}deg)`;

    // sec.style.transform = `rotate(${rotetation(60, cur_sec)}deg)`;
    min.style.transform = `rotate(${rotetation(60, cur_min  +(cur_sec/60))}deg)`;
    hour.style.transform = `rotate(${rotetation(12, cur_hour +(cur_min/60))}deg)`;


},10 );

// analog clock 01 & 02 End



// 02
// calculator Start
// get elements


let dataCal = [];
let calvalue = (value) => {
    dataCal.push(value);

    // console.log(dataCal.join(''));
    // dataCal.join()
    document.querySelector('.moTop').innerHTML = dataCal.join('');
    document.querySelector('.mobuttom').innerHTML = 0;
}
let oneclear = () => {
    dataCal.pop();
    document.querySelector('.moTop').innerHTML = dataCal.join('');
    document.querySelector('.mobuttom').innerHTML = 0;

}
let finalresult = () => {
    let cal_string = dataCal.join('');
    document.querySelector('.mobuttom').innerHTML =  eval(cal_string).toFixed(2); // on for aviodein overflow-display
}

let allClear = () => {
    dataCal = [];
    document.querySelector('.moTop').innerHTML = 0;
    document.querySelector('.mobuttom').innerHTML = "";

}

// calculator End




// 03
// Instant Data With Checkbox Start 


const skills = document.querySelectorAll('.skill');
const get_skill = document.querySelector('.get_skill')

skills.forEach(skill => {
    
    skill.addEventListener('change', function () {
        let all_data = document.querySelectorAll('.skill:checked');
        
        let skill_arry = [];
        all_data.forEach(data => {
            skill_arry.push(data.value)
        });
        let skill_list = '';
        skill_arry.map(data => { 
            skill_list += `<div class="list-group-item">${data}</div>`;
        });
        get_skill.innerHTML = skill_list;
    });

    
});

// Instant Data With Checkbox End 
