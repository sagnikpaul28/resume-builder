<template>
    <div class="theme-colors">
        <div class="color flamingo" @click="onChooseColor($event)"></div>
        <div class="color sea-buckthorn" @click="onChooseColor($event)"></div>
        <div class="color corn" @click="onChooseColor($event)"></div>
        <div class="color san-marino" @click="onChooseColor($event)"></div>
        <div class="color wedgewood" @click="onChooseColor($event)"></div>
        <div class="color oxford-blue" @click="onChooseColor($event)"></div>
        <div class="color shamrock" @click="onChooseColor($event)"></div>
        <div class="color danube" @click="onChooseColor($event)"></div>
        <div class="color crown-of-thorns" @click="onChooseColor($event)"></div>
        <div class="color deep-sea-green" @click="onChooseColor($event)"></div>
        <div class="color crimson" @click="onChooseColor($event)"></div>
        <div class="color curious-blue" @click="onChooseColor($event)"></div>
        <div class="color driftwood" @click="onChooseColor($event)"></div>
        <div class="color irish-coffee" @click="onChooseColor($event)"></div>
        <div class="color jungle-green" @click="onChooseColor($event)"></div>
        <div class="color daisy-bush" @click="onChooseColor($event)"></div>
        <div class="color chathams-blue" @click="onChooseColor($event)"></div>
        <div class="color tory-blue" @click="onChooseColor($event)"></div>
        <div class="color royal-heath" @click="onChooseColor($event)"></div>
        <div class="color cardinal" @click="onChooseColor($event)"></div>
        <div class="color big-stone" @click="onChooseColor($event)"></div>
        <div class="color orange-roughy" @click="onChooseColor($event)"></div>
        <div class="color black" @click="onChooseColor($event)"></div>
        <div class="color white" @click="onChooseColor($event)"></div>
    </div>
</template>

<script>
export default {
    name: "ThemeColors",
    methods: {
        onChooseColor(e) {
            console.log(e.target.className.split(' ')[1]);
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
    }
}
</style>
