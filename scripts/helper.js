class Helper {

  playPauseAndUpdate (song) {
    player.playPause(song);
    const totalTime = player.prettyTime(player.currentlyPlaying.duration); //This would
    //call on prettyTime in the player.js file, and takes the total time of the
    //song currently playing.
    $('#time-control .total-time').text( totalTime );
  }

}

const helper = new Helper();
