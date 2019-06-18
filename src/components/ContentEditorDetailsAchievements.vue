<template>
    <div>
        <div class="items accordion" v-for="item in data.achievements" :key="item._id">
            <div class="item-accordion-title" @click="expandAccordion('achievements', item._id)">{{item.name}}</div>
            <span class="expand" :class="{expanded: item.isExpanded}">&#x2794;</span>
            <div class="expanded-content" :class="{expanded: item.isExpanded}">
                <div class="input-containers">
                    <label>Name:</label>
                    <input type="text" v-model="editFields.achievements.name" />
                </div>
                <div class="input-containers">
                    <label>Link:</label>
                    <input type="text" v-model="editFields.achievements.link" />
                </div>
                <div class="input-containers">
                    <label>Description: </label>
                    <textarea rows="4" v-model="editFields.achievements.description" />
                </div>
            </div>
        </div>
        <div class="items accordion add-project">
            Add Achievements
            <div class="input-containers">
                <label>Name:</label>
                <input type="text" v-model="newFields.achievements.name" />
            </div>
            <div class="input-containers">
                <label>link:</label>
                <input type="text" v-model="newFields.achievements.link" />
            </div>
            <div class="input-containers">
                <label>Description: </label>
                <textarea rows="4" v-model="newFields.achievements.description" />
            </div>
            <button class="save" @click="onFieldSubmit('achievements')">Save</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "ContentEditorDetailsAchievements",
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
            //call action store with params 'achievements'
        },
        expandAccordion(field, id) {
            this.$store.dispatch('expandAccordion', {field, id});
        }
    }
}
</script>

<style>

</style>
