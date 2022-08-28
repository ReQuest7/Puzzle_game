var number = Number(prompt("n X n ?"))

var pictures = [];

for(var e = 0; e <= number * number - 1; e++ ) {
    pictures.push(e);
}


// Puzzle Random
var chk;

function picturesRandom() {
  
    for(var i = 0; i <= number * number * 1000; i++){


        chk = Math.floor(Math.random() * (number * number) );``


        if(chk % number > 0){
            if( pictures[chk - 1] == (number * number - 1)) {
                var a = pictures[chk]
                pictures[chk] = pictures[chk - 1];
                pictures[chk - 1] = a;
            }
        }

        if( chk % 3 < number - 1 ){
            if( pictures[chk + 1] == (number * number - 1)) {
                var a = pictures[chk]
                pictures[chk] = pictures[chk + 1];
                pictures[chk + 1] = a;
            }
        }
        
        if( chk >= number ) {
            if ( pictures[chk  - number] == (number * number - 1)){
                var a = pictures[chk]
                pictures[chk] = pictures[chk - number];
                pictures[chk - number] = a;
            }
        }
        
        if( chk < number * (number - 1)){
            if ( pictures[chk + number] == (number * number - 1) ) {
                var a = pictures[chk]
                pictures[chk] = pictures[chk + number];
                pictures[chk + number] = a;
            }
        }
    }
}


// timer
var start;
var etime;

function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    start = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        etime = display.textContent = minutes + ":" + seconds;

        if (++timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 0,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};


// math (background change)

function backgroundchange() {

    for(var i = 0; i <= (number * number - 1); i++) {
       
        var changepicture = document.getElementById('cell' + i)
        changepicture.style.visibility = 'visible';
        changepicture.style.backgroundPosition = Math.floor(pictures[i] % number) * (100 / (number - 1)) + '%' + Math.floor(pictures[i] / number) * (100 / (number - 1)) + '%'

        if( pictures[i] == (number * number - 1)) {
            changepicture.style.visibility = 'hidden'    
        }
    }

    ending_comment()
}


// main

function start() {

    var size = document.querySelector('#size')

    var picture = '';
    picture += '<tr>'

    var count = -1;

    for (var i = 0; i <= (number * number - 1); i++ ) {
        count++
        count %= number;
        
        if( count == 0 ) {
            picture += "<tr>" + "<td id='cell" + i + "' onclick = 'change(this)' style='background-size: "+ number + "00px " + number + "00px;'" + "</td>"
        }
        else if( count == number - 1) {
            picture += "<td id='cell" + i + "'  onclick = 'change(this)' style='background-size: "+ number + "00px " + number + "00px;'" + "</td>" + "</tr>"
        }
        else {
            picture += "<td id='cell" + i + "'  onclick = 'change(this)' style='background-size: "+ number + "00px " + number + "00px;'" + "</td>"
        }
       
    }
    
    picture += '</tr>'
    size.innerHTML += picture;

    randomBackground()
    backgroundchange()
}


// array

function change(obj) {
    var id = obj.id
    var num_id = Number(id.substring(4, id.length));
        
    if(num_id % number > 0){
        if( pictures[num_id - 1] == (number * number - 1)) {
            var a = pictures[num_id]
            pictures[num_id] = pictures[num_id - 1];
            pictures[num_id - 1] = a;    
        }
    }
    
    if( num_id % 3 < number - 1 ){
        if( pictures[num_id + 1] == (number * number - 1)) {
            var a = pictures[num_id]
            pictures[num_id] = pictures[num_id + 1];
            pictures[num_id + 1] = a;       
        }
    }
    
    if( num_id >= number ) {
        if ( pictures[num_id - number] == (number * number - 1)){
            var a = pictures[num_id]
            pictures[num_id] = pictures[num_id - number];
            pictures[num_id - number] = a;
        }
    }
    
    if( num_id < number * (number - 1)){
        if ( pictures[num_id + number] == (number * number - 1) ) {
            var a = pictures[num_id]
            pictures[num_id] = pictures[num_id + number];
            pictures[num_id + number] = a;   
        }
    }

    backgroundchange()
}


// end

function ending_comment() {
    var count = 0;
    for(var i = 0; i <= Number(number * number - 1); i++) {
        if ( i == pictures[i]) {
           count++
        }
    }
    
    var correct_count = document.querySelector('#correct_count');
    correct_count.innerHTML = "현재까지 맞춘 그림 수 : " + count;
    console.log(count);


    if(Number(count) == number * number) {
        clearInterval(start);

        alert("축하드립니다! " + etime + "동안 퍼즐을 맞추셨습니다.");
    }
}


// select background picture


function randomBackground() {
    
    var rbg = document.querySelectorAll('td');
    var fullPic = document.querySelector('#fullPicture')

    var bgselect = Math.floor(Math.random() * 4)+1


    rbg.forEach((td) => {

        if( bgselect == 1) {
            td.style.backgroundImage = "url('rbgs/facebook.png')"
            fullPic.style.backgroundImage = "url('rbgs/facebook.png')"
        }
        else if( bgselect == 2) {
            td.style.backgroundImage = "url('rbgs/instagram.png')"
            fullPic.style.backgroundImage = "url('rbgs/instagram.png')"
        }
        else if( bgselect == 3) {
            td.style.backgroundImage = "url('rbgs/warning.png')"
            fullPic.style.backgroundImage = "url('rbgs/warning.png')"
        }
        else if( bgselect == 4) {
            td.style.backgroundImage = "url('rbgs/전구.png')"
            fullPic.style.backgroundImage = "url('rbgs/전구.png')"
        }
    })
}




picturesRandom()
start()

