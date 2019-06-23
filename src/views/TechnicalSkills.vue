<template>
    <div class="editor">
        <p class="title">What skills do you want to highlight?</p>
        <p class="subtitle">Drag and drop to reorder your skills</p>
        <div class="row">
            <draggable class="list-group" :list="data.technicalSkills" group="people"> 
                <transition-group>
                    <div class="col col-3" v-for="(skill, index) in data.technicalSkills" :key="index">
                        <div class="input-containers">
                            <input type="text" :value="skill.name" />
                        </div>
                    </div>
                </transition-group>
            </draggable>
        </div>
        <div class="row add-new">
            <p>Add new skills</p>
            <input type="text" v-model="newFields.technicalSkills" />
            <button type="btn" class="btn" @click="onAddSkill()">Add</button>
        </div>
        <div class="row footer">
            <button class="btn continue">Next</button>
        </div>
    </div>
</template>

<script>
import draggable from 'vuedraggable';

export default {
    name: "Basics",
    computed: {
        data() {
            return this.$store.state.data
        },
        newFields() {
            return this.$store.state.newFields
        }
    },
    components: {
        draggable
    },
    methods: {
        onAddSkill() {
            
        }
    }
}
</script>

<style lang="scss">
.title {
    margin: 0;
    font-size: 1.85em;
    text-align: left;
}

.subtitle {
    font-size: 1.5em;
    text-align: left;
    margin: 0;
}

.row {
    margin: 0 -10px;

    .list-group {
        width: 100%;

        span {
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            margin: 10px 0;
            flex-wrap: wrap;
        }
    }

    .col {
        .input-containers {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin: 10px;

            input, textarea {
                background: transparent;
                border: 1px solid #1886d1;
                width: calc(100% - 30px);
                padding: 10px 15px;
                font-size: 1em;
                color: #1886d1;
            }
        }

        &.col-3 {
            flex: 0;
            flex-basis: 33.3%;
        }
    }

    &.add-new {
        margin-bottom: 10px;

        p {
            flex-basis: 100%;
            text-align: left;
            margin: 0px 10px 4px;
        }

        input, textarea {
            background: transparent;
            border: 1px solid #1886d1;
            width: calc(100% - 140px);
            padding: 10px 15px;
            font-size: 1em;
            color: #1886d1;
        }

        .btn {
            background: transparent;
            border: 1px solid #1886d1;
            width: 90px;
            padding: 10px 15px;
            font-size: 1em;
            color: #1886d1;
        }
    }

    &.footer {
        text-align: right;
        display: block;

        .btn {
            font-size: 1em;
            padding: 10px 30px;
            background: transparent;
            color: #1886d1;
            border: 1px solid;
            margin: 10px 8px;
        }
    }
}
</style>
