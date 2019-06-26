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
            basics: {
                name: "Sagnik Paul",
                email: "",
                number: "",
                country: "",
                city: "",
                address: "",
            },
            social: {
                website: "",
                twitter: "",
                linkedin: "",
                facebook: "",
                github: "",
                stackoverflow: "",
                instagram: "",
                medium: "",
                quora: ""
            },
            intro: {
                title: "",
                summary: ""
            },
            skills: [],
            achievements: [],
            conferences: [],
            courses: [],
            softSkills: [],
            technicalSkills: [],
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
            volunteer: [],
            references: [],
            languages: [],
            interests: [],
            certificates: [],
            awards: [],
            work: [],
            projects: []
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
        },


        openModal(state, payload) {
            state.data[payload.type] = state.data[payload.type].map((item, index) => {
                if (index === payload.index) {
                    item.showModal = true;
                }else if (item.showModal) {
                    delete item.showModal;
                }
                return item;
            });
        },
        closeModal(state, payload) {
            state.data[payload.type] = state.data[payload.type].map(item => {
                if (item.showModal) {
                    delete item.showModal;
                }
                console.log(item);
                return item;
            });
        },
        deleteItem(state, payload) {
            state.data[payload.type].splice(payload.index, 1);
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
        },


        openModal(context, payload) {
            context.commit('openModal', payload);
        },
        closeModal(context, payload) {
            context.commit('closeModal', payload);
        },
        deleteItem(context, payload) {
            context.commit('deleteItem', payload);
        }
    }
})