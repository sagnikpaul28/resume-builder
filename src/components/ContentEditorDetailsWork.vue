<template>
    <div>
        <div class="items accordion" v-for="item in data.work" :key="item._id">
            <div class="item-accordion-title" @click="expandAccordion('work', item._id)">{{item.title}}, {{item.companyName}}</div>
            <span class="expand" :class="{expanded: item.isExpanded}">&#x2794;</span>
            <div class="expanded-content" :class="{expanded: item.isExpanded}">
                <div class="input-containers">
                    <label>Title:</label>
                    <input type="text" v-model="editFields.work.title" />
                </div>
                <div class="input-containers">
                    <label>Company:</label>
                    <input type="text" v-model="editFields.work.companyName" />
                </div>
                <div class="input-containers">
                    <label>Location:</label>
                    <input type="text" v-model="editFields.work.location" />
                </div>
                <div class="input-containers">
                    <label>Description: </label>
                    <textarea rows="4" v-model="editFields.work.description" />
                </div>
                <div class="input-containers">
                    <label>Date From:</label>
                    <input type="text" v-model="editFields.work.dateFrom" />
                </div>
                <div class="input-containers">
                    <label>Date To:</label>
                    <input type="text" v-model="editFields.work.dateTo" />
                </div>
                <div class="input-containers">
                    <label>Accomplishments:</label>
                    <input type="text" v-model="editFields.work.accomplishments" />
                </div>
            </div>
        </div>
        <div class="items accordion add-project">
            Add Work Experience
            <div class="input-containers">
                <label>Title:</label>
                <input type="text" v-model="newFields.work.title" />
            </div>
            <div class="input-containers">
                <label>Company:</label>
                <input type="text" v-model="newFields.work.companyName" />
            </div>
            <div class="input-containers">
                <label>Location:</label>
                <input type="text" v-model="newFields.work.location" />
            </div>
            <div class="input-containers">
                <label>Description: </label>
                <textarea rows="4" v-model="newFields.work.description" />
            </div>
            <div class="input-containers">
                <label>Date From:</label>
                <input type="text" v-model="newFields.work.dateFrom" />
            </div>
            <div class="input-containers">
                <label>Date To:</label>
                <input type="text" v-model="newFields.work.dateTo" />
            </div>
            <div class="input-containers">
                <label>Accomplishments:</label>
                <input type="text" v-model="newFields.work.accomplishments" />
            </div>
            <button class="save" @click="onFieldSubmit()">Save</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "ContentEditorDetailsWork",
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
            //call action store with params 'courses'
        },
        expandAccordion(field, id) {
            this.$store.dispatch('expandAccordion', {field, id});
        }
    }
}
</script>

<style>

</style>
