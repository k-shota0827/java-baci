$(function () {
  // 「文字色変化」ボタンを押したら、文字色を赤色に更新
  $('#change-color').on('click', function () {
    $('#target').css('color', 'red');
  });

  // 「文字内容変化」ボタンを押したら、Hello!に更新
  $('#change-text').on('click', function () {
    $('#target').text('Hello!');
  });

  // 「フェードアウト」ボタンを押したら、フェードアウトで文字が消える
  $('#fade-out').on('click', function () {
    $('#target').fadeOut();
  });

  // 「フェードイン」ボタンを押したら、フェードインで文字が現れる
  $('#fade-in').on('click', function () {
    $('#target').fadeIn();
  });
});