

function classLaptop() {
    class Laptop {
        constructor(info, quality) {
            this.info = info,
                this.quality = quality,
                this.isOn = false
        }

        get price() {
            return (800 - (this.info.age * 2) + (this.quality * 0.5));
        }

        turnOn() {
            this.isOn = true;
            this.quality -= 1;
        }

        turnOff() {
            this.isOn = false;
            this.quality -= 1;
        }

        showInfo() {

            let resLaptop = {};
            resLaptop.producer = this.info.producer;
            resLaptop.age = this.info.age;
            resLaptop.brand = this.info.brand;
            return JSON.stringify(resLaptop);
        }

    }




    let info = {
        producer: "Dell",
        age: 2,
        brand: "XPS"
    }
    let laptop = new Laptop(info, 10)
    laptop.turnOn()
    console.log(laptop.showInfo())
    laptop.turnOff()
    console.log(laptop.quality)
    laptop.turnOn()
    console.log(laptop.isOn)
    console.log(laptop.price)




}

classLaptop();