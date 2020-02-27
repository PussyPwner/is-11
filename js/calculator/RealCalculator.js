class RealCalculator {

    add(a, b) {
        return a+b;
    }

    sub(a, b) {
        return a-b;
    }

    mult(a, b) {
        return a*b;
    }

    div(a, b) {
        return a/b;
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
        return p*a;
    }

    pow(a, n) {
        return Math.pow(a,n);
    }
}