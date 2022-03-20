$(function(){
    $('album-option').click((event) => event.stopPropagation())
})

var albumFocussed = false;
var currentAlbum;

function showLinks(el){
    //toggle album focus status
    albumFocussed = albumFocussed ? false : true
    currentAlbum = el
    toggleAlbum(currentAlbum)
}

//filters the whole page except for chosen album
function toggleAlbum(el){

    //toggle page filter div
    $('#filter').toggle()

    //bring div forward and raise y
    $(el).toggleClass('focus')

    //display album options
    var options = $(el).find('.album-options')
    options.toggle()
}
/*
<div class="links">
<p class="subheading">stream</p>
<a class="option" href="http://bit.ly/sunspire">spotify</a>
<a class="option" href="https://music.apple.com/gb/artist/sunspire/1508880837">apple music</a>   
<a class="option" href="https://m.soundcloud.com/jack-jazrawy-brown">soundcloud</a>   
</div>
*/