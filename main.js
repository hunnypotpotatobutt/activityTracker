function update() {
  activityTime[activities.indexOf(lastPicClicked)] += 1;
  localStorage.setItem(lastPicClicked, activityTime[activities.indexOf(lastPicClicked)])
  console.log(activityTime)
}

function pageToggle() {
    if ($('activityPicDiv').style.display == "none") $('activityPicDiv').style.display = "inline"
    else $('activityPicDiv').style.display = "none"
}
    
function highlight() {
  event.target.style.border = '3px solid yellow';
  if (lastPicClicked != "none") {$(lastPicClicked).style.border = '3px solid gray'}
  lastPicClicked = event.target.id;
}
