function goBack() {
    window.history.back();
}

function time(id){
    if (id == "time") {
        var today = new Date();
        var time = today.getHours() + ":" + ((today.getMinutes()<10?'0':'') + today.getMinutes());
        document.getElementById(id).innerHTML = time;
    } else if (id == "date") {
        var today = new Date();
        var date = today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
        document.getElementById(id).innerHTML = date;
    }
}

function updateTime() {
    var currentTime = new Date()
    var hours = currentTime.getHours()
    var minutes = currentTime.getMinutes()
    if (minutes < 10) {
        minutes = "0" + minutes
    }
    var t_str = hours + ":" + minutes + " ";
    document.getElementById('time').innerHTML = t_str;
}
setInterval(updateTime, 1000);

function onclick(id) {
    if (id == "messageIco") {
        location.href = 'messages.html';
    } else if (id == "calendarIco") {
        location.href = 'events.html';
    }
}

function changeImage(id) {
	src = document.getElementById(id).src;
	if (id == "mute") {
		if (src.includes("mute.png")) {
			document.getElementById(id).src = "../../context/muteON.png";
		}
		else {
			document.getElementById(id).src = "../../context/mute.png";
		}
	} else if (id == "speaker") {
		if (src.includes("speaker.png")) {
			document.getElementById(id).src = "../../context/speakeron.gif";
		}
		else {
			document.getElementById(id).src = "../../context/speaker.png";
		}
	}
}

function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue;
}


function getCookie(cname, id) {
    var stringCookie = document.cookie;
    temp = stringCookie.split(';');
    if (temp.length > 1) {
        for (let i = 0; i < temp.length + 1; i++) {
            string = temp[i].split('=');
            if (string[0] == cname) {
                document.getElementById(id).innerHTML = string[1];
                break;
            }
        }
    } else {
        string = temp[0].split('=');
        if (string[0] == cname) {
            document.getElementById(id).innerHTML = string[1];
        }
    }
}


var totalSeconds = 0;
function setTime() {
    ++totalSeconds;
    document.getElementById("seconds").innerHTML = pad(totalSeconds % 60);
    document.getElementById("minutes").innerHTML = pad(parseInt(totalSeconds / 60));
}
setInterval(setTime, 1000);

function pad(val) {
    var valString = val + "";
    if (valString.length < 2) {
        return "0" + valString;
    } else {
        return valString;
    }
}
