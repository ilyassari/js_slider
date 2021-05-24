var models = [
  {
    name : 'White',
    image : 'img/white.png',
    link : 'https://www.google.com/search?q=white'
  },
  {
    name : 'Black',
    image : 'img/black.png',
    link : 'https://www.google.com/search?q=black'
  },
  {
    name : 'Grey',
    image : 'img/grey.png',
    link : 'https://www.google.com/search?q=grey'
  },
  {
    name : 'Red',
    image : 'img/red.png',
    link : 'https://www.google.com/search?q=red'
  },
  {
    name : 'Orange',
    image : 'img/orange.png',
    link : 'https://www.google.com/search?q=orange'
  },
  {
    name : 'Yellow',
    image : 'img/yellow.png',
    link : 'https://www.google.com/search?q=yellow'
  },
  {
    name : 'Green',
    image : 'img/green.png',
    link : 'https://www.google.com/search?q=green'
  },
  {
    name : 'Blue',
    image : 'img/blue.png',
    link : 'https://www.google.com/search?q=blue'
  },
  {
    name : 'Purple',
    image : 'img/purple.png',
    link : 'https://www.google.com/search?q=purple'
  }
]

var index = 0;
var slideCount = models.length;
var interval;
var settings = {
  duration : '1000',
  random : true
};

init(settings);

document.querySelector('.fa-arrow-circle-left').addEventListener('click',function(){
  if (index === 0){ index = slideCount-1;}
  else { index--; }
  showSlide(index);
});

document.querySelector('.fa-arrow-circle-right').addEventListener('click',function(){
  if (index === slideCount-1){ index = 0;}
  else { index++; }
  showSlide(index);
});

document.querySelectorAll('.arrow').forEach(function(item){
  item.addEventListener('mouseenter',function(){
    clearInterval(interval);
  })
});

document.querySelectorAll('.arrow').forEach(function(item){
  item.addEventListener('mouseleave',function(){
    init(settings);
  })
});


function init(settings){
  var prev;
  interval = setInterval(function(){
    if(settings.random){
      // random
      do{
        index = Math.floor(Math.random()*slideCount);
      }while(index == prev)
      prev = index;
    }else{
      // in sequence
      if(slideCount == index+1){
        index = 0
      }
      showSlide(index);
      index++;
    }
    showSlide(index);
  },settings.duration)
}



function showSlide(index){
  document.querySelector('.card-img-top').setAttribute('src',models[index].image);
  document.querySelector('.card-title').textContent = models[index].name;
  document.querySelector('#gosomewhere').setAttribute('href',models[index].link);

}
