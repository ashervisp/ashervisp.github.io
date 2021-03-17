let i = 0;
let j = 0;
let text = 'Asher Visperas'
let text2 = 'ashvisperas@gmail.com'
let speed = 1000/8;


function typingEffect(){
  if(i < text.length ){
    document.querySelector('#title').innerHTML += text.charAt(i);
    i++;
    setTimeout(typingEffect,speed);
  }

}

function showJavascript(){
  document.querySelector('#webDev').classList.remove('animatee');
  document.querySelector('#webDev').classList.remove('animatee2');
  document.querySelector('#webDev').classList.remove('animatee3');
  document.querySelectorAll('.firstProject .secondProject .thirdProject').innerHTML = '';
  setTimeout(function(){
    document.querySelector('#webDev').classList.add('animatee');
    document.querySelector('#portfolio').classList.add('animatee');
  },300);
  document.querySelector('.firstProject').innerHTML = 'Browser Game';
  document.querySelector('.secondProject').innerHTML = 'Calendar';
  document.querySelector('.thirdProject').innerHTML = 'Boba Tea';
  document.querySelector('#one').src = 'bootaPlayer.png';
  document.querySelector('#two').src = 'Calendar.png';
  document.querySelector('#three').src = 'boba.jpg';

  document.querySelector('#portfolio').style.backgroundColor = '#355C7D';

  document.querySelector('#oneLink').href = 'https://github.com/ashervisp/SmallGame'
  document.querySelector('#twoLink').href = 'https://github.com/ashervisp/Developer-Portfolio/tree/master/schedule_project'
  document.querySelector('#threeLink').href = 'https://github.com/ashervisp/Boba_Shop'

};

function showData(){
  document.querySelector('#portfolio').classList.remove('animatee');
    document.querySelector('#webDev').classList.remove('animatee');
    document.querySelector('#webDev').classList.remove('animatee3');
    document.querySelectorAll('.firstProject .secondProject .thirdProject').innerHTML = '';
  setTimeout(function(){
    document.querySelector('#webDev').classList.add('animatee2');
    document.querySelector('#portfolio').classList.add('animatee');
  },300);
  document.querySelector('.firstProject').innerHTML = 'Housing Data';
  document.querySelector('.secondProject').innerHTML = 'Netflix Data';
  document.querySelector('.thirdProject').innerHTML = '';
  document.querySelector('#one').src = 'home.png';
  document.querySelector('#two').src = 'netflix.png';
  document.querySelector('#three').src = '';

  document.querySelector('#portfolio').style.backgroundColor = '#355C7D';

  document.querySelector('#oneLink').href = 'https://github.com/ashervisp/California_Housing1990'
  document.querySelector('#twoLink').href =  'https://github.com/ashervisp/Netflix-Analysis'
  document.querySelector('#threeLink').href = ''

};

function showExtra(){
  document.querySelector('#portfolio').classList.remove('animatee');
  document.querySelector('#webDev').classList.remove('animatee');
  document.querySelector('#webDev').classList.remove('animatee2');
  document.querySelectorAll('.firstProject .secondProject .thirdProject').innerHTML = '';
setTimeout(function(){
  document.querySelector('#webDev').classList.add('animatee3');
  document.querySelector('#portfolio').classList.add('animatee');
},300);
  document.querySelector('.firstProject').innerHTML = 'Discord Bot';
  document.querySelector('.secondProject').innerHTML = '';
  document.querySelector('.thirdProject').innerHTML = '';
  document.querySelector('#one').src = 'discordicon.png';
  document.querySelector('#two').src = '';
  document.querySelector('#three').src = '';

  document.querySelector('#oneLink').href = 'https://github.com/ashervisp/discordBot'
  document.querySelector('#twoLink').href = ''
  document.querySelector('#twoLink').href = ''

  document.querySelector('#portfolio').style.backgroundColor = '#355C7D';
};


typingEffect();
