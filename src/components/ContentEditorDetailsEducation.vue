<template>
    <div>
        <div class="items accordion" v-for="item in data.education" :key="item._id">
            <div class="item-accordion-title" @click="expandAccordion('education', item._id)">{{item.program}}, {{item.institute}}</div>
            <span class="expand" :class="{expanded: item.isExpanded}">&#x2794;</span>
            <div class="expanded-content" :class="{expanded: item.isExpanded}">
                <div class="input-containers">
                    <label>Program:</label>
                    <input type="text" v-model="editFields.education.program" />
                </div>
                <div class="input-containers">
                    <label>Institute:</label>
                    <input type="text" v-model="editFields.education.institute" />
                </div>
                <div class="input-containers">
                    <label>Place:</label>
                    <input type="text" v-model="editFields.education.place" />
                </div>
                <div class="input-containers">
                    <label>Course: </label>
                    <textarea rows="4" v-model="editFields.education.course" />
                </div>
                <div class="input-containers">
                    <label>Date From:</label>
                    <input type="text" v-model="editFields.education.dateFrom" />
                </div>
                <div class="input-containers">
                    <label>Date To:</label>
                    <input type="text" v-model="editFields.education.dateTo" />
                </div>
            </div>
        </div>
        <div class="items accordion add-project">
            Add Education
            <div class="input-containers">
                <label>Program:</label>
                <input type="text" v-model="newFields.education.program" />
            </div>
            <div class="input-containers">
                <label>Institute:</label>
                <input type="text" v-model="newFields.education.institute" />
            </div>
            <div class="input-containers">
                <label>Place:</label>
                <input type="text" v-model="newFields.education.place" />
            </div>
            <div class="input-containers">
                <label>Course: </label>
                <textarea rows="4" v-model="newFields.education.course" />
            </div>
            <div class="input-containers">
                <label>Date From:</label>
                <input type="text" v-model="newFields.education.dateFrom" />
            </div>
            <div class="input-containers">
                <label>Date To:</label>
                <input type="text" v-model="newFields.education.dateTo" />
            </div>
            <button class="save" @click="onFieldSubmit()">Save</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "ContentEditorDetailsEducation",
    computed: {
        data() {
            return this.$store.state.data
        },
        editFields() {
            return this.$store.state.editFields
        },
        newFields() {
            return this.$store.state.newFields
        }
    },
    methods: {
        onFieldSubmit() {
            //call action store with params 'education'
        },
        expandAccordion(field, id) {
            this.$store.dispatch('expandAccordion', {field, id});
        }
    }
}
</script>

<style>

</style>
