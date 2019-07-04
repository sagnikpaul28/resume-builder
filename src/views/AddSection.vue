<template>
    <div class="editor">
        <p class="title">Add More Sections</p>
        <p class="subtitle">These sections are optional</p>

        <div class="row">
            <div class="col col-2" v-for="item in array" :key="item">
                <input type="checkbox" v-model="selectedArray" :value="item">
                {{item}}
            </div>
        </div>

        <div class="row footer">
            <button class="btn continue" type="button" @click="onButtonBack()">Prev</button>
            <button class="btn continue" type="button" @click="onButtonSubmit()">Next</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "AddSection",
    data() {
        return {
            array: [
                "Achievements",
                "Awards",
                "Certificates",
                "Conferences",
                "Courses",
                "Interests",
                "Languages",
                "Projects",
                "Publications",
                "References",
                "Social Media",
                "Soft Skills",
                "Technical Skills",
                "Volunteer Experience",
                "Work Experience"
            ]
        }
    },
    computed: {
        selectedArray: {
            get() {
                return this.$store.state.selectedArray
            },
            set(value) {
                this.$store.state.selectedArray = value;
            }
        }
    },
    methods: {
        onButtonBack() {
            this.$router.go(-1);
        },
        onButtonSubmit() {
            this.$store.dispatch('onComponentsSelect');
            this.$router.push('layout');
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

.row {
    margin: 0 -10px;
    display: flex;
    flex-wrap: wrap;

    .col {
        &.col-2 {
            margin: 5px 10px;
            flex-basis: calc(50% - 20px);
            text-align: left;
            font-size: 1.3em;
            display: flex;
            align-items: center;

            input {
                transform: translateY(-2px);
                margin-right: 10px;
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
