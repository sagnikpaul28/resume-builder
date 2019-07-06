import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        id: 1,
        selectedArray: [],
        layoutArray: [],
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
            header: {
                objective: ""
            },
            skills: [],
            achievements: [],
            conferences: [],
            courses: [],
            softSkills: [],
            publications: [],
            technicalSkills: [],
            education: [],
            volunteer: [],
            references: [],
            languages: [],
            interests: [],
            certificates: [],
            awards: [],
            work: [],
            projects: [],
            selectedLayoutArray: {
                leftArray: [],
                rightArray: [],
                combinedArray: []
            },
            font: "",
            themeColor: ""
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
                title: '',
                type: '',
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
            console.log(payload);
            state.data[payload.type].splice(payload.index, 1);
        },
        addDetails(state, payload) {
            state.data[payload.type].push(payload.value);
        },
        onComponentsSelect(state) {
            state.layoutArray = ["Skills", "Education", "Intro", ...state.selectedArray];
            state.data.selectedLayoutArray.leftArray = state.layoutArray.slice(0, state.layoutArray.length/3 + 1);
            state.data.selectedLayoutArray.rightArray = state.layoutArray.slice(state.layoutArray.length/3 + 1, state.layoutArray.length);
            state.data.selectedLayoutArray.combinedArray = [...state.layoutArray];
        },
        fontSelect(state, payload) {
            state.data.font = payload;
        },
        colorSelect(state,payload) {
            state.data.themeColor = payload;
        },
        saveLoadedData(state, payload) {
            state.data = payload;
        }
    },
    actions: {
        openModal(context, payload) {
            context.commit('openModal', payload);
        },
        closeModal(context, payload) {
            context.commit('closeModal', payload);
        },
        deleteItem(context, payload) {
            context.commit('deleteItem', payload);
        },
        addDetails(context, payload) {
            context.commit('addDetails', payload);
        },
        onComponentsSelect(context) {
            context.commit('onComponentsSelect');
        },
        fontSelect(context, payload) {
            context.commit('fontSelect', payload);
        },
        colorSelect(context, payload) {
            context.commit('colorSelect', payload);
        },
        saveLoadedData(context, payload) {
            context.commit('saveLoadedData', payload);
        }
    }
})