class PolynomialCalculator{
    add(a,b){
        const calc = new Calculator();
        const members = [];
        a.poly.forEach(elemA => {
            const member = b.poly.find(elemB => elemA.power === elemB.power);
            if (member){
                members.push(new Member (calc.add(elemA.value, member.value), elemA.power));
            }
            else {
                members.push(new Member(elemA.value, elemA.power));
            }
        });
        b.poly.forEach(elemB => {
            if(!members.find(elem => elem.power === elemB.power)){
                members.push(new Member (elemB.value, elemB.power));
            }
            return new Polynomial(members);
        });
    }

    sub(a,b){
        const calc = new Calculator();
        const members = [];
        a.poly.forEach(elemA => {
            const member = b.poly.find(elemB => elemA.power === elemB.power);
            if (member){
                members.push(new Member (calc.add(elemA.value, member.value), elemA.power));
            }
            else {
                members.push(new Member(elemA.value, elemA.power));
            }
        });
        b.poly.forEach(elemB => {
            if(!members.find(elem => elem.power === elemB.power)){
                members.push(new Member (calc.prod(-1, elemB.value), elemB.power));
            }
            return new Polynomial(members);
        });
    }

    mult(a,b){
        const calc = new Calculator();
        let polynomial = new Polynomial;
        a.poly.forEach(elemA => {
            const member = [];
            b.poly.forEach(elemB => {
                    members.push(new Member (calc.mult(elemA.value, elemB.value), elemA.power + elemB.power));
            });
            polynomial = this.add(polynomial, new Polynomial(members));
        });
        return polynomial;
    }

    polynomial(members){
        return new Polynomial(members);
    }
}