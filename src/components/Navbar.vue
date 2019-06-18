<template>
    <div class="navbar">
        <ul>
            <li @click="onClicked('font')">Font</li>
            <li @click="onClicked('theme')">Theme</li>
            <li @click="onClicked('layout')">Layout</li>
            <li @click="onClicked('content')">Content</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Navbar",
    methods: {
        onClicked(item) {
            this.$store.dispatch('onNavbatItemClicked', item);
        }
    }
}
</script>

<style lang="scss">
.navbar {
    background: #303d46;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    z-index: 999999;
    border-bottom: 1px solid #1886d1;
    display: flex;
    justify-content: center;
    width: 100px;
    border-right: 1px solid #1886d1;

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        li {
            color: #1886d1;
            margin: 15px;
            font-weight: 600;
            cursor: pointer;
        }
    }
}
</style>
