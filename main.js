let boxs = document.querySelectorAll('.all-box .box');
let span = document.querySelectorAll('.all-box .box span');
let player = document.getElementById('player');

let tic = 'X'
let checkboxs = false
boxs.forEach(function (box){
    box.addEventListener('click' , function (e) {
        e.target.classList.add('active')
        e.target.innerHTML = tic;
        document.querySelector('.winner h1').innerHTML = `You won, player: ${tic} 🏆🎖️`
        tic = tic === 'X'? 'O' : 'X';
        player.innerHTML = tic;
        check()
        equalize()
    })
})
function equalize(){
    if (Array.from(boxs).every(box => box.innerHTML !== "")) {
        boxs.forEach(function (box){
            box.classList.add('active')
            document.getElementById('header').classList.add('opacity')
            box.classList.add('opacity')
        })
        document.querySelector('.equalize').style.display = ' block';
        setTimeout(() =>{
            location.reload()
        } , 2000)
    }
}

function winner(){
    boxs.forEach(function (box){
        box.classList.add('active')
        document.getElementById('header').classList.add('opacity')
        box.classList.add('opacity')
    })
    document.querySelector('.winner').style.display = ' block';
    setTimeout(() =>{
        location.reload()
    } , 2000)
}
function check() {
    if (!checkboxs) {
        if ((boxs[0].innerHTML !== "" && boxs[0].innerHTML === boxs[1].innerHTML && boxs[0].innerHTML === boxs[2].innerHTML) ||
            (boxs[3].innerHTML !== "" && boxs[3].innerHTML === boxs[4].innerHTML && boxs[3].innerHTML === boxs[5].innerHTML) ||
            (boxs[6].innerHTML !== "" && boxs[6].innerHTML === boxs[7].innerHTML && boxs[6].innerHTML === boxs[8].innerHTML) ||
            (boxs[0].innerHTML !== "" && boxs[0].innerHTML === boxs[3].innerHTML && boxs[0].innerHTML === boxs[6].innerHTML) ||
            (boxs[1].innerHTML !== "" && boxs[1].innerHTML === boxs[4].innerHTML && boxs[1].innerHTML === boxs[7].innerHTML) ||
            (boxs[2].innerHTML !== "" && boxs[2].innerHTML === boxs[5].innerHTML && boxs[2].innerHTML === boxs[8].innerHTML) ||
            (boxs[0].innerHTML !== "" && boxs[0].innerHTML === boxs[4].innerHTML && boxs[0].innerHTML === boxs[8].innerHTML) ||
            (boxs[2].innerHTML !== "" && boxs[2].innerHTML === boxs[4].innerHTML && boxs[2].innerHTML === boxs[6].innerHTML)) {
                console.log("Winner");
                winner()
                checkboxs = true;
        }
    }
}
