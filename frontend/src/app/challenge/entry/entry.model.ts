export class Entry {
    //Moest publiek zetten, --prod liet niet toe dat het gebuild werd
    public _id;
    public _author;

    constructor(private _description: string, private _img: string, private _created: Date = new Date()) {
        if (_description == null || _description.length < 20 || _description.length > 200)
            throw new Error("Description must have at least 20 and at max 200 characters");
        if (_img == null || _img.length < 20 || _img.length > 500)
            throw new Error("URL to image must have at least 20 and at max 500 characters");
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
    get id() {
        return this._id;
    }

    toJSON() {
        return {
            id: this._id,
            description: this._description,
            img: this._img,
            created: this._created,
            author: this._author
        };
    }

    static fromJSON(json: any): Entry {
        const rec = new Entry(
            json.img,
            json.description,
            new Date(json.created)
        );
        rec._author = json.author;
        rec._id = json._id;
        return rec;
    }

    

    
}