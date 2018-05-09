export class Entry {
    private _id;
    private _author;

    constructor(private _description: string, private _img: string, private _created: Date = new Date()) {
        
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

    get id(): string {
        return this._id;
    }
    testImage(url, callback, timeout) {
        timeout = timeout || 5000;
        var timedOut = false, timer;
        var img = new Image();
        img.onerror = img.onabort = function () {
            if (!timedOut) {
                clearTimeout(timer);
                callback(url, "error");
            }
        };
        img.onload = function () {
            if (!timedOut) {
                clearTimeout(timer);
                callback(url, "success");
            }
        };
        img.src = url;
        timer = setTimeout(function () {
            timedOut = true;
            // reset .src to invalid URL so it stops previous
            // loading, but doesn't trigger new load
            img.src = "//!!!!/test.jpg";
            callback(url, "timeout");
        }, timeout);
    }
}