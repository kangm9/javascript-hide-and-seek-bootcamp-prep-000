function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  //pull out all values of child within class=ranked-list
  var lis=document.querySelectorAll('.ranked-list')
  for (let i = 0; i < lis.length; i++) {
  lis[i].innerHTML=(parseInt(lis[i].innerHTML)+n);
  }
}

function deepestChild() {
  return document.querySelector('#grand-node > div > div > div > div > div')
  return null
}