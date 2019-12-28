class Helper {

  playPauseAndUpdate (song) {
    const duration = player.getDuration(song);
    $('#time-control .total-time').text( duration );
    player.playPause(song);
  }

}

const helper = new Helper();
