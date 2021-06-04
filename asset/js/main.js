window.onload = function(){
	var navU = navigator.userAgent;

	// Android Mobile
	var isAndroidMobile = navU.indexOf('Android') > -1 && navU.indexOf('Mozilla/5.0') > -1 && navU.indexOf('AppleWebKit') > -1;

	// Apple webkit
	var regExAppleWebKit = new RegExp(/AppleWebKit\/([\d.]+)/);
	var resultAppleWebKitRegEx = regExAppleWebKit.exec(navU);
	var appleWebKitVersion = (resultAppleWebKitRegEx === null ? null : parseFloat(regExAppleWebKit.exec(navU)[1]));

	// Chrome
	var regExChrome = new RegExp(/Chrome\/([\d.]+)/);
	var resultChromeRegEx = regExChrome.exec(navU);
	var chromeVersion = (resultChromeRegEx === null ? null : parseFloat(regExChrome.exec(navU)[1]));

	// Native Android Browser
	var isAndroidBrowser = isAndroidMobile && (appleWebKitVersion !== null && appleWebKitVersion < 537) || (chromeVersion !== null && chromeVersion < 77);

	if (isAndroidMobile) {
 		alert('Hai!');
 		alert('Selamat ulang tahun ya!');
 		alert('Oh iya aku saranin bukanya jangan lewat handphone, lagunya gk kedengeran ;(');
 		alert('Lewat Macbook kamu aja pind biar bisa denger lagu nya hehe xD');
		// if (chromeVersion !== null && chromeVersion < 77) {
			// document.getElementById("audio").remove();
			// type_text();
		// } else {
			// notAllowed(function(callBack) {
				// setTimeout(function(){ 
					// alert('Maaf kamu engga bisa buka pakai browser ini pind...');
			 		// alert('Saran: Pakai Web Browser yang aku download ya di HP kamu ... ');
			 		// alert('Atau utk best experience: Jangan buka web ini lewat handphone, buka lewat macbook kamu XD');
			 		// alert('Maaf ya ngerepotin kamu...');
				// }, 500);
			// });
		// }
	} else {
		if (chromeVersion !== null) {
			// type_text();
			// notAllowed(function(callBack) {
				// setTimeout(function(){ 
					// alert('Maaf kamu engga bisa buka pakai browser ini pind...');
					// alert('Pakai browser selain Google Chrome ya...');
					// alert('Maaf ngerepotin kamu lagi...');
				// }, 500);
			// });
		} else {
			// type_text();
		}
	}
};
function notAllowed(callBack) {
	document.getElementsByTagName('body')[0].innerHTML = '';
	document.getElementById('bodyHTML').style.backgroundSize = 'cover'; 
	document.getElementById('bodyHTML').style.backgroundImage = 'url(asset/img/sorry.png)'; 

	callBack(1);
}
var tl=new Array(
// "            Dear Lutfiane Fadila Hasan,",
// "     ",
"     24 Oktober 2019,",
"     Merupakan hari dimana tepat 20 Tahun yang lalu,",
"     ada seorang bayi kecil yang lahir di dunia ini..",
"     ",
"     Bayi kecil perempuan yang mungil, cantik, dan lucu..",
"     Dan sekarang bayi kecil itu telah tumbuh dewasa..",
"     Menjadi perempuan yang cantik..",
"     Menjadi perempuan yang tangguh..",
"     Menjadi programmer yang bertanggung jawab..",
"     Dan Alhamdulillah sekarang kamu juga jadi istri aku ya.. ",
"     hehe.. :D ",
"     ",
"     Selamat ulang tahun, yaa, Lutfiane Fadila Hasan ",
"     Semoga sehat selalu..",
"     Dilimpahkan rezekinya..",
"     Dan dilancarkan segala urusannya..",
"     Terus semangat ^^",
"     ",
"     - MFM ",
"   "
);
var speed=80;
var index=0; text_pos=0;
var str_length=tl[0].length;
var contents, row;
var nextPict = 0;

let autoplay = true;
let soundID;
var sound = new Howl({
	src: ['asset/mp3/241099.mp3'],
	autoplay: autoplay,
	loop: true,
});

soundID = sound.play();

function mute(){
	if(document.getElementById('audio').muted == false){
	  document.getElementById('audio').muted = true;
	} else {
	  document.getElementById('audio').muted = false;
	}
}


function type_text()
{
if (row == 5 && nextPict == 0) {
	setTimeout(function(){ 
		document.getElementById('anne-cantik').style.backgroundImage = 'url(asset/img/orang-cantik.jpg)'; 
		nextPict = 1;
	}, 4000);
}

contents='';
row=Math.max(0,index-25);
while(row<index) contents += tl[row++] + '\r\n';
document.forms[0].elements[0].value = contents + tl[index].substring(0,text_pos) + "|";
if(text_pos++==str_length) {
	text_pos=0;
	index++;
	if(index!=tl.length) {
		str_length=tl[index].length;
		setTimeout("type_text()",800);
	}
}else setTimeout("type_text()",speed);
}


$(document).ready(function (e) {
    $("#open-button").on('click', function(){
		type_text();
		$('.kotak').addClass('show');
		$('#wrapper').fadeOut();;
     });
});