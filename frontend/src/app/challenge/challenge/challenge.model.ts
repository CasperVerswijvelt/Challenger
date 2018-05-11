import { Entry } from "../entry/entry.model";

export class Challenge {

    public _id;
    private _entries: Entry[];
    private _author;

    constructor(private _name: string, private _description: string, private _dateCreated: Date = new Date()) {
        if (_name == null || _name.length < 4 || _name.length > 40)
            throw new Error("Name must have at least 4 and at max 40 characters");
        if (_description == null || _description.length < 20 || _description.length > 1000)
            throw new Error("Description must have at least 20 and at max 1000 characters");

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

    get entries() {
        return this._entries;
    }
    get author() {
        return this._author;
    }

    addEntry(entr: Entry) {
        this._entries.push(entr);
    }

    get id(): string {
        return this._id;
    }

    toJSON() {
        let json = {
            id: this._id,
            name: this._name,
            description: this._description,
            created: this._dateCreated,
            author: this._author,
            entries: this.entries
        };
        return json;
    }
    static fromJSON(json: any): Challenge {
        const rec = new Challenge(json.name, json.description, new Date(json.created));
        rec._id = json._id;
        rec._entries = json.entries;
        rec._author = json.author;
        return rec;
    }


}