<template>
    <div class="editor">
        <p class="title">What's the best way for employers to contact you?</p>
        <p class="subtitle">We suggest including an email and phone number.</p>
        <div class="row">
            <div class="col">
                <div class="input-containers">
                    <label>Name: </label>
                    <input type="text" v-model="data.basics.name" />
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="input-containers">
                    <label>Email: </label>
                    <input type="text" v-model="data.basics.email" />
                </div>
            </div>
            <div class="col">
                <div class="input-containers">
                    <label>Number: </label>
                    <input type="text" v-model="data.basics.number" />
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="input-containers">
                    <label>Country: </label>
                    <input type="text" v-model="data.basics.country" />
                </div>
            </div>
            <div class="col">
                <div class="input-containers">
                    <label>City: </label>
                    <input type="text" v-model="data.basics.city" />
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="input-containers">
                    <label>Address: </label>
                    <textarea rows="3" v-model="data.basics.address" />
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
