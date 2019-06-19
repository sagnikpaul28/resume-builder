const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataHeaderSchema = {
    font: {
        type: String,
        default: "Roboto"
    },
    themeColor: {
        type: "String",
        default: "curious-blue"
    },
    useSingleColumn: {
        type: Boolean,
        default: false
    },
    layoutArray: {
        type: [LayoutItems]
    },
    selectedLayoutArray: {
        leftArray: {
            type: [LayoutItems]
        },
        rightArray: {
            type: [LayoutItems]
        }
    }
};

exports.dataHeader = mongoose.model('DataHeader', dataHeaderSchema);;