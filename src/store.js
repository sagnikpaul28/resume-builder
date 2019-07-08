import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        id: 1,
        selectedArray: [],
        layoutArray: [],
        data: {
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
        },
        fieldOptions: [
            "Achievements",
            "Awards",
            "Certificates",
            "Conferences",
            "Courses",
            "Interests",
            "Languages",
            "Projects",
            "Publications",
            "References",
            "Social Media",
            "Soft Skills",
            "Technical Skills",
            "Volunteer Experience",
            "Work Experience"
        ],
        nextState: null
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
                return item;
            });
        },
        deleteItem(state, payload) {
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
        },
        afterLayoutChooseNextState(state, payload) {
            let newArray = [...state.data.selectedLayoutArray.combinedArray];
            console.log(newArray);
            newArray = newArray.map(item => {
                if (item.name !== 'Basics' && item.name !== 'Skills' && item.name !== 'Education' && item.name !== 'Intro'){ 
                    return item.name.toLowerCase().replace(' ', '-')
                }
            }).sort();
            
            if (payload === null) {
                state.nextState = newArray[0];
            }
            console.log(newArray, payload);
            for (let i = 0; i < newArray.length; i++) {
                if (newArray[i] === payload) {
                    if (i === newArray.length - 1 || newArray[i+1] === undefined) {
                        state.nextState = 'resume';
                    }else {
                        state.nextState = newArray[i+1];
                    }
                }
            }
        },
        resetNextState(state) {
            state.nextState = null;
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
        },
        afterLayoutChooseNextState(context, payload) {
            context.commit('afterLayoutChooseNextState', payload);
        },
        resetNextState(context) {
            context.commit('resetNextState');
        }
    }
})