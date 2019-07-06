<template>
    <div class="layout">
        <p class="title">This is the layout of your resume</p>
        <p class="subtitle">Drag and drop to reorder the sections</p>
        <div class="select-to">
            <draggable class="list-group" :list="selectedLayoutArray.leftArray" group="people" v-if="!isSingleColumn">
                <transition-group>
                    <p v-for="element in selectedLayoutArray.leftArray" :key="typeof element === object ? element._id : element">
                        {{typeof element === 'object' ? element.name : element}}
                    </p>
                </transition-group>
            </draggable>
            <draggable class="list-group" :list="selectedLayoutArray.rightArray" group="people" v-if="!isSingleColumn">
                <transition-group>
                    <p v-for="element in selectedLayoutArray.rightArray" :key="typeof element === object ? element._id : element">
                        {{typeof element === 'object' ? element.name : element}}
                    </p>
                </transition-group>
            </draggable>
            <draggable class="list-group" :list="selectedLayoutArray.combinedArray" group="people" v-if="isSingleColumn">
                <transition-group>
                    <p v-for="element in selectedLayoutArray.combinedArray" :key="typeof element === object ? element._id : element">
                        {{typeof element === 'object' ? element.name : element}}
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
        },
        combinedArray() {
            return this.$store.state.data.selectedLayoutArray.combinedArray;
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
                console.log(res);
                this.$router.push('customize');
            })
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
    margin: 0 0 10px;
}

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

    .row {
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
}
</style>
