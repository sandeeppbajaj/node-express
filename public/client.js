$(function() {
  $.get('/blocks', appendList);

  function appendList(blocks) {
    var list = [];
    for(var i in blocks){
      list.push($('<li>', { text: blocks[i] }));
    }
    $('.block-list').append(list);
  }
});
