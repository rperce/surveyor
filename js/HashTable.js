function HashTable(keys, values) {
    var hash = new Object();
    this.put = (key, value) => {
        if (typeof key === "string") {
            hash[key] = value;
        } else {
            if (key._hashtableUniqueId == undefined) {
                key._hashtableUniqueId = UniqueId.prototype.generateId();
            }
            hash[key._hashtableUniqueId] = value;
        }
    };

    this.get = (key) => {
        if (typeof key === "string") {
            return hash[key];
        }
        if (key._hashtableUniqueId == undefined) {
            return undefined;
        }
        return hash[key._hashtableUniqueId];
    };

    if (keys == undefined) {
        keys = [];
    }
    if (values == undefined) {
        values = [];
        tempKeys = [];
        for (var i = 0; i < keys.length; i++) {
            if (i % 2 == 0) {
                tempKeys.push(keys[i]);
            } else {
                values.push(keys[i]);
            }
        }
        keys = tempKeys;
    }
    if (keys.length !== values.length) {
        throw('Different numbers of keys and values provided');
    }
    for (var i = 0; i < keys.length; i++) {
        this.put(keys[i], values[i]);
    }
}

function UniqueId() {}
UniqueId.prototype._id = 0;
UniqueId.prototype.generateId = () => {
    return (++UniqueId.prototype._id).toString();
};

module.exports = HashTable;
