class ComplexCalculator extends RealCalculator {

    add(a, b) {
        return new Complex(a.re + b.re, a.im + b.im);
    }

    sub(a, b) {
        return new Complex(a.re - b.re, a.im - b.im);
    }

    mult(a, b) {
        return new Complex(a.re*b.re - a.im*b.im, a.re*b.im + b.re*a.im);
    }

    div(a, b) {
        return new Complex((a.re*b.re + a.im*b.im)/(b.re*b.re+b.im*b.im), (a.im*b.re + b.im*a.re)/(b.re*b.re+b.im*b.im));
    }

    module(a) {
        return Math.sqrt(Math.pow(a.re, 2) + Math.pow(a.im, 2));
    }

    one() {
        return new Complex(1);
    }

    zero() {
        return new Complex();
    }

    prod(p, a) {
        return new Complex(p*a.re, p*a.im);
    }

    pow(a, n) {
        let c = this.one();
        for (let i=0; i < n; i++){
            c = this.mult(c, a);
        }
        return new Complex(c.re, c.im);
    }
}