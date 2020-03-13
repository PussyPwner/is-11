class VectorCalculator extends RealCalculator {

    add(a, b) {
        const calc = this.get(a.values[0]);
        return new Vector(a.values.map((elem, i) => calc.add(elem, b.values[i])));
    }

    sub(a, b) {
        const calc = this.get(a.values[0]);
        return new Vector(a.values.map((elem, i) => calc.sub(elem, b.values[i])));
    }

    mult(a, b) { 
        const calc = this.get(a.values[0]);        
        return new Vector([
           // calc.add(calc.add(calc.mult(a.values[0], b.values[0]), calc.mult(b.values[1], a.values[1])), calc.mult(b.values[2], a.values[2])); //скалярное
          calc.sub( calc.mult(a.values[1], b.values[2]), calc.mult(a.values[2], b.values[1]) ),
          calc.sub( calc.mult(a.values[2], b.values[0]), calc.mult(a.values[0], b.values[2]) ),
          calc.sub( calc.mult(a.values[0], b.values[1]), calc.mult(a.values[1], b.values[0]) )
        ]);
    }

    module(a) {
        return Math.sqrt(a.values.reduce((S,elem) => S + Math.pow(elem, 2), 0));
    }

    one(length, elem) {
        const calc = this.get(elem); 
        const values = [];
        for (let i=0; i<length; i++){
            values.push(this.type(calc, elem, 'one'));
        }
        return new Vector(values);
    }

    zero(length, elem) {
        const calc = this.get(elem); 
        const values = [];
        for (let i=0; i<length; i++){
            values.push(this.type(calc, elem, 'zero'));
        }
        return new Vector(values);
    }

    prod(p, a) {
        return new Vector(a.values.map((elem) => elem * p));
    }

    pow(a, n) {
        let c = this.one(a.values.length);
        for (let i=0; i<n; i++){
            c.values = this.mult(c.values, a.values);
        }
        return new Vector(c.values);
    }
}