<template>
    <div class="content-editor">
        <ContentEditorDetails v-if="showEditDetails" />
        <div class="item" @click="showContentEditor('basics')">Basics</div>
        <div class="item" @click="showContentEditor('social')">Social</div>
        <div class="item" @click="showContentEditor('intro')">Intro</div>
        <div class="item" @click="showContentEditor('skills')">Skills</div>
        <div class="item" @click="showContentEditor('achievements')">Achievements</div>
        <div class="item" @click="showContentEditor('conferences')">Conferences</div>
        <div class="item" @click="showContentEditor('courses')">Courses</div>
        <div class="item" @click="showContentEditor('softSkills')">Soft Skills</div>
        <div class="item" @click="showContentEditor('technicalSkills')">Technical Skills</div>
        <div class="item" @click="showContentEditor('education')">Education</div>
        <div class="item" @click="showContentEditor('volunteer')">Volunteer Experience</div>
        <div class="item" @click="showContentEditor('publications')">Publications</div>
        <div class="item" @click="showContentEditor('references')">References</div>
        <div class="item" @click="showContentEditor('languages')">Languages</div>
        <div class="item" @click="showContentEditor('interests')">Interests</div>
        <div class="item" @click="showContentEditor('certifications')">Certifications</div>
        <div class="item" @click="showContentEditor('awards')">Awards</div>
        <div class="item" @click="showContentEditor('work')">Work Experience</div>
        <div class="item" @click="showContentEditor('projects')">Projects</div>
        {{showEditDetails}}
    </div>
</template>

<script>
import ContentEditorDetails from './ContentEditorDetails';

export default {
    name: "ContentEditor",
    computed: {
        showEditDetails() {
            return this.$store.state.showEditDetails
        }
    },
    components: {
        ContentEditorDetails
    },
    methods: {
        showContentEditor(type) {
            this.$store.dispatch('showContentEditor', type);
        }
    }
}
</script>

<style lang="scss">
.content-editor {
    position: fixed;
    width: 90%;
    top: 50%;
    transform: translateY(-50%);
    left: 120px;
    height: auto;
    max-width: 300px;
    background: #303d46;
    border: 2px solid #1886d1;
    border-radius: 4px;
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: stretch;
    flex-direction: column;

    .item {
        color: #1886d1;
        font-size: 1rem;
        font-weight: bold;
        padding: 10px 0;
        border-radius: 4px;
        transition: .4s;
        border: 2px solid transparent;
        cursor: pointer;

        &:hover {
            border: 2px solid;
        }

        &.selected {
            background: #1886d1;
            color: #303d46;
        }
    }
}
</style>
