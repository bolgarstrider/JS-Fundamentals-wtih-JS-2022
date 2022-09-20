function nextDay(year, month, day) {
    // let date = `${year}-${month}-${day}`;
    // let currentDate = new Date(`${year}-${month}-${day}`);

    let currentDate = new Date(year, month - 1, day);

    // console.log(currentDate);
    let nextDay = new Date(currentDate);
    nextDay.setDate(nextDay.getDate() + 1);
   



    

    console.log(`${nextDay.getFullYear()}-${nextDay.getMonth()+1}-${nextDay.getDate()}`);

    
}

nextDay(1951,
    12,
    24);

