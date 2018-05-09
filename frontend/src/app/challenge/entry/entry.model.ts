export class Entry {
    private _id;

    constructor(private _description: string, private _img : string,private _author, private _created: Date = new Date()) {
           // if(_name == null || _name.length == 0)
          //   throw new Error("Naam mag niet leeg zijn");


    }

    get description() {
        return this._description;
    }
    get img() {
        return this._img;
    }
    get created() {
        return this._created;
    }
    get author() {
        return this._author;
    }

    toJSON() {
        console.log(this);
        return {
          id:this._id,
          description:this._description,
          img: this._img,
          created:this._created,
          author:this._author
        };
    }

    static fromJSON(json:any):Entry {
        const rec = new Entry(
            json.img,
            json.description,
            json.author,
            new Date(json.created)
        );
        rec._id = json._id;
        return rec;
    }

    get id(): string {
        return this._id;
    }
}