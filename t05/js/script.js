class Calculator {
    constructor(){
        this.result = 0;
    }

    init(num){
        this.result = num;
        return this;
    }

    add(num){
        this.result += num;
        return this;
    }

    sub(num){
        this.result -= num;
        return this;
    }

    mul(num){
        this.result *= num;
        return this;
    }

    div(num){
        this.result /= num;
        return this;
    }

    alert = function(){
        setTimeout(()=>alert(this.result), 3000)
    }

}

const calc = new Calculator();

console.log(
calc 
    .init(5)
    .add(10)
    .mul(2)
    .div(10)
    .sub(7).result
);
calc.alert()

