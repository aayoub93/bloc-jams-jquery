//quick note: you don't need to use .ready() here since all the scripts are
//declared towards the end of the HTML right above </body>

{
  $('#album-title').text(album.title);
  $('img#album-cover-art').attr('src', album.albumArtUrl);
  $('.artist').text(album.artist);
  $('#release-info').text(album.releaseInfo);
}
