export class Challenge {

    private _id;

    constructor(private _name: string, private _description: string, private _dateCreated: Date = new Date()) {
           // if(_name == null || _name.length == 0)
          //   throw new Error("Naam mag niet leeg zijn");

    }

    get name() {
        return this._name;
    }
    get description() {
        return this._description;
    }
    get dateCreated() {
        return this._dateCreated;
    }

    toJSON() {
        return {
          id:this._id,
          name: this._name,
          description:this._description,
          created:this._dateCreated
        };
    }

    get id(): string {
        return this._id;
    }
}