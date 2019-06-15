<template>
    <div class="content-editor">
        <ContentEditorDetails />
        <div class="item">Basics</div>
        <div class="item">Social</div>
        <div class="item">Intro</div>
        <div class="item">Skills</div>
        <div class="item">Achievements</div>
        <div class="item">Conferences</div>
        <div class="item">Courses</div>
        <div class="item">Soft Skills</div>
        <div class="item">Technical Skills</div>
        <div class="item">Education</div>
        <div class="item">Volunteer Experience</div>
        <div class="item">Publications</div>
        <div class="item">References</div>
        <div class="item">Languages</div>
        <div class="item">Interests</div>
        <div class="item">Certifications</div>
        <div class="item">Awards</div>
        <div class="item">Work Experience</div>
        <div class="item">Projects</div>
    </div>
</template>

<script>
import ContentEditorDetails from './ContentEditorDetails';

export default {
    name: "ContentEditor",
    data() {
        return {
            contentEditorSelected: null
        }
    },
    components: {
        ContentEditorDetails
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
