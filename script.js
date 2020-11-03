

function title_change(){
  let title = [' Code',' Server',' Script', ' Program', ' Scrap']
  const random = Math.floor(Math.random() * title.length);
  document.getElementById('title_change').innerHTML = title[random];
}

function open_text(){
  var x = document.getElementByByClass("links");

}



setInterval(title_change,3000);
