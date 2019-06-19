const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const configSchema = {
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

const LayoutItems = {
    name: {
        type: String,
        required: true
    }
}

exports.configSchema = mongoose.model('dataConfig', configSchema);