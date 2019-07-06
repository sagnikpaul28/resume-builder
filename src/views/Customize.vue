<template>
    <div class="config">
        <div class="row">
            <div class="col">
                <p class="title">Select You Font</p>
                <FontSelector />
            </div>
            <div class="col">
                <p class="title">Select Your Accent Color</p>
                <ThemeColors />
            </div>
        </div>
        <div class="row footer">
            <button class="btn continue" type="button" @click="onButtonBack()">Back</button>
            <button class="btn continue" type="button" @click="onButtonSubmit()">Next</button>
        </div>
    </div>
</template>

<script>
import FontSelector from '../components/FontSelector';
import ThemeColors from '../components/ThemeColors';

export default {
    name: "Customize",
    components: {
        FontSelector,
        ThemeColors
    },
    computed: {
        font() {
            return this.$store.state.data.font;
        },
        themeColor() {
            return this.$store.state.data.themeColor;
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
                    "field": "font",
                    "value": JSON.stringify(this.font)
                }),
                headers: {
                    'Content-Type':'application/json',
                }
            }).then(res => {
                console.log(res);
                fetch('http://localhost:4000/save-details', {
                    method: "POST",
                    body: JSON.stringify({
                        "email": "sagnikpaul2882@gmail.com",
                        "field": "themeColor",
                        "value": JSON.stringify(this.themeColor)
                    }),
                    headers: {
                        'Content-Type':'application/json',
                    }
                }).then(res => {
                    console.log(res);
                    this.$router.push('skills');
                })
            })
        }
    }
}
</script>

<style lang="scss">
.config {
    .col {
        padding: 15px;
        margin: 10px;

        .title {
            font-size: 1.5em;
            margin: 0 0 10px;
            font-weight: 500;
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
