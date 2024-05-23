activities = ["masturbate", "gamesWithBro", "rest", "league", "momma", "parasocial", "sleep", "stats", "webBrowsing"];
lastPicClicked = "none"

for (var i = 0; i < activities.length; i++) {
$('div1').innerHTML += '<img id="'+activities[i]+'" src="pics/'+activities[i]+'.png" class = "activityPics" onclick="Highlight()">'
if ((i+1)%3 == 0) {$('div1').innerHTML += '<br>'}
}

Update();