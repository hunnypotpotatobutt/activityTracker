function Update() {
    activityTime[activities.indexOf(lastPicClicked)] += 1;
    console.log(activityTime);
}

function Highlight() {
    event.target.style.border = '3px solid yellow';
    if (lastPicClicked != "none") {$(lastPicClicked).style.border = '3px solid cyan'}
    lastPicClicked = event.target.id
}
