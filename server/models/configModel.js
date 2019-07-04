const LayoutItems = {
    name: {
        type: String,
        required: true
    }
}

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
    selectedLayoutArray: {
        leftArray: {
            type: [LayoutItems],
        },
        rightArray: {
            type: [LayoutItems],
        },
        combinedArray: {
            type: [LayoutItems]
        }
    }
};

exports.configSchema = configSchema;