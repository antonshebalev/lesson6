var imgSm1 = document.getElementById("imgSm1");
var imgSm2 = document.getElementById("imgSm2");
var imgSm3 = document.getElementById("imgSm3");

imgSm1.onclick = f;
imgSm2.onclick = f;
imgSm3.onclick = f;

imgBig.onerror = function() {
  document.getElementById("imgBig").alt = "Error loading " + this.src; 
};




//выбор картинки
function f(Event) {

    var bigImg = document.getElementById("imgBig");
    console.log(Event);
    console.log(bigImg);
    console.log(Event.target.id);
    var str = Event.target.id;
    switch(str){
        case 'imgSm1':
        bigImg.src = './image/file1.jpg';
        break;
        case 'imgSm2':
        bigImg.src = './image/file2.webp';
        break;
        case 'imgSm3':
        bigImg.src = './image/file3.webp';
        break;
        default:
        break;

    };


}
