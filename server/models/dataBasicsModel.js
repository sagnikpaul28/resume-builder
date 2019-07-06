const dataBasicsSchema = {
    email: {
        type: String,
        default: ""
    },
    number: {
        type: String,
        default: ""
    },
    country: {
        type: String,
        default: ""
    },
    city: {
        type: String,
        default: ""
    },
    address: {
        type: String,
        default: ""
    },
    name: {
        type: String,
        default: ""
    }
};

exports.dataBasics = dataBasicsSchema;