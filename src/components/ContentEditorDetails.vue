<template>
    <div class="content-editor-details">
        <p class="go-back" @click="hideContentEditorDetails()">&#8678; Back</p>

        <!-- References -->
        <ContentEditorDetailsReferences v-if="showEditDetails === 'references'" />

    </div>
</template>

<script>
import ContentEditorDetailsReferences from './ContentEditorDetailsReferences';

export default {
    name: "ContentEditorDetails",
    components: {
        ContentEditorDetailsReferences,
        ContentEditorDetailsWork
    },
    computed: {
        showEditDetails() {
            return this.$store.state.showEditDetails
        }
    },
    methods: {
        hideContentEditorDetails() {
            this.$store.dispatch('hideContentEditorDetails');
        }
    }
}
</script>

<style lang="scss">
.content-editor-details {
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    left: 120px;
    height: auto;
    max-height: 90%;
    overflow: scroll;
    width: 400px;
    background: #303d46;
    border: 2px solid #1886d1;
    border-radius: 4px;
    padding: 15px;
    display: flex;
    text-align: left;
    flex-direction: column;

    .go-back {
        color: #1886d1;
        font-weight: bold;
        margin: 0 0 10px;
        text-align: left;
        cursor: pointer;
    }

    > div {
        .input-containers {
            margin-top: 2px;
            padding: 2px 0 0;

            label {
                display: block;
                text-align: left;
                margin-bottom: 2px;
                color: #1886d1;
            }

            input, textarea {
                width: calc(100% - 20px);
                color: #1886d1;
                background: transparent;
                border: 1px solid;
                padding: 8px 10px;
                font-size: 1rem;
                border-radius: 4px;
                margin-bottom: 10px;

                &.add-item {
                    width: calc(100% - 90px);
                    border-radius: 4px 0 0 4px;
                    border-right: 0;
                }
            }

            button {
                background: transparent;
                border: 1px solid;
                color: #1886d1;
                padding: 8px 15px;
                font-size: 1rem;
                border-radius: 0 4px 4px 0;
                cursor: pointer;
                transition: .3s;

                &:hover {
                    background: #1886d1;
                    color: #303d46;
                    border-color: #1886d1;
                }
            }
        }

        .items {
            display: inline-block;
            position: relative;
            color: #1886d1;
            padding: 6px 12px;
            border: 1px solid;
            border-radius: 4px;
            margin: 7px;

            .close {
                position: absolute;
                top: -8px;
                right: -10px;
                line-height: 18px;
                font-size: 1rem;
                border: 1px solid;
                background: #303d46;
                border-radius: 50%;
                height: 20px;
                width: 20px;
                text-align: center;
                font-weight: bold;
                cursor: pointer;
            }

            &.accordion {
                display: block;
                margin: 10px 0;
                cursor: pointer;
                padding: 10px 12px;

                .save {
                    background: transparent;
                    color: #1886d1;
                    border: 1px solid #1886d1;
                    margin: 15px 0px 10px;
                    border-radius: 4px;
                    width: 100%;
                    padding: 8px 15px;
                    font-size: 1rem;
                    transition: .3s;

                    &:hover {
                        color: #303d46;
                        background: #1886d1;
                    }
                }

                .item-accordion-title {
                    position: relative;
                    z-index: 1;
                }

                .expand {
                    transform: none;
                    transition: .3s;
                    position: absolute;
                    right: 10px;
                    top: 7px;
                    z-index: 0;

                    &.expanded {
                        transform: rotate(90deg);
                    }
                }

                .expanded-content {
                    display: none;

                    &.expanded {
                        display: block;
                    }
                }

                .input-containers {
                    border: 0;
                    margin: 0;
                    padding: 0;

                    &:nth-of-type(1) {
                        margin-top: 10px;
                    }
                }
            }
        }
    }
}
</style>
