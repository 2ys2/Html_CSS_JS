/* youtube.js */


// https://developers.google.com/youtube/iframe_api_reference?hl=ko
// Youtube IFrame API를 비동기로 로드한다.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
	new YT.Player('player', {
		videoId: 'nmj4IZSLsoI', //유투브상에 있는 실행 유투브의 id 영상으로 띄운다.
		playerVars: {
			autoplay: true
			, loop: true
			, playlist: 'nmj4IZSLsoI'
		},
		events: {
			onReady: function(event) {
				event.target.mute() //음소거
			}
		}
	});
}
