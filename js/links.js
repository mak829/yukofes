$(function() {
$.ajax({
  url: 'links.xml',
  dataType: 'xml'
})
.then(
function(data) {
  console.log("読み込み成功");

  var insertContents = '';
  $('subject-wrap', data).each(function() {
    var subject = $(this).children('subject-name').text();
    insertContents += `
    <section class="item_wrap">
      <div class="links_subject links_item"><p>${subject}</p></div>`;
    $($(this).children('item')).each(function() {
      var name = $(this).children('name').text();
      var url = $(this).children('url').text();
      insertContents += `
      <div class="links_item"><a href="${url}">${name}</a></div>`;
    });
    insertContents += "</section>";
  });

  var insert = $(insertContents);
  $('#links').append(insert);
},
function() {
  console.log("読み込み失敗");
});
});
