<template>
    <div class="editor">
        <p class="title">Social Media</p>
        <p class="subtitle">Your social media handles for recruiters to know more about you</p>
        <div class="row">
            <div class="col">
                <div class="input-containers">
                    <label>Facebook: </label>
                    <input type="text" v-model="data.socials.facebook" />
                </div>
            </div>
            <div class="col">
                <div class="input-containers">
                    <label>Twitter: </label>
                    <input type="text" v-model="data.socials.twitter" />
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="input-containers">
                    <label>LinkedIn: </label>
                    <input type="text" v-model="data.socials.linkedin" />
                </div>
            </div>
            <div class="col">
                <div class="input-containers">
                    <label>Github: </label>
                    <input type="text" v-model="data.socials.github" />
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="input-containers">
                    <label>Stack Overflow: </label>
                    <input type="text" v-model="data.socials.stackoverflow" />
                </div>
            </div>
            <div class="col">
                <div class="input-containers">
                    <label>Instagram: </label>
                    <input type="text" v-model="data.socials.instagram" />
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="input-containers">
                    <label>Medium: </label>
                    <input type="text" v-model="data.socials.medium" />
                </div>
            </div>
            <div class="col">
                <div class="input-containers">
                    <label>Quora: </label>
                    <input type="text" v-model="data.socials.quora" />
                </div>
            </div>
        </div>
        <div class="row footer">
            <button class="btn continue" type="button" @click="onButtonBack()">Back</button>
            <button class="btn continue" type="button" @click="onButtonSubmit()">Next</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "SocialMedia",
    computed: {
        data() {
            return this.$store.state.data
        }
    },
    methods: {
        onButtonBack() {
            this.$router.go(-1);
        },
        onButtonSubmit() {
            fetch('http://localhost:4000/save-details', {
                method: "POST",
                body: JSON.stringify({
                    "email": "sagnikpaul2882@gmail.com",
                    "field": "socials",
                    "value": JSON.stringify(this.data.socials)
                }),
                headers: {
                    'Content-Type':'application/json',
                }
            }).then(() => {
                this.$store.dispatch('afterLayoutChooseNextState', 'social-media').then(() => {
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
