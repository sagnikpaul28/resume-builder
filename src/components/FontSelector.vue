<template>
    <div class="font-selector">
        <p class="quicksand" @click="onFontSelect($event)">Quicksand</p>
        <p class="noto-seriff" @click="onFontSelect($event)">Noto Seriff</p>
        <p class="tittilium-web" @click="onFontSelect($event)">Tittilium Web</p>
        <p class="pt-serff" @click="onFontSelect($event)">PT Seriff</p>
        <p class="muli" @click="onFontSelect($event)">Muli</p>
        <p class="lora" @click="onFontSelect($event)">Lora</p>
        <p class="ubuntu" @click="onFontSelect($event)">Ubuntu</p>
        <p class="pt-sans" @click="onFontSelect($event)">PT Sans</p>
        <p class="roboto-slab" @click="onFontSelect($event)">Roboto Slab</p>
        <p class="encode-sans-expanded" @click="onFontSelect($event)">Encode Sans Expanded</p>
        <p class="source-sans-pro" @click="onFontSelect($event)">Source Sans Pro</p>
        <p class="lato" @click="onFontSelect($event)">Lato</p>
        <p class="montserrat" @click="onFontSelect($event)">Montserrat</p>
        <p class="open-sans" @click="onFontSelect($event)">Open Sans</p>
        <p class="noto-sans-hk" @click="onFontSelect($event)">Noto Sans Hk</p>
        <p class="roboto" @click="onFontSelect($event)">Roboto</p>
    </div>
</template>

<script>
export default {
    name: "FontSelector",
    methods: {
        onFontSelect(e) {
            console.log(e.target.className);
        }
    }
}
</script>

<style lang="scss">
.font-selector {
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    left: 120px;
    width: 90%;
    height: 300px;
    max-width: 500px;
    background: #303d46;
    border: 2px solid #1886d1;
    border-radius: 4px;
    padding: 15px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    p {
        width: calc(50% - 50px);
        margin: 5px 10px 5px 40px;
        color: #1886d1;
        font-size: 1rem;
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

        &.selected {
            :before {
                background: #1886d1;
            }
        }
    }
}
</style>
