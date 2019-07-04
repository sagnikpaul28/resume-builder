<template>
    <div class="font-selector">
        <p v-for="item in fonts" :key="item.id" :class="[item.id, {active: item.id === font}]" @click="onFontSelect($event)">{{item.name}}</p>
    </div>
</template>

<script>
export default {
    name: "FontSelector",
    methods: {
        onFontSelect(e) {
            this.$store.dispatch('fontSelect', e.target.className.split(' ')[0]);
        }
    },
    computed: {
        font() {
            return this.$store.state.data.font
        }
    },
    data() {
        return {
            fonts: [{
                id: "quicksand",
                name: "Quicksand"
            }, {
                id: "noto-seriff",
                name: "Noto Seriff"
            }, {
                id: "tittilium-web",
                name: "Tittilium Web"
            }, {
                id: "pt-serff",
                name: "PT Seriff"
            }, {
                id: "muli",
                name: "Muli"
            }, {
                id: "lora",
                name: "Lora"
            }, {
                id: "ubuntu",
                name: "Ubuntu"
            }, {
                id: "pt-sans",
                name: "PT Sans"
            }, {
                id: "roboto-slab",
                name: "Roboto Slab"
            }, {
                id: "encode-sans-expanded",
                name: "Encode Sans"
            }, {
                id: "source-sans-pro",
                name: "Source Sans"
            }, {
                id: "lato",
                name: "Lato"
            }, {
                id: "montserrat",
                name: "Montserrat"
            }, {
                id: "open-sans",
                name: "Open Sans"
            }, {
                id: "noto-sans-hk",
                name: "Noto Sans"
            }, {
                id: "roboto",
                name: "Roboto"
            }, ]
        }
    }
}
</script>

<style lang="scss">
.font-selector {
    height: 300px;
    background: #303d46;
    border-radius: 4px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    p {
        width: calc(50% - 50px);
        margin: 5px 10px 5px 40px;
        color: #1886d1;
        font-size: 1.25em;
        text-align: left;
        position: relative;

        &:before {
            content: "";
            position: absolute;
            top: 3px;
            left: -30px;
            height: 15px;
            width: 15px;
            border-radius: 50%;
            border: 2.5px solid;
        }

        &.roboto {
            font-family: 'Roboto', sans-serif;
        }

        &.noto-sans {
            font-family: 'Noto Sans HK', sans-serif;
        }

        &.open-sans {
            font-family: 'Open Sans', sans-serif;
        }

        &.montserrat {
            font-family: 'Montserrat', sans-serif;
        }

        &.lato {
            font-family: 'Lato', sans-serif;
        }

        &.source-sans-pro {
            font-family: 'Source Sans Pro', sans-serif;
        }

        &.encode-sans-expanded {
            font-family: 'Encode Sans Expanded', sans-serif;
        }

        &.roboto-slab {
            font-family: 'Roboto Slab', serif;
        }

        &.pt-sans {
            font-family: 'PT Sans', sans-serif;
        }

        &.ubuntu {
            font-family: 'Ubuntu', sans-serif;
        }

        &.lora {
            font-family: 'Lora', serif;
        }

        &.muli {
            font-family: 'Muli', sans-serif;
        }

        &.pt-serif {
            font-family: 'PT Serif', serif;
        }

        &.titillium-web {
            font-family: 'Titillium Web', sans-serif;
        }

        &.noto-serif {
            font-family: 'Noto Serif', serif;
        }

        &.quicksand {
            font-family: 'Quicksand', sans-serif;
        }

        &.active {
            &:before {
                background: #1886d1;
            }
        }
    }
}
</style>
