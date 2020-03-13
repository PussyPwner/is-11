class Calculator extends RealCalculator{
    add(a,b){
        return this.get(a).add(a,b);
    }

    sub(a,b){
        return this.get(a).sub(a,b);
    }

    mult(a,b){
        return this.get(a).mult(a,b);
    }

    prod(p,a){
        if(typeof p === 'number'){
            return this.get(a).prod(p,a);
        }
        else return null;
    }

    prod(a,n){
        if(typeof p === 'number'){
            return this.get(a).pow(a,n);
        }
        else return null;
    }

    one(type,elem){
        type = type ? type : elem ? elem.constructor.name : null;
        switch(type){
            case 'Complex': return (new ComplexCalculator).one();
            case 'Vector': return (new VectorCalculator).one(elem.values.length, elem.values[0]);
            case 'Matrix': return (new MatrixCslculator).one(elem.values.length, elem.values[0][0]);
            default: return 1;
        }
    }

    zero(type,elem){
        type = type ? type : elem ? elem.constructor.name : null;
        switch(type){
            case 'Complex': return (new ComplexCalculator).zero();
            case 'Vector': return (new VectorCalculator).zero(elem.values.length, elem.values[0]);
            case 'Matrix': return (new MatrixCslculator).zero(elem.values.length, elem.values[0][0]);
            default: return 0;
        }
    }
    complex(re,im){
        return new Complex(re,im);
    }

    vector(values){
        return new Vector(values);
    }

    matrix(values){
        return new Matrix(values);
    }
}