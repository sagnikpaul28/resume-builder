<template>
    <div class="config">
        <div class="row">
            <div class="col">
                <Layout />
            </div>
        </div>
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
    </div>
</template>

<script>
import Layout from '../components/Layout';
import FontSelector from '../components/FontSelector';
import ThemeColors from '../components/ThemeColors';

export default {
    name: "Config",
    components: {
        Layout,
        FontSelector,
        ThemeColors
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
}
</style>
