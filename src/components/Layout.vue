<template>
    <div class="layout">
        <div class="left">
            <p>Drag and drop to add and remove components</p>
            <div class="select-from">
                <draggable class="list-group" :list="layoutArray" group="people"> 
                    <transition-group>
                        <p v-for="element in layoutArray" :key="element.id">
                            {{element.name}}
                        </p>
                    </transition-group>
                </draggable>
            </div>
        </div>
        <div class="right">
            <div class="select-to">
                <draggable class="list-group" :list="selectedLayoutArray.leftArray" group="people" v-if="!isSingleColumn">
                    <transition-group>
                        <p v-for="element in selectedLayoutArray.leftArray" :key="element.id">
                            {{element.name}}
                        </p>
                    </transition-group>
                </draggable>
                <draggable class="list-group" :list="selectedLayoutArray.rightArray" group="people" v-if="!isSingleColumn">
                    <transition-group>
                        <p v-for="element in selectedLayoutArray.rightArray" :key="element.id">
                            {{element.name}}
                        </p>
                    </transition-group>
                </draggable>
                <draggable class="list-group" :list="selectedLayoutArray.combinedArray" group="people" v-if="isSingleColumn">
                    <transition-group>
                        <p v-for="element in selectedLayoutArray.combinedArray" :key="element.id">
                            {{element.name}}
                        </p>
                    </transition-group>
                </draggable>
            </div>
            <p :class="{selected: isSingleColumn}" class="singleColumnCheck" @click="toggleSingleColumnCheck">Use single Columnn</p>
        </div>
        <div class="layout-footer">
            <button class="btn save">Save</button>
            <button class="btn cancel">Cancel</button>
        </div>
    </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
    name: "Layout",
    components: {
        draggable
    },
    data() {
        return {
            layoutArray: [
                {
                    id: 1,
                    name: "Awards"
                }, {
                    id: 2,
                    name: "Causes"
                }, {
                    id: 8,
                    name: "Conferences"
                }, {
                    id: 9,
                    name: "Courses"
                }, {
                    id: 14,
                    name: "Publications"
                }, {
                    id: 15,
                    name: "References"
                }, {
                    id: 16,
                    name: "Soft Skills"
                }, {
                    id: 17,
                    name: "Technical Skills"
                }, {
                    id: 18,
                    name: "Volunteer"
                }
            ],
            selectedLayoutArray: {
                leftArray: [
                    {
                        id: 6,
                        name: "Skills"
                    }, {
                        id: 12,
                        name: "Languages"
                    }, {
                        id: 10,
                        name: "Interests"
                    }
                ], 
                rightArray: [
                    {
                        id: 4,
                        name: "Education"
                    }, {
                        id: 7,
                        name: "Projects"
                    }, {
                        id: 11,
                        name: "Work"
                    }, {
                        id: 5,
                        name: "Achievements"
                    }, {
                        id: 3,
                        name: "Certificates"
                    }
                ],
                combinedArray: []
            },
            isSingleColumn: false
        }
    },
    methods: {
        toggleSingleColumnCheck() {
            this.isSingleColumn = !this.isSingleColumn;
            if (this.isSingleColumn) {
                this.selectedLayoutArray.combinedArray = [...this.selectedLayoutArray.leftArray, ...this.selectedLayoutArray.rightArray]
            }else {
                this.selectedLayoutArray.leftArray = this.selectedLayoutArray.combinedArray.slice(0, (this.selectedLayoutArray.combinedArray.length + 1)/ 3);
                this.selectedLayoutArray.rightArray = this.selectedLayoutArray.combinedArray.slice((this.selectedLayoutArray.combinedArray.length / 3 + 1), this.selectedLayoutArray.combinedArray.length);
            }
        }
        
    }
}
</script>

<style lang="scss">
.layout {
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    left: 120px;
    height: auto;
    background: #303d46;
    border-right: 2px solid #1886d1;
    border-radius: 4px;
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .left {

        > p {
            margin: 10px 0;
            color: #1886d1;
            font-weight: bold;
            text-align: left;
        }

        .select-from {
            span {
                display: flex;
                flex-wrap: wrap;
                padding: 5px;
                background: #202c35;
                border-radius: 4px;
                width: 400px;

                p {
                    flex-basis: calc(100%/3 - 12px);
                    color: #1886d1;
                    padding: 5px 0px;
                    margin: 5px 5px;
                    border: 1px solid;
                    border-radius: 4px;
                    cursor: grab;

                    &:active {
                        cursor: grabbing;
                    }
                }
            }
        }
    }

    .right{
        width: 100%;
        
        > p {
            margin: 0px 0 10px;
            color: #1886d1;
            font-weight: bold;

            &.singleColumnCheck {
                display: block;
                text-align: left;
                margin-left: 35px;
                width: calc(100% - 50px);
                position: relative;

                &:before {
                    content: "";
                    position: absolute;
                    left: -30px;
                    top: -1px;
                    width: 18px;
                    height: 18px;
                    border-radius: 50%;
                    border: 3px solid;
                }

                &.selected {
                    &:before {
                        background: #1886d1;
                    }
                }
            }
        }

        .select-to {
            background: #1886d1;
            border-radius: 4px;
            display: flex;
            height: 500px;
            margin: 30px 0;

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
