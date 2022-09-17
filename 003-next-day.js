function nextDay(year, month, day) {
    // let date = `${year}-${month}-${day}`;
    let currentDate = new Date(`${year}-${month}-${day}`);
    let nextDay = new Date(currentDate);
    nextDay.setDate(nextDay.getDate() + 1);
   



    console.log((nextDay.toISOString()).substring(0, 10));
}

nextDay(2016, 9, 30);

