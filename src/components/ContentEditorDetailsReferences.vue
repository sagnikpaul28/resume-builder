<template>
    <div>
        <div class="items accordion" v-for="item in data.references" :key="item._id">
            <div class="item-accordion-title" @click="expandAccordion('references', item._id)">{{item.name}}</div>
            <span class="expand" :class="{expanded: item.isExpanded}">&#x2794;</span>
            <div class="expanded-content" :class="{expanded: item.isExpanded}">
                <div class="input-containers">
                    <label>Name:</label>
                    <input type="text" v-model="editFields.references.name" />
                </div>
                <div class="input-containers">
                    <label>Position:</label>
                    <input type="text" v-model="editFields.references.position" />
                </div>
                <div class="input-containers">
                    <label>Email:</label>
                    <input type="text" v-model="editFields.references.email" />
                </div>
                <div class="input-containers">
                    <label>Number:</label>
                    <input type="text" v-model="editFields.references.number" />
                </div>
                <div class="input-containers">
                    <label>Description: </label>
                    <textarea rows="4" v-model="editFields.references.description" />
                </div>
            </div>
        </div>
        <div class="items accordion add-project">
            Add References
            <div class="input-containers">
                <label>Name:</label>
                <input type="text" v-model="newFields.references.name" />
            </div>
            <div class="input-containers">
                <label>Position:</label>
                <input type="text" v-model="newFields.references.position" />
            </div>
            <div class="input-containers">
                <label>Email:</label>
                <input type="text" v-model="newFields.references.email" />
            </div>
            <div class="input-containers">
                <label>Number:</label>
                <input type="text" v-model="newFields.references.number" />
            </div>
            <div class="input-containers">
                <label>Description: </label>
                <textarea rows="4" v-model="newFields.references.description" />
            </div>
            <button class="save" @click="onFieldSubmit('references')">Save</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "ContentEditorDetailsReferences",
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
