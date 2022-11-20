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