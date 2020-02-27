class VectorCalculator extends RealCalculator {

    add(a, b) {
        return new Vector(a.values.map((elem,i)=>elem+b.values[i]));
    }

    sub(a, b) {
        return new Vector(a.values.map((elem,i)=>elem-b.values[i]));
    }

    mult(a, b) { //рассмотреть 3хмерное пространство
        return new Vector( [a[1]*b[2]-b[1]*a[2] , b[0]*a[2]-a[0]*b[2] , a[0]*b[1]-b[0]*a[1]] );
    }

    module(a) {
        return Math.sqrt(a.values.reduce((S,elem)=>S+Math.pow(elem,2),0));
    }

    one(n) {
        let a=[];
        for (let i=0; i<n; i++){
            a.values[i]=1;
        }
        return new Vector(a.values);
    }

    zero(n) {
        let a=[];
        for (let i=0; i<n; i++){
            a.values[i]=0;
        }
        return new Vector(a.values);
    }

    prod(p, a) {
        return new Vector(a.values.map((elem)=>elem*p));
    }

    pow(a, n) {
        let c = this.one(a.values.length);
        for (let i=0; i<n; i++){
            c.values = this.mult(c.values,a.values);
        }
        return new Vector(c.values);
    }
}