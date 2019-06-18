<template>
    <div>
        <div class="items accordion" v-for="item in data.certificates" :key="item._id">
            <div class="item-accordion-title" @click="expandAccordion('certificates', item._id)">{{item.name}}</div>
            <span class="expand" :class="{expanded: item.isExpanded}">&#x2794;</span>
            <div class="expanded-content" :class="{expanded: item.isExpanded}">
                <div class="input-containers">
                    <label>Name:</label>
                    <input type="text" v-model="editFields.certificates.name" />
                </div>
                <div class="input-containers">
                    <label>Link:</label>
                    <input type="text" v-model="editFields.certificates.link" />
                </div>
                <div class="input-containers">
                    <label>Date:</label>
                    <input type="text" v-model="editFields.certificates.date" />
                </div>
                <div class="input-containers">
                    <label>Description: </label>
                    <textarea rows="4" v-model="editFields.certificates.description" />
                </div>
            </div>
        </div>
        <div class="items accordion add-project">
            Add Certificates
            <div class="input-containers">
                <label>Name:</label>
                <input type="text" v-model="newFields.certificates.name" />
            </div>
            <div class="input-containers">
                <label>link:</label>
                <input type="text" v-model="newFields.certificates.link" />
            </div>
            <div class="input-containers">
                <label>Date:</label>
                <input type="text" v-model="newFields.certificates.date" />
            </div>
            <div class="input-containers">
                <label>Description: </label>
                <textarea rows="4" v-model="newFields.certificates.description" />
            </div>
            <button class="save" @click="onFieldSubmit('certificates')">Save</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "ContentEditorDetailsCertificates",
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
