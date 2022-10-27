// Write a function that receives array of strings in the following format '{cat name} {age}'.
// Create a Cat class that receives in the constructor the name and the age parsed from the input. 
// It should also have a method named "meow" that will print "{cat name}, age {age} says Meow" on the console.
// For each of the strings provided, you must create a cat object and invoke the .meow () method.


function cats(arr) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }

    let cats = [];
    // for (const el of arr) {
    //     let temp = el.split(' ');
    //     let kitty = new Cat(temp[0], temp[1]);
    //     kitty.meow();
    // }
    for (const el of arr) {
        let temp = el.split(' ');
        cats.push(new Cat(temp[0], temp[1]));
        
    }

    for (const cat of cats) {
        cat.meow();
    }


}

cats(['Candy 1', 'Poppy 3', 'Nyx 2']);