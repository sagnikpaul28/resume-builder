<template>
    <div class="editor">
        <p class="title">Add More Sections</p>
        <p class="subtitle">These sections are optional</p>

        <div class="row">
            <div class="col col-2" v-for="item in array" :key="item">
                <input type="checkbox" v-model="selectedArray" :value="item">
                {{item}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AddSection",
    data() {
        return {
            array: [
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
            selectedArray: []
        }
    }
}
</script>

<style>

</style>
