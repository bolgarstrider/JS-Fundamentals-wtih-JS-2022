function login(input) {
    let index = 0;
    let username = input[index];
    index++;
    let password = "";
    for (let k = username.length - 1; k >= 0; k--) {
        password += username[k];
    }
    for (let i = index; index < input.length; i++) {


        let passwordTry = input[index];
        index++;
        if (passwordTry !== password) {
            if (i == 4) {
                console.log(`User ${username} blocked!`);
                break;
            }
            console.log("Incorrect password. Try again.");
        } else {

            console.log(`User ${username} logged in.`);
            break;
        }


    }
}

login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny'])