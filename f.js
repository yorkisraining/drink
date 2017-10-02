var set = document.getElementsByClassName('set')[0],
	down = document.getElementsByClassName('down')[0],
	del = document.getElementsByClassName('del')[0],
	hour = document.getElementsByClassName('hour')[0],
	min = document.getElementsByClassName('minu')[0],
	stime = document.getElementsByClassName('time')[0],
	submit = document.getElementsByClassName('submit')[0];

var sh, sm

var timer;

submit.addEventListener('click', function() {
	sh = hour.value;
	sm = min.value;
	set.className = 'set hidden';
	down.className = 'down';
	stime.innerHTML = sh + ':' + sm + ':00';

	dao();

});

del.addEventListener('click', function() {
	clearInterval(timer);
	set.className = 'set';
	down.className = 'down hidden';
	stime.innerHTML = '00:00:00';
	navigator.vibrate(0);
});

function dao() {
	var num = sh*3600 + sm*60;
	timer = setInterval(function() {
		if (num <= 0) {
			clearInterval(timer);
			num = 0;
			// if (window.webkitNotifications) {
			// 	if (window.webkitNotifications.checkPermission() === 0) {
			// 		var desktopTips = window.webkitNotifications.createNotification('', 'a', '该喝水了');
			// 		desktopTips.show();
			// 	}
			// } else {
			// 	alert('d');
			// }
			if("vibrate" in navigator){
				navigator.vibrate(2000);
				var r = confirm('shi fou quxiao');
				if (r === true) {
					navigator.vibrate(0);
				}
			} else {
				alert('fail');
			}
			set.className = 'set';
			down.className = 'down hidden';
		}
		num--;
		stime.innerHTML = Math.floor(num / 3600) + ':' + Math.floor(num / 60) + ':' + parseInt(num % 60);
	}, 1000);
}


