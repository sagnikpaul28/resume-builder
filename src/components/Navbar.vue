<template>
    <div class="navbar">
        <ul>
            <li>Font</li>
            <li>Theme</li>
            <li>Layout</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Navbar"
}
</script>

<style lang="scss">
.navbar {
    background: #303d46;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999999;

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;

        li {
            color: #1886d1;
            margin: 15px;
            font-weight: 600;
            cursor: pointer;
        }
    }
}
</style>
