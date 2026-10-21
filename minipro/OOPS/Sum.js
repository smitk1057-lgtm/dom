
 class Cal {
    constructor (a,b){
       this.x=a
       this.y=b
    }
    diff(){
        console.log(this.x-this.y)
        return this
    }
    multi(){
        console.log(this.x*this.y)
        return this
    }
    add(){
        console.log(this.x+this.y)
        return this
    }
    div(){
        console.log(this.x/this.y)
        return this
    }
 }
let obj1= new Cal(10,20)
obj1.diff().multi().add().div()



