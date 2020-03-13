class RealCalculator {
    get(a){
        return (a instanceof Matrix) ? new MatrixCalculator :
                (a instanceof Vector) ? new VectorCalculator :
                (a instanceof Complex) ? new ComplexCalculator : new RealCalculator;
    }

    type(calc, elem, method){ // в method либо one либо zero
        if(elem instanceof Matrix){
            return calc[method](elem.values.length, elem.values[0][0]);
        } else if (elem instanceof Vector){
                return calc[method](elem.values.length, elem.values[0]);
        }
        return calc[method]();
    }

    add(a, b) {
        return a + b;
    }

    sub(a, b) {
        return a - b;
    }

    mult(a, b) {
        return a * b;
    }

    div(a, b) {
        return a / b;
    }

    module(a) {
        return Math.abs(a);
    }

    one() {
        return 1;
    }

    zero() {
        return 0;
    }

    prod(p, a) {
        return p * a;
    }

    pow(a, n) {
        return Math.pow(a, n);
    }
}