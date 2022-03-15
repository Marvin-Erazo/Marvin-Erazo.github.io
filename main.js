const btns = document.querySelectorAll('.btn');

  // This handler will be executed every time the cursor
  // is moved over a different list item

btns.forEach(element => {
    element.addEventListener("mouseover", function() {
        element.nextElementSibling.className = 'tooltip active';
    });
});


btns.forEach(element => {
    element.addEventListener("mouseout", function() {
        element.nextElementSibling.className = 'tooltip';
    });
});


let next = document.getElementById('next');

next.addEventListener("click", function(){
    
    let slide = findSlide(document.querySelectorAll('.work'));

    switch(slide.id){
        case 'work1':
            slide.className = 'work';
            document.getElementById('work2').className = 'work active';
            break;
        case 'work2':
            slide.className = 'work';
            document.getElementById('work3').className = 'work active';
            break;

        case 'work3':
            slide.className = 'work';
            document.getElementById('work1').className = 'work active';
            break;

        default:
            break;
    }
});

let prev = document.getElementById('prev');

prev.addEventListener("click", function(){
    
    let slide = findSlide(document.querySelectorAll('.work'));

    switch(slide.id){
        case 'work1':
            slide.className = 'work';
            document.getElementById('work3').className = 'work active';
            break;
        case 'work2':
            slide.className = 'work';
            document.getElementById('work1').className = 'work active';
            break;

        case 'work3':
            slide.className = 'work';
            document.getElementById('work2').className = 'work active';
            break;

        default:
            break;
    }
});

function findSlide(slides){

    var slide;

    for (let i = 0; i < slides.length; i++) {
        const s = slides[i];

        if(s.className === 'work active'){
            slide = s;
        }
    }

    return slide;
}

let skills = document.querySelectorAll('.skill');

//let skillsBtns = document.querySelectorAll('.skill-btn');
//console.log(skillsBtns)


document.getElementById('frontend-btn').addEventListener('click', function(){
    skills.forEach(function(skill){
        switch (skill.id) {
            case 'frontend':
                skill.className = 'skill active';
                break;
        
            case 'desktop':
                skill.className = 'skill';
                break;

            case 'database':
                skill.className = 'skill';
                break;

            case 'other':
                skill.className = 'skill';
                break;
        }
    });
});


document.getElementById("desktop-btn").addEventListener('click', function(){
    skills.forEach(function(skill){
        switch (skill.id) {
            case 'frontend':
                skill.className = 'skill';
                break;
        
            case 'desktop':
                skill.className = 'skill active';
                break;

            case 'database':
                skill.className = 'skill';
                break;
                
            case 'other':
                skill.className = 'skill';
                break;
        }
    });
});


document.getElementById('db-btn').addEventListener('click', function(){
    skills.forEach(function(skill){
        switch (skill.id) {
            case 'frontend':
                skill.className = 'skill';
                break;
        
            case 'desktop':
                skill.className = 'skill';
                break;

            case 'database':
                skill.className = 'skill active';
                break;
                
            case 'other':
                skill.className = 'skill';
                break;
        }
    });
});

document.getElementById('other-btn').addEventListener('click', function(){
    skills.forEach(function(skill){
        switch (skill.id) {
            case 'frontend':
                skill.className = 'skill';
                break;
        
            case 'desktop':
                skill.className = 'skill';
                break;

            case 'database':
                skill.className = 'skill';
                break;
                
            case 'other':
                skill.className = 'skill active';
                break;
        }
    });
});

var modalFrontend = document.getElementById("modal-frontend");
var btnFrontend = document.getElementById("more-frontend");
var closeModalFrontend = document.getElementById('close-frontend');

btnFrontend.onclick = function() {
  modalFrontend.style.display = "flex";
}

closeModalFrontend.onclick = function() {
  modalFrontend.style.display = "none";
}

var modalDesktop = document.getElementById("modal-desktop");
var btnDesktop = document.getElementById("more-desktop");
var closeModalDesktop = document.getElementById('close-desktop');

btnDesktop.onclick = function() {
  modalDesktop.style.display = "flex";
}

closeModalDesktop.onclick = function() {
  modalDesktop.style.display = "none";
}

var modalDB = document.getElementById("modal-db");
var btnDB = document.getElementById("more-db");
var closeModalDB = document.getElementById('close-db');
 
btnDB.onclick = function() {
    modalDB.style.display = "flex";
}

closeModalDB.onclick = function() {
modalDB.style.display = "none";
}

var modalOther = document.getElementById("modal-other");
var btnOther = document.getElementById("more-other");
var closeModalOther = document.getElementById('close-other');

btnOther.onclick = function() {
modalOther.style.display = "flex";
}

closeModalOther.onclick = function() {
modalOther.style.display = "none";
}


window.onerror=new Function("return true");

function sendMail() {
    var link = "marvin-erazo@hotmail.com"
    + "?subject=" + escape(document.getElementById('mail').value)
    + "&body=" + escape(document.getElementById('message').value);
        
    window.location.href = "mailto:" +link;
}