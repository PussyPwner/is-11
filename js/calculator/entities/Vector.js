class Vector {
    constructor(values) {
        this.values=[];
        values.array.forEach(elem => {
            this.values.push(elem);
        });
    }
}