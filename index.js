function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  //pull out all values of children within class=ranked-list
  var lis=document.querySelectorAll('.ranked-list')
  
  //loop over each value and change it
  for (let i = 0; i < lis.length; i++) {
  lis[i].innerHTML=(parseInt(lis[i].innerHTML)+n);
  }
}

function deepestChild() {
  //pull out all children nodes in ID = grand-node
  var node=document.querySelectorAll('#grand-node div')
  
  //find most deeply nested child element
  var deepest = node[node.length - 1];
  return deepest;
}