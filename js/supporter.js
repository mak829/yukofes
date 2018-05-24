$(function() {
  $.ajax({
      url: 'supporter.xml',
      dataType: 'xml'
    })
    .then(
      function(data) {
        console.log("読み込み成功");

        var insertContents = '';
        $('mono name', data).each(function() {
          var name = $(this).text();
          insertContents += `
          <div class="sp_item">
            <p>${name}</p>
          </div>`;
        });
        insertContents += `
        <div class="sp_none sp_item">
        </div>`;
        var insert = $(insertContents);
        $('#sp_mono').append(insert);

        var insertContents = '';
        $('pr name', data).each(function() {
          var name = $(this).text();
          insertContents += `
          <div class="sp_item">
            <p>${name}</p>
          </div>`;
        });
        insertContents += `
        <div class="sp_none sp_item">
        </div>`;
        var insert = $(insertContents);
        $('#sp_pr').append(insert);
      },
      function() {
        console.log("読み込み失敗");
      });
});
