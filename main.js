function update() {
  activityTime[activities.indexOf(lastPicClicked)] += 1;
  localStorage.setItem(lastPicClicked, activityTime[activities.indexOf(lastPicClicked)])
  console.log(activityTime)
}

function pageToggle() {
    
}
    
function highlight() {
  event.target.style.border = '3px solid yellow';
  if (lastPicClicked != "none") {$(lastPicClicked).style.border = '3px solid gray'}
  lastPicClicked = event.target.id;
}
