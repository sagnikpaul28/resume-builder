<template>
    <div class="editor">
        <p class="title">Themes</p>
        <div class="row themes">
            <div class="theme" v-for="theme in themes" :key="theme" @click="onClickTheme(theme)">
                <p>{{theme}}</p>
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
    name: "Themes",
    data() {
        return {
            themes: [
                'Professional',
                'Creative',
                'Basic',
                'Clean',
                'Everest',
                '2019',
                'Corporate',
                'Minimalist',
                'Advanced',
                'Chicago',
                'Standout',
                'Esteemed'
            ],
            theme: ''
        }
    },
    methods: {
        onClickTheme(value) {
            this.theme = value;
        },
        onButtonBack() {
            this.$router.go(-1);
        },
        onButtonSubmit() {
            fetch('http://localhost:4000/save-details', {
                method: "POST",
                body: JSON.stringify({
                    "email": "sagnikpaul2882@gmail.com",
                    "field": "theme",
                    "value": JSON.stringify(this.theme)
                }),
                headers: {
                    'Content-Type':'application/json',
                }
            }).then((res) => {
                console.log(res);
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

.themes {
    display: flex;
    flex-wrap: wrap;

    .theme {
        flex-basis: 25%;

        p {
            font-size: 1.25rem;
        }
    }
}

.footer {
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
    }
}
</style>
