<template>
    <div>
        <div class="items" v-for="item in data.technicalSkills" :key="item.name">
            {{ item.name }}
            <span class="close">x</span>
        </div>
        <div class="input-containers">
            <label>Add Technical Skills: </label>
            <input type="text" v-model="newFields.technicalSkills" class="add-item" />
            <button type="button" @click="onFieldSubmit('technicalSkills')">Save</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "ContentEditorTechnicalSkills",
    computed: {
        data() {
            return this.$store.state.data
        },
    },
    methods: {
        onFieldSubmit() {
            //call action store with params 'courses'
        },
        newFields() {
            return this.$store.state.newFields
        }
    }
}
</script>
