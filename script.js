function updateCalendar(){
    const now = new Date();
    const day = now.getDate();
    const monthNames = ["January", "Feburary", "March", "April", "May","June",
        "July", "August", "Semptember", "October", "November", "December"];

    const month = monthNames[now.getMonth()];
    document.getElementById('day').textContent = day;
    document.getElementById('month').textContent = month;
}

updateCalendar();
