import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        id: 1,
        showLayout: false,
        showThemeColors: false,
        showFontSelector: false,
        showContentEditor: false,
        showEditDetails: null,
        data: {
            name: "Sagnik Paul",
            email: "sagnikpaul2882@gmail.com",
            number: "+91-9674658599",
            country: "India",
            city: "Kolkata",
            address: "40, Sisir Bagan Road,\nBehala",
            website: "www.sagnikpaul.com",
            social: {
                twitter: "https://twitter.com",
                linkedin: "https://twitter.com",
                facebook: "https://twitter.com",
                github: "https://twitter.com",
                stackoverflow: "https://twitter.com",
                instagram: "https://twitter.com",
                medium: "https://twitter.com",
                quora: "https://twitter.com"
            },
            intro: {
                title: "Professional Title",
                summary: "Short and engaging stuff about yourself"
            },
            skills: [{
                name: "HTML"
            }, {
                name: "CSS"
            }, {
                name: "Javascript"
            }, {
                name: "jQuery"
            }],
            achievements: [{
                _id: 1,
                name: "Achievement 1",
                link: "",
                description: "Some random description",
            }, {
                _id: 2,
                name: "Achievement 2",
                link: "https://achievement.com",
                description: "Some description",
            }, {
                _id: 3,
                name: "Achievement 3",
                link: "",
                description: "",
            }],
            conferences: [{
                _id: 1,
                name: "Conference 1",
                link: "",
                description: "Some random description",
                dateFrom: "",
                dateTo: ""
            }, {
                _id: 2,
                name: "Conference 2",
                link: "https://achievement.com",
                description: "Some description",
                dateFrom: "07/2018",
                dateTo: "09/2109"
            }, {
                _id: 3,
                name: "Conference 3",
                link: "",
                description: "",
                dateFrom: "09/2019",
                dateTo: ""
            }],
            courses: [{
                _id: 1,
                name: "Course 1",
                link: "",
                description: "Some random description",
                dateFrom: "",
                dateTo: ""
            }, {
                _id: 2,
                name: "Course 2",
                link: "https://achievement.com",
                description: "Some description",
                dateFrom: "07/2018",
                dateTo: "09/2109"
            }, {
                _id: 3,
                name: "Course 3",
                link: "",
                description: "",
                dateFrom: "09/2019",
                dateTo: ""
            }],
            softSkills: [{
                name: "HTML"
            }, {
                name: "CSS"
            }, {
                name: "Javascript"
            }, {
                name: "jQuery"
            }],
            technicalSkills: [{
                name: "HTML"
            }, {
                name: "CSS"
            }, {
                name: "Javascript"
            }, {
                name: "jQuery"
            }],
            education: [{
                _id: 1,
                program: "12th",
                institute: "VMS",
                dateFrom: "01/01/2019",
                dateTo: "01/01/2019",
                place: "Kolkara",
                course: "12th"
            }, {
                _id: 2,
                program: "12th",
                institute: "VMS",
                dateFrom: "01/01/2019",
                dateTo: "01/01/2019",
                place: "Kolkara",
                course: "12th"
            }, {
                _id: 3,
                program: "12th",
                institute: "VMS",
                dateFrom: "01/01/2019",
                dateTo: "01/01/2019",
                place: "Kolkara",
                course: "12th"
            }],
            volunteer: [{
                _id: 1,
                title: "Some title",
                companyName: "some organization",
                dateFrom: "01/01/2019",
                dateTo: "01/01/2019",
                location: "Kolkata",
                description: "Some random description"
            }, {
                _id: 2,
                title: "Some title",
                companyName: "some organization",
                dateFrom: "01/01/2019",
                dateTo: "01/01/2019",
                location: "Kolkata",
                description: "Some random description"
            }, {
                _id: 3,
                title: "Some title",
                companyName: "some organization",
                dateFrom: "01/01/2019",
                dateTo: "01/01/2019",
                location: "Kolkata",
                description: "Some random description"
            }],
            publications: [{
                _id: 1,
                type: '',
                title: "Publication 1",
                authors: "A, B, C",
                date: "01/01/2019",
                description: "some random description"
            }, {
                _id: 1,
                type: '',
                title: "Publication 2",
                authors: "A, B, C",
                date: "01/01/2019",
                description: "some random description"
            }],
            references: [{
                _id: 1,
                name: "Dr N. K. Rout",
                position: "Some position",
                email: "email@email.com",
                number: "9674658599",
                description: "9674658599"
            }, {
                _id: 2,
                name: "Dr N. K. Rout",
                position: "Some position 1",
                email: "email@email.com",
                number: "9674658599",
                description: "9674658599"
            }, {
                _id: 3,
                name: "Dr N. K. Rout",
                position: "Some position 2",
                email: "email@email.com",
                number: "9674658599",
                description: "9674658599"
            }],
            languages: [{
                name: "A"
            }, {
                name: "B"
            }, {
                name: "C"
            }, {
                name: "D"
            }],
            interests: [{
                name: "HTML"
            }, {
                name: "CSS"
            }, {
                name: "Javascript"
            }, {
                name: "jQuery"
            }],
            certificates: [{
                _id: 1,
                name: "Name",
                link: "somelink.com",
                date: "01/01/2018",
                description: "Some certificate"
            }, {
                _id: 2,
                name: "Name",
                link: "somelink1.com",
                date: "01/01/2018",
                description: "Some certificate"
            }, {
                _id: 3,
                name: "Name",
                link: "somelink2.com",
                date: "01/01/2018",
                description: "Some certificate"
            }],
            awards: [{
                _id: 1,
                name: "Award 1",
                date: "01/01/2018",
                instituteName: "KIIT",
                description: "some award"
            }, {
                _id: 2,
                name: "Award 2",
                date: "01/01/2018",
                instituteName: "KIIT",
                description: "some award"
            }, {
                _id: 3,
                name: "Award 3",
                date: "01/01/2018",
                instituteName: "KIIT",
                description: "some award"
            }],
            work: [{
                _id: 1,
                title: "Product Developer",
                companyName: "NowFloats",
                dateFrom: "01/01/2018",
                dateTo: "01/01/2019",
                location: "Hyderabad",
                description: "Some random description",
                accomplishments: "",
            }, {
                _id: 2,
                title: "Product Developer",
                companyName: "NowFloats",
                dateFrom: "01/01/2018",
                dateTo: "01/01/2019",
                location: "Hyderabad",
                description: "Some random description",
                accomplishments: "",
            }, {
                _id: 3,
                title: "Product Developer",
                companyName: "NowFloats",
                dateFrom: "01/01/2018",
                dateTo: "01/01/2019",
                location: "Hyderabad",
                description: "Some random description",
                accomplishments: "",
            }],
            projects: [{
                _id: 1,
                name: "project1",
                link: "somelink.com",
                dateFrom: "01/01/2018",
                dateTo: "01/01/2018",
                description: "some random description"
            }, {
                _id: 2,
                name: "project2",
                link: "somelink.com",
                dateFrom: "01/01/2018",
                dateTo: "01/01/2018",
                description: "some random description"
            }, {
                _id: 3,
                name: "project3",
                link: "somelink.com",
                dateFrom: "01/01/2018",
                dateTo: "01/01/2018",
                description: "some random description"
            }]
        },
        newFields: {
            skills: '',
            softSkills: '',
            technicalSkills: '', 
            languages: '',
            interests: '',
            projects: {
                name: '',
                link: '',
                dateFrom: '',
                dateTo: '',
                description: ''
            },
            work: {
                title: '',
                companyName: '',
                dateTo: '',
                dateFrom: '',
                location: '',
                description: '',
                accomplishments: ''
            },
            awards: {
                name: '',
                instituteName: '',
                date: '',
                description: ''
            }, 
            certificates: {
                name: '',
                link: '',
                date: '',
                description: ''
            },
            references: {
                name: '',
                position: '',
                email: '',
                number: '',
                description: ''
            },
            publications: {
                name: '',
                authors: '',
                date: '',
                description: ''
            },
            volunteer: {
                title: '',
                companyName: '',
                dateTo: '',
                dateFrom: '',
                location: '',
                description: ''
            },
            courses: {
                name: '',
                dateFrom: '',
                dateTo: '',
                description: ''
            },
            conferences: {
                name: '',
                dateFrom: '',
                dateTo: '',
                description: ''
            },
            achievements: {
                name: '',
                link: '',
                description: ''
            },
            education: {
                program: '',
                institute: '',
                place: '',
                dateFrom: '',
                dateTo: '',
                course: ''
            }
        },
        editFields: {
            projects: {
                name: '',
                link: '',
                dateFrom: '',
                dateTo: '',
                description: ''
            }, 
            work: {
                title: '',
                companyName: '',
                dateFrom: '',
                dateTo: '',
                location: '',
                description: '',
                accomplishments: ''
            },
            awards: {
                name: '',
                instituteName: '',
                date: '',
                description: ''
            }, 
            certificates: {
                name: '',
                link: '',
                date: '',
                description: ''
            }, 
            references: {
                name: '',
                position: '',
                email: '',
                number: '',
                description: ''
            },
            publications: {
                name: '',
                link: '',
                date: '',
                description: ''
            },
            volunteer: {
                title: '',
                companyName: '',
                dateTo: '',
                dateFrom: '',
                location: '',
                description: ''
            },
            courses: {
                name: '',
                dateFrom: '',
                dateTo: '',
                description: ''
            },
            conferences: {
                name: '',
                dateFrom: '',
                dateTo: '',
                description: ''
            },
            achievements: {
                name: '',
                link: '',
                description: ''
            },
            education: {
                program: '',
                institute: '',
                place: '',
                dateFrom: '',
                dateTo: '',
                course: ''
            }
        }
    },
    getters: {
        //Send individual properties of data state through getters
    },
    mutations: {
        expandAccordion(state, payload) {
            state.data[payload.field] = state.data[payload.field].map(item => {
                if (item.isExpanded) {
                    delete item.isExpanded;
                }else if (item._id === payload.id) {
                    item.isExpanded = true;
                    state.editFields[payload.field] = item;
                }
                return item;
            })
        },
        onNavbatItemClicked(state, payload) {
            state.showEditDetails = null;
            if (payload === 'font') {
                state.showLayout = false;
                state.showThemeColors = false;
                state.showContentEditor = false;
                state.showFontSelector = !state.showFontSelector;
            }else if (payload === 'theme') {
                state.showLayout = false;
                state.showFontSelector = false;
                state.showContentEditor = false;
                state.showThemeColors = !state.showThemeColors;
            }else if (payload === 'layout') {
                state.showThemeColors = false;
                state.showFontSelector = false;
                state.showContentEditor = false;
                state.showLayout = !state.showLayout;
            }else if (payload === 'content') {
                state.showThemeColors = false;
                state.showFontSelector = false;
                state.showLayout = false;
                state.showContentEditor = !state.showContentEditor;
            }
        },
        showContentEditorDetails(state, payload) {
            state.showEditDetails = payload;
            state.showContentEditor = false;
        },
        hideContentEditorDetails(state) {
            state.showEditDetails = null;
            state.showContentEditor = true;
        }
    },
    actions: {
        expandAccordion(context, payload) {
            context.commit('expandAccordion', payload);
        },
        onNavbatItemClicked(context, payload) {
            context.commit('onNavbatItemClicked', payload);
        },
        showContentEditorDetails(context, payload) {
            context.commit('showContentEditorDetails', payload);
        },
        hideContentEditorDetails(context) {
            context.commit('hideContentEditorDetails');
        }
    }
})