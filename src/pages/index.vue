<template>
   <div class="index-page-container">
       <app-nav></app-nav>
       <keep-alive include="RankList">
           <router-view class="router-view-container"></router-view>
       </keep-alive>
       <app-footer></app-footer>
   </div>
</template>
<script>
    import appNav from '../components/layout/appNav.vue'
    import appFooter from '../components/layout/appFooter.vue'
    export default {
        components: {
        	appNav, appFooter
        }
    }
</script>
<style lang="scss">
    .router-view-container {
        padding: 80px 0 120px 0;
    }
</style>