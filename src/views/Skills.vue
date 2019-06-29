<template>
    <div class="editor">
        <p class="title">Skills</p>
        <p class="subtitle">Drag and drop to reorder your skills</p>
        <div class="row">
            <draggable class="list-group" :list="data.skills" group="people"> 
                <transition-group>
                    <div class="col col-3" v-for="(skill, index) in data.skills" :key="index">
                        <div class="input-containers">
                            <input type="text" :value="skill.name" />
                            <span class="delete" @click="deleteItem(index)">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 12 16" style="overflow: hidden" fill="#1886d1"><path fill-rule="evenodd" d="M11.935 1.32V3H.295V1.32h2.9l.86-.82h4.14l.86.82h2.88zm-10.82 12.5v-10h10v10c0 .453-.167.847-.5 1.18-.333.333-.727.5-1.18.5h-6.64c-.453 0-.847-.167-1.18-.5a1.614 1.614 0 0 1-.5-1.18z"></path></svg>
                            </span>
                        </div>
                    </div>
                </transition-group>
            </draggable>
        </div>
        <div class="row add-new">
            <p>Add new skills</p>
            <input type="text" v-model="newFields.skills" />
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
            this.$store.dispatch('addDetails', {
                type: 'skills',
                value: {
                    name: this.newFields.skills
                }
            });
            this.newFields.skills = '';
        },
        deleteItem(index) {
            this.$store.dispatch('deleteItem', {
                type: 'skills',
                index
            });
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
            position: relative;

            input, textarea {
                background: transparent;
                border: 1px solid #1886d1;
                width: calc(100% - 30px);
                padding: 10px 15px;
                font-size: 1em;
                color: #1886d1;
            }

            .delete {
                position: absolute;
                top: 50%;
                right: 5px;
                transform: translateY(-50%);
                margin: 0;
                cursor: pointer;
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
            padding: 15px;
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
