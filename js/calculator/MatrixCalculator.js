class MatrixCalculator extends RealCalculator {

    add(a,b){
        return new Matrix(a.values.map((arr,i)=>arr.map((elem,j)=>elem+b.values[i][j])));
    }

    sub(a,b){
        return new Matrix(a.values.map((arr,i)=>arr.map((elem,j)=>elem-b.values[i][j])));
    }

    mult(a,b){
        let val=[];
        for (let i=0;i<a.values.length;i++){
            val.push([]);
            for(let j=0; j<b.values[i].length;j++){
                let S=0;
                for(let k=0; k<a.values[i].length; k++){
                    S=S+a.values[i][k]*b.values[k][j];    //a[k][i]*b[j][k] - вроде так
                }
                val.values[i][j]=S;
            }
        }
        return new Matrix(val.values);
    }

    div(a,b){
        return null;
    }

    module(a) {
        return null;
    }

    zero(n) {
        let a=[];
        for (let i=0; i<n; i++){
            a.push([]);
            for(let j=0; j<n; j++){
                a.values[i][j]=0;
            }
        }
        return new Matrix(a.values);
    }

    one(n) {
        let a=this.zero(n);
        for (let k=0; k<n; k++){
            a.values[k][k]=1;
        }
        return new Matrix(a.values);
    }

    prod(p, a) {
        return new Matrix(a.values.map(arr=>arr.map(elem=>elem*p)));
    }

    pow(a, n) {
        let c = this.one(a.values.length);
        for(let i=0; i<n; i++){
            c.values=this.mult(c.values,a.values);
        }
        return new Matrix(c.values);
    }
}
