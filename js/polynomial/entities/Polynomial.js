class Polynomial{
    constructor (poly = []){
        this.poly = poly;
        this.poly.sort( (a,b) => b.power - a.power);
    }

    get Value(x){
        const calc = new Calculator();
        return this.poly.reduce( (S,elem) => calc.add(S, calc.mult(elem.value, calc.pow(x, elem.power))), calc.zero(null, x));
    }
}