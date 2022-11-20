
function softUniReception(array) {
    let employee2 = Number(array[1]);
    let employee1 = Number(array[0]);
    let employee3 = Number(array[2]);
    let students = Number(array[3]);
    let capacity = employee1 + employee2 + employee3;
    let time = 0;

    while (students > 0) {
        time++;
        if (time % 4 == 0) {

        } else {

            students -= capacity;
        }
        
    }

    console.log(`Time needed: ${time}h.`)
}

softUniReception(['5','6','4','20']);