let i = 0;
let j = 0;
let text = 'Asher Visperas'
let text2 = '(─‿‿─)'
let speed = 1000/8;
let speed2 = 1000/10;

function typingEffect(){
  if(i < text.length ){
    document.querySelector('#title').innerHTML += text.charAt(i);
    i++;
    setTimeout(typingEffect,speed);
  }

}
function typingEffect2(){
  if(j < text2.length ){
    document.querySelector('#loading').innerHTML += text2.charAt(j);
    j++;
    setTimeout(typingEffect2,speed2);
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

  document.querySelector('#second').style.display = 'inline-block';
  document.querySelector('#third').style.display = 'inline-block';

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

  document.querySelector('#third').style.display = 'none';
  document.querySelector('#second').style.display = 'inline-block';
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

  document.querySelector('#third').style.display = 'none';
  document.querySelector('#second').style.display = 'none';

  document.querySelector('#portfolio').style.backgroundColor = '#355C7D';
};

function loading(){
//typingEffect2()
document.querySelector('#loading').classList.add('animateeLoading');
//typingEffect(text2)
//i = 0;
setTimeout(function(){
  typingEffect()
},2500);

setTimeout(function(){
  document.querySelector('#loading').style.zIndex = '-1'
},3000);

}


loading()
