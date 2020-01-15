export class Product {

    public Product(code?:number, name?: string, description?:string, price?:number, stock?: number){
        this._code=code;
        this._name=name;
        this._description=description;
        this._price=price;
        this.stock=stock;
        this.state=true;
    }

    /**Id */
    private _id: number;
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    
    /**Product Code */
    private _code: number;
    public get code(): number {
        return this._code;
    }
    public set code(value: number) {
        this._code = value;
    }
    
    /**Product Name */
    private _name: string;
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    
    /**Product Description */
    private _description: string;
    public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        this._description = value;
    }
    

    /**Product Price*/
    private _price: number;
    public get price(): number {
        return this._price;
    }
    public set price(value: number) {
        this._price = value;
    }
    
    /**Product Stock >=0*/
    private _stock: number;
    public get stock(): number {
        return this._stock;
    }
    public set stock(value: number) {
        this._stock = value;
    }

    /**Product State, for logic delete */
    private _state: boolean;
    public get state(): boolean {
        return this._state;
    }
    public set state(value: boolean) {
        this._state = value;
    }

    
    
}
