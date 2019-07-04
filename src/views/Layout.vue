<template>
    <div class="layout">
        <p class="title">This is the layout of your resume</p>
        <p class="subtitle">Drag and drop to reorder the sections</p>
        <div class="select-to">
            <draggable class="list-group" :list="selectedLayoutArray.leftArray" group="people" v-if="!isSingleColumn">
                <transition-group>
                    <p v-for="element in selectedLayoutArray.leftArray" :key="element">
                        {{element}}
                    </p>
                </transition-group>
            </draggable>
            <draggable class="list-group" :list="selectedLayoutArray.rightArray" group="people" v-if="!isSingleColumn">
                <transition-group>
                    <p v-for="element in selectedLayoutArray.rightArray" :key="element">
                        {{element}}
                    </p>
                </transition-group>
            </draggable>
            <draggable class="list-group" :list="selectedLayoutArray.combinedArray" group="people" v-if="isSingleColumn">
                <transition-group>
                    <p v-for="element in selectedLayoutArray.combinedArray" :key="element">
                        {{element}}
                    </p>
                </transition-group>
            </draggable>
        </div>
        <div class="row footer">
            <button class="btn continue" type="button" @click="onButtonBack()">Back</button>
            <button class="btn continue" type="button" @click="onButtonSubmit()">Next</button>
        </div>
    </div>
</template>

<script>
import draggable from 'vuedraggable'
import { constants } from 'crypto';

export default {
    name: "Layout",
    components: {
        draggable
    },
    computed: {
        layoutArray() {
            return this.$store.state.layoutArray
        },
        selectedLayoutArray() {
            return this.$store.state.data.selectedLayoutArray
        },
        isSingleColumn() {
            return this.$store.state.isSingleColumn
        }
    },
    methods: {
        onButtonBack() {
            this.$router.go(-1);
        },
        onButtonSubmit() {
            let payload = {};
            payload.leftArray = this.selectedLayoutArray.leftArray.map(item => {
                return {
                    name: item
                };
            });
            payload.rightArray = this.selectedLayoutArray.rightArray.map(item => {
                return {
                    name: item
                };
            });
            payload.combinedArray = this.selectedLayoutArray.combinedArray.map(item => {
                return {
                    name: item
                };
            });
            fetch('http://localhost:4000/save-details', {
                method: "POST",
                body: JSON.stringify({
                    "email": "sagnikpaul2882@gmail.com",
                    "field": "selectedLayoutArray",
                    "value": JSON.stringify(payload)
                }),
                headers: {
                    'Content-Type':'application/json',
                }
            }).then(res => {
                this.$router.push('config');
            })
        }
    }
}
</script>

<style lang="scss">
.layout {

    .select-to {
        background: #1886d1;
        border-radius: 4px;
        display: flex;
        height: 500px;
        margin: 30px auto;
        width: 350px;

        .list-group {
            flex: 1;

            span {
                display: flex;
                flex-direction: column;
                height: 100%;
                align-items: stretch;
                position: relative;
                justify-content: center;

                p {
                    flex: 1;
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 2px;
                    background: #303d46;
                    border-radius: 4px;
                    color: #1886d1;
                    cursor: grab;

                    &:active {
                        cursor: grabbing;
                    }
                }
            }
        }
    }

    .layout-footer {
        width: 100%;
        border-top: 2px solid #1886d1;
        padding-top: 10px;
        display: flex;
        margin: 10px -10px 5px;
        padding: 15px 0 0;

        .btn {
            flex: 1;
            margin: 0 10px;
            color: #1886d1;
            border: 2px solid;
            background: transparent;
            font-size: 1rem;
            padding: 8px 15px;
            border-radius: 4px;
            cursor: pointer;
            transition: .4s;

            &:hover {
                background: #1886d1;
                color: #202c35;
            }
        }
    }
}
</style>
