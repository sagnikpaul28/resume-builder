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
    layoutArray: {
        type: [LayoutItems],
        default: [
            {
                name: "Awards"
            }, {
                name: "Causes"
            }, {
                name: "Conferences"
            }, {
                name: "Courses"
            }, {
                name: "Publications"
            }, {
                name: "References"
            }, {
                name: "Soft Skills"
            }, {
                name: "Technical Skills"
            }, {
                name: "Volunteer"
            }
        ]
    },
    selectedLayoutArray: {
        leftArray: {
            type: [LayoutItems],
            default: [
                {
                    name: "Skills"
                }, {
                    name: "Languages"
                }, {
                    name: "Interests"
                }
            ]
        },
        rightArray: {
            type: [LayoutItems],
            default: [
                {
                    name: "Education"
                }, {
                    name: "Projects"
                }, {
                    name: "Work"
                }, {
                    name: "Achievements"
                }, {
                    name: "Certificates"
                }
            ]
        }
    }
};

exports.configSchema = configSchema;