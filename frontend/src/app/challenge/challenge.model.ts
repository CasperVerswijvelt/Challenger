export class Challenge {



    constructor(private _name: string, private _description: string, private _dateCreated: Date = new Date()) {
            _dateCreated ;
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
          name: this._name,
          description:this._description,
          created:this._dateCreated
        };
      }
}