<template>
    <div class="theme-colors">
        <div class="color" @click="onChooseColor($event)" v-for="color in colors" :key="color" :class="[color, {active: color === themeColor}]"></div>
    </div>
</template>

<script>
export default {
    name: "ThemeColors",
    methods: {
        onChooseColor(e) {
            this.$store.dispatch('colorSelect', e.target.className.split(' ')[1]);
        }
    },
    data() {
        return {
            colors: [
                "flamingo", "sea-buckthorn", "corn", "san-marino", "wedgewood", "oxford-blue", "shamrock", "danube", "crown-of-thorns", "deep-sea-green", "crimson", "curious-blue", "driftwood", "irish-coffee", "jungle-green", "daisy-bush", "chathams-blue", "tory-blue", "royal-heath", "cardinal", "big-stone", "orange-roughy", "black", "white"
            ]
        }
    },
    computed: {
        themeColor() {
            return this.$store.state.data.themeColor;
        }
    }
}
</script>

<style lang="scss">
.theme-colors {
    border-radius: 4px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    .color {
        width: 50px;
        margin: 10px 12px;
        height: 50px;
        border-radius: 50%;
        cursor: pointer;

        &.flamingo {
            background: #f04c40;
        }

        &.sea-buckthorn {
            background: #f99e3d;
        }

        &.corn {
            background: #eaaf00;
        }

        &.san-marino {
            background: #3f59a8;
        }

        &.wedgewood {
            background: #479099;
        }

        &.oxford-blue {
            background: #374458;
        }

        &.shamrock {
            background: #2dbcad;
        }

        &.danube {
            background: #4f90cd;
        }

        &.crown-of-thorns {
            background: #7d203f;
        }

        &.deep-sea-green {
            background: #0a5650;
        }

        &.crimson {
            background: #c61436;
        }

        &.curious-blue {
            background: #1886d1;
        }

        &.driftwood {
            background: #b57e43;
        }

        &.irish-coffee {
            background: #6b2929;
        }

        &.jungle-green {
            background: #2aad71;
        }

        &.daisy-bush {
            background: #512b8e;
        }

        &.chathams-blue {
            background: #154677;
        }

        &.tory-blue {
            background: #174dad;
        }

        &.royal-heath {
            background: #9e2b6f;
        }
        
        &.cardinal {
            background: #d11e2f;
        }

        &.big-stone {
            background: #193042;
        }

        &.orange-roughy {
            background: #cc5018;
        }

        &.black {
            background: #000000;
        }

        &.white {
            background: #ffffff;
        }

        &.active {
            transform: scale(1.25);
        }
    }
}
</style>
