<template>
    <div class="content-editor-details">
        <p class="go-back">&#8678; Back</p>

        <ContentEditorDetailsBasics v-if="showEditDetails === 'basics'" />

        <!-- Social -->
        <ContentEditorDetailsSocials  v-if="showEditDetails === 'social'" />

        <!-- Header -->
        <ContentEditorDetailsHeader  v-if="showEditDetails === 'header'" />

        <!-- Skills -->
        <ContentEditorDetailsSkills  v-if="showEditDetails === 'skills'" />

        <!-- Achievements -->
        <ContentEditorDetailsAchievements v-if="showEditDetails === 'achievements'" />

        <!-- Conferences -->
        <ContentEditorDetailsConferences v-if="showEditDetails === 'conferences'" />

        <!-- Courses -->
        <ContentEditorDetailsCourses v-if="showEditDetails === 'courses'" />

        <!-- Soft Skills -->
        <ContentEditorDetailsSoftSkills v-if="showEditDetails === 'softSkills'" />

        <!-- Technical Skills -->
        <ContentEditorDetailsTechnicalSkills v-if="showEditDetails === 'technicalSkills'" />

        <!-- Education -->
        <ContentEditorDetailsEducation v-if="showEditDetails === 'education'" />

        <!-- Volunteer -->
        <ContentEditorDetailsVolunteer v-if="showEditDetails === 'volunteer'" />

        <!-- Publications -->
        <ContentEditorDetailsPublications v-if="showEditDetails === 'publications'" />

        <!-- References -->
        <ContentEditorDetailsReferences v-if="showEditDetails === 'references'" />

        <!-- Languages -->
        <ContentEditorDetailsLanguages v-if="showEditDetails === 'languages'" />

        <!-- Interests -->
        <ContentEditorDetailsInterests v-if="showEditDetails === 'interests'" />

        <!-- Certificates -->
        <ContentEditorDetailsCertificates v-if="showEditDetails === 'certificates'" />

        <!-- Awards -->
        <ContentEditorDetailsAwards v-if="showEditDetails === 'awards'" />

        <!-- Work -->
        <ContentEditorDetailsAwards v-if="showEditDetails === 'work'" />

        <!-- Projects -->
        <ContentEditorDetailsProjects v-if="showEditDetails === 'projects'" />

    </div>
</template>

<script>
import ContentEditorDetailsBasics from './ContentEditorDetailsBasics';
import ContentEditorDetailsSocials from './ContentEditorDetailsSocials';
import ContentEditorDetailsHeader from './ContentEditorDetailsHeader';
import ContentEditorDetailsSkills from './ContentEditorDetailsSkills';
import ContentEditorDetailsAchievements from './ContentEditorDetailsAchievements';
import ContentEditorDetailsConferences from './ContentEditorDetailsConferences';
import ContentEditorDetailsCourses from './ContentEditorDetailsCourses';
import ContentEditorDetailsSoftSkills from './ContentEditorDetailsSoftSkills';
import ContentEditorDetailsTechnicalSkills from './ContentEditorDetailsTechnicalSkills';
import ContentEditorDetailsEducation from './ContentEditorDetailsEducation';
import ContentEditorDetailsVolunteer from './ContentEditorDetailsVolunteer';
import ContentEditorDetailsPublications from './ContentEditorDetailsPublications';
import ContentEditorDetailsReferences from './ContentEditorDetailsReferences';
import ContentEditorDetailsLanguages from './ContentEditorDetailsLanguages';
import ContentEditorDetailsInterests from './ContentEditorDetailsInterests';
import ContentEditorDetailsCertificates from './ContentEditorDetailsCertificates';
import ContentEditorDetailsAwards from './ContentEditorDetailsAwards';
import ContentEditorDetailsWork from './ContentEditorDetailsWork';
import ContentEditorDetailsProjects from './ContentEditorDetailsProjects';

export default {
    name: "ContentEditorDetails",
    components: {
        ContentEditorDetailsBasics,
        ContentEditorDetailsSocials,
        ContentEditorDetailsHeader,
        ContentEditorDetailsSkills,
        ContentEditorDetailsAchievements,
        ContentEditorDetailsConferences,
        ContentEditorDetailsCourses,
        ContentEditorDetailsSoftSkills,
        ContentEditorDetailsTechnicalSkills,
        ContentEditorDetailsEducation,
        ContentEditorDetailsVolunteer,
        ContentEditorDetailsPublications,
        ContentEditorDetailsReferences,
        ContentEditorDetailsLanguages,
        ContentEditorDetailsInterests,
        ContentEditorDetailsCertificates,
        ContentEditorDetailsAwards,
        ContentEditorDetailsProjects
    },
    computed: {
        data() {
            return this.$store.state.data
        },
        showEditDetails() {
            return this.$store.state.showEditDetails
        },
        editFields() {
            return this.$store.state.editFields
        },
        newFields() {
            return this.$store.state.newFields
        }
    },
    methods: {
        onFieldSubmit(field) {
            /*
            ==========================
            check if fields empty
            write common code for insertion
            save after edit fields
            ==========================
            */
            if (field === 'projects') {
                this.data[field].push({
                    name: this.newFields[field].name,
                    dateFrom: this.newFields[field].dateFrom,
                    dateTo: this.newFields[field].dateTo,
                    link: this.newFields[field].link,
                    description: this.newFields[field].description
                });
                
                for (const key of Object.keys(this.newFields[field])) {
                    this.newFields[field][key] = '';
                }
            }else if (field === 'work') {
                this.data[field].push({
                    title: this.newFields[field].title,
                    companyName: this.newFields[field].companyName,
                    dateFrom: this.newFields[field].dateFrom,
                    dateTo: this.newFields[field].dateTo,
                    location: this.newFields[field].location,
                    description: this.newFields[field].description,
                    accomplishments: this.newFields[field].accomplishments
                });
                
                for (const key of Object.keys(this.newFields[field])) {
                    this.newFields[field][key] = '';
                }
            }else if (field === 'awards') {
                this.data[field].push({
                    name: this.newFields[field].name,
                    instituteName: this.newFields[field].instituteName,
                    date: this.newFields[field].date,
                    description: this.newFields[field].description,
                });
                
                for (const key of Object.keys(this.newFields[field])) {
                    this.newFields[field][key] = '';
                }
            }else if (field === 'certificates') {
                this.data[field].push({
                    name: this.newFields[field].name,
                    link: this.newFields[field].link,
                    date: this.newFields[field].date,
                    description: this.newFields[field].description,
                });
                
                for (const key of Object.keys(this.newFields[field])) {
                    this.newFields[field][key] = '';
                }
            }else if (field === 'achievements') {
                this.data[field].push({
                    name: this.newFields[field].name,
                    link: this.newFields[field].link,
                    description: this.newFields[field].description,
                });
                
                for (const key of Object.keys(this.newFields[field])) {
                    this.newFields[field][key] = '';
                }
            }else if (field === 'education') {
                this.data[field].push({
                    program: this.newFields[field].program,
                    institute: this.newFields[field].institute,
                    dateFrom: this.newFields[field].dateFrom,
                    dateTo: this.newFields[field].dateTo,
                    course: this.newFields[field].course,
                    place: this.newFields[field].place
                });
                
                for (const key of Object.keys(this.newFields[field])) {
                    this.newFields[field][key] = '';
                }
            }else if (field === 'references') {
                this.data[field].push({
                    name: this.newFields[field].name,
                    position: this.newFields[field].position,
                    email: this.newFields[field].email,
                    number: this.newFields[field].number,
                    description: this.newFields[field].description,
                });
                
                for (const key of Object.keys(this.newFields[field])) {
                    this.newFields[field][key] = '';
                }
            }else if (field === 'volunteer') {
                this.data[field].push({
                    title: this.newFields[field].title,
                    companyName: this.newFields[field].companyName,
                    dateFrom: this.newFields[field].dateFrom,
                    dateTo: this.newFields[field].dateTo,
                    location: this.newFields[field].location,
                    description: this.newFields[field].description
                });
                
                for (const key of Object.keys(this.newFields[field])) {
                    this.newFields[field][key] = '';
                }
            }else if (field === 'courses') {
                this.data[field].push({
                    name: this.newFields[field].name,
                    dateFrom: this.newFields[field].dateFrom,
                    dateTo: this.newFields[field].dateTo,
                    description: this.newFields[field].description
                });
                
                for (const key of Object.keys(this.newFields[field])) {
                    this.newFields[field][key] = '';
                }
            }else if (field === 'conferences') {
                this.data[field].push({
                    name: this.newFields[field].name,
                    dateFrom: this.newFields[field].dateFrom,
                    dateTo: this.newFields[field].dateTo,
                    description: this.newFields[field].description
                });
                
                for (const key of Object.keys(this.newFields[field])) {
                    this.newFields[field][key] = '';
                }
            }else if (field === 'publications') {
                this.data[field].push({
                    title: this.newFields[field].title,
                    authors: this.newFields[field].authors,
                    date: this.newFields[field].date,
                    description: this.newFields[field].description,
                });
                
                for (const key of Object.keys(this.newFields[field])) {
                    this.newFields[field][key] = '';
                }
            }else {
                this.data[field].push({
                    name: this.newFields[field]
                });
                this.newFields[field] = null;
            }
        },
        expandAccordion(field, id) {
            console.log(id);
            this.$store.dispatch('expandAccordion', {field, id});
        }
    }
}
</script>

<style lang="scss">
.content-editor-details {
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    height: auto;
    max-height: 90%;
    overflow: scroll;
    width: 400px;
    background: #303d46;
    border: 2px solid #1886d1;
    border-radius: 4px;
    padding: 15px;
    display: flex;
    text-align: left;
    flex-direction: column;

    .go-back {
        color: #1886d1;
        font-weight: bold;
        margin: 0 0 10px;
        text-align: left;
        cursor: pointer;
    }

    > div {
        .input-containers {
            margin-top: 15px;
            padding: 15px 0 0;
            border-top: 1px solid #1886d1;

            label {
                display: block;
                text-align: left;
                margin-bottom: 2px;
                color: #1886d1;
            }

            input, textarea {
                width: calc(100% - 20px);
                color: #1886d1;
                background: transparent;
                border: 1px solid;
                padding: 8px 10px;
                font-size: 1rem;
                border-radius: 4px;
                margin-bottom: 10px;

                &.add-item {
                    width: calc(100% - 90px);
                    border-radius: 4px 0 0 4px;
                    border-right: 0;
                }
            }

            button {
                background: transparent;
                border: 1px solid;
                color: #1886d1;
                padding: 8px 15px;
                font-size: 1rem;
                border-radius: 0 4px 4px 0;
                cursor: pointer;
                transition: .3s;

                &:hover {
                    background: #1886d1;
                    color: #303d46;
                    border-color: #1886d1;
                }
            }
        }

        .items {
            display: inline-block;
            position: relative;
            color: #1886d1;
            padding: 6px 12px;
            border: 1px solid;
            border-radius: 4px;
            margin: 7px;

            .close {
                position: absolute;
                top: -8px;
                right: -10px;
                line-height: 18px;
                font-size: 1rem;
                border: 1px solid;
                background: #303d46;
                border-radius: 50%;
                height: 20px;
                width: 20px;
                text-align: center;
                font-weight: bold;
                cursor: pointer;
            }

            &.accordion {
                display: block;
                margin: 10px 0;
                cursor: pointer;
                padding: 10px 12px;

                .save {
                    background: transparent;
                    color: #1886d1;
                    border: 1px solid #1886d1;
                    margin: 15px 0px 10px;
                    border-radius: 4px;
                    width: 100%;
                    padding: 8px 15px;
                    font-size: 1rem;
                    transition: .3s;

                    &:hover {
                        color: #303d46;
                        background: #1886d1;
                    }
                }

                .item-accordion-title {
                    position: relative;
                    z-index: 1;
                }

                .expand {
                    transform: none;
                    transition: .3s;
                    position: absolute;
                    right: 10px;
                    top: 7px;
                    z-index: 0;

                    &.expanded {
                        transform: rotate(90deg);
                    }
                }

                .expanded-content {
                    display: none;

                    &.expanded {
                        display: block;
                    }
                }

                .input-containers {
                    border: 0;
                    margin: 0;
                    padding: 0;

                    &:nth-of-type(1) {
                        margin-top: 10px;
                    }
                }
            }
        }
    }
}
</style>
