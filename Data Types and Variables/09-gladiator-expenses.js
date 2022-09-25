function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let expenses = 0;

    
        expenses += helmetPrice * Math.trunc(lostFights / 2);
           
        expenses += swordPrice * Math.trunc(lostFights / 3);
          
        expenses += shieldPrice * Math.trunc(lostFights / 6);
            
        expenses += armorPrice * Math.trunc(lostFights / 12);
        

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`)
}

gladiatorExpenses(23,
    12.50,
    21.50,
    40,
    200
    )