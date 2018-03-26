<template>
    <div class="web-app-container">
        <router-view></router-view>
    </div>
</template>
<style lang="scss">
    @import "./assert/scss/_reset.scss";
    @import "./assert/scss/_mian.scss";
    html {
        width: 100%;
        height: 100%;
    }
    body {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: auto;
    }
</style>