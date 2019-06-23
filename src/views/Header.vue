<template>
    <div class="editor">
        <p class="title">A little more about yourself</p>
        <p class="subtitle">A good summary helps you to stand out from the rest.</p>
        <div class="row">
            <div class="col">
                <div class="input-containers">
                    <label>Title: </label>
                    <input type="text" v-model="data.intro.title" />
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="input-containers">
                    <label>Professional Summary: </label>
                    <textarea rows="4" v-model="data.intro.summary" />
                </div>
            </div>
        </div>
        <div class="row footer">
            <button class="btn continue">Next</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Basics",
    computed: {
        data() {
            return this.$store.state.data
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
