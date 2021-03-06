<template>
    <div class="editor">
        <p class="title">Publications</p>
        <p class="subtitle">Drag and drop to reorder</p>

        <draggable class="list-group" :list="publications" group="people"> 
            <transition-group>
                <div class="row" v-for="(publication, index) in publications" :key="index">
                    <div class="col">
                        <div class="content">
                            {{publication.title}}
                            <div class="edit" @click="openModal(index)">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="#1886d1"><path fill-rule="evenodd" d="M15.26 3.86l-1.52 1.52-3.12-3.12L12.14.74c.16-.16.357-.24.59-.24.233 0 .43.08.59.24l1.94 1.94c.16.16.24.357.24.59 0 .233-.08.43-.24.59zM.5 12.38l9.22-9.22 3.12 3.12-9.22 9.22H.5v-3.12z"></path></svg>
                            </div>
                            <div class="delete" @click="deleteItem(index)">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 12 16" style="overflow: hidden" fill="#1886d1"><path fill-rule="evenodd" d="M11.935 1.32V3H.295V1.32h2.9l.86-.82h4.14l.86.82h2.88zm-10.82 12.5v-10h10v10c0 .453-.167.847-.5 1.18-.333.333-.727.5-1.18.5h-6.64c-.453 0-.847-.167-1.18-.5a1.614 1.614 0 0 1-.5-1.18z"></path></svg>
                            </div>
                        </div>
                    </div>
                    <div class="popup" :class="{'show': publication.showModal}">
                        <div class="row">
                            <div class="col">
                                <div class="input-containers">
                                    <label>Name:</label>
                                    <input type="text" v-model="publication.title" />
                                </div>
                            </div>
                            <div class="col">
                                <div class="input-containers">
                                    <label>Type:</label>
                                    <input type="text" v-model="publication.type" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="input-containers">
                                    <label>Date:</label>
                                    <input type="text" v-model="publication.date" />
                                </div>
                            </div>
                            <div class="col">
                                <div class="input-containers">
                                    <label>Authors:</label>
                                    <input type="text" v-model="publication.authors" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="input-containers">
                                    <label>Description: </label>
                                    <textarea rows="4" v-model="publication.description" />
                                </div>
                            </div>
                        </div>
                        <div class="row footer">
                            <button class="btn close" @click="closeModal(index)">Save</button>
                        </div>
                    </div>
                </div>
            </transition-group>
        </draggable>

        <div class="row footer">
            <button class="btn add-new" @click="toggleNewItemModal()"><span>+</span> Add publications</button>
            <button class="btn continue" type="button" @click="onButtonBack()">Back</button>
            <button class="btn continue" type="button" @click="onButtonSubmit()">Next</button>
        </div>

        <div class="popup" :class="{'show': showNewItemAddModal}">
            <div class="row">
                <div class="col">
                    <div class="input-containers">
                        <label>Name:</label>
                        <input type="text" v-model="newFields.title" />
                    </div>
                </div>
                <div class="col">
                    <div class="input-containers">
                        <label>Type:</label>
                        <input type="text" v-model="newFields.type" />
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="input-containers">
                        <label>Date:</label>
                        <input type="text" v-model="newFields.date" />
                    </div>
                </div>
                <div class="col">
                    <div class="input-containers">
                        <label>Authors:</label>
                        <input type="text" v-model="newFields.authors" />
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="input-containers">
                        <label>Description: </label>
                        <textarea rows="4" v-model="newFields.description" />
                    </div>
                </div>
            </div>
            <div class="row footer">
                <button class="btn add" @click="addNewPublication()">Add</button> 
                <button class="btn close" @click="toggleNewItemModal()">Cancel</button>
            </div>
        </div>
    </div>
</template>

<script>
import draggable from 'vuedraggable';

export default {
    name: "Publications",
    components: {
        draggable
    },
    data() {
        return {
            showNewItemAddModal: false
        }
    },
    computed: {
        publications() {
            return this.$store.state.data.publications
        },
        newFields() {
            return this.$store.state.newFields.publications
        }
    },
    methods: {
        openModal(index) {
            this.$store.dispatch('openModal', {
                type: 'publications', 
                index
            });
        },
        closeModal(index) {
            this.$store.dispatch('closeModal', {
                type: 'publications', 
                index
            });
        },
        deleteItem(index) {
            this.$store.dispatch('deleteItem', {
                type: 'publications', 
                index
            });
        },
        toggleNewItemModal() {
            this.showNewItemAddModal = !this.showNewItemAddModal;
        },
        addNewPublication() {
            this.$store.dispatch('addDetails', {
                type: "publications",
                value: {
                    title: this.newFields.title,
                    type: this.newFields.type,
                    date: this.newFields.date,
                    authors: this.newFields.authors,
                    description: this.newFields.description,
                }
            });

            this.newFields.title = '';
            this.newFields.type = '';
            this.newFields.date = '';
            this.newFields.authors = '';
            this.newFields.description = '';

            this.toggleNewItemModal();
        },
        onButtonBack() {
            this.$router.go(-1);
        },
        onButtonSubmit() {
            fetch('http://localhost:4000/save-details', {
                method: "POST",
                body: JSON.stringify({
                    "email": "sagnikpaul2882@gmail.com",
                    "field": "publications",
                    "value": JSON.stringify(this.publications)
                }),
                headers: {
                    'Content-Type':'application/json',
                }
            }).then(() => {
                this.$store.dispatch('afterLayoutChooseNextState', 'publications').then(() => {
                    let value = this.$store.state.nextState;
                    this.$store.dispatch('resetNextState');
                    this.$router.push({name: value});
                });
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
    margin: 0;
}

.row {
    margin: 0 -10px;

    .col {
        .content {
            border: 1px solid #1886d1;
            width: calc(100% - 95px);
            padding: 10px 60px 10px 15px;
            font-size: 1.2em;
            margin: 15px 10px 5px;
            position: relative;
            text-align: left;

            .edit {
                position: absolute;
                right: 40px;
                top: 50%;
                transform: translateY(-50%);
                cursor: pointer;
            }

            .delete {
                position: absolute;
                right: 13px;
                top: 50%;
                transform: translateY(-50%);
                cursor: pointer;
            }
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
            cursor: pointer;

            &.add-new {
                width: calc(100% - 20px);
                border: 2px dashed;
                padding: 20px 30px;
                margin: 20px 8px;
                transition: 1s;

                &:hover {
                    border: 2px solid;
                }

                span {
                    width: 20px;
                    height: 20px;
                    display: inline-block;
                    border-radius: 50%;
                    border: 1px solid;
                    position: relative;
                    top: -1px;
                    left: -2px;
                }
            }
        }
    }
}

.popup {
    display: none;
    position: fixed;
    height: 100%;
    width: 100%;
    background: #303d46ee;
    top: 0;
    left: 0;
    flex-direction: column;
    z-index: 1;
    justify-content: center;

    .row {
        margin: 0 auto;
        max-width: 800px;
        width: 100%;

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
    }

    &.show {
        display: flex;
    }
}
</style>
