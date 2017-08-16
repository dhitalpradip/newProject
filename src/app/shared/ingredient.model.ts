export class Ingredient {
    public name: string;
    public amount: number;

    constructor(name:string, amount:number){
        this.name = name;
        this.amount = amount;
    }
}

// Instead of all above codes, we can simply write a shortcut as below; which works the same

/*
export class Ingredient {
constructor(public name:string, public amount:number){}
}
*/