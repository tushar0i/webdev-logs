class Animal {
    constructor(name, legCount, speaks){
        this.name = name;
        this.legCount = legCount;
        this.speaks = speaks;
    }
    static myType(){
        console.log("Animal!");
    }

    speak(){ // we can't name this speaks gives an error
        console.log( this.name,"says",this.speaks);
    }

}

Animal.myType();

let dog = new Animal("beny",4,"bhow.. bhow..");
let cat = new Animal("kittu",4, "meow... meow..");
let sparrow = new Animal("berdi",2, "chee. chu..");
dog.speak();
cat.speak();
