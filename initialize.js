activities = ["masturbate", "gamesWithBro", "rest", "league", "momma", "parasocial", "sleep", "stats", "webBrowsing"];
activityTime = new Array(activities.length);
lastPicClicked = "none";


for (var i = 0; i < activities.length; i++) {
    activityTime[i] = 0;
    $('div1').innerHTML += '<img id="'+activities[i]+'" src="pics/'+activities[i]+'.png" class = "activityPics" onclick="Highlight()">'
    if ((i+1)%4 == 0) {$('div1').innerHTML += '<br>'}
}

setInterval(Update,1000);