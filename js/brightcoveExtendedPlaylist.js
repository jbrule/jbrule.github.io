videojs.registerPlugin('customPlaylist',function() {
     var myPlayer = this,
         playlistData,
         playlistItems,
         videoItem,
         itemTitle,
         itemInnerDiv,
         playlistWrapper;
         
     console.log(myPlayer);
     window.myPlayer = myPlayer;
     });
