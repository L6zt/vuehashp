<template>
    <footer class="app-footer-container">
        <section class="footer-home-icon">
            <router-link to="/"></router-link>
        </section>
        <section class="footer-phone-icon">
            <router-link to=""></router-link>
        </section>
        <section class="footer-user-icon">
            <router-link to=""></router-link>
        </section>
    </footer>
</template>
<style lang="scss" scoped>
    .app-footer-container {
       position: fixed;
       width: 750px;
       bottom: 0;
       left: 50%;
       transform: translate(-50%, 0);
       height: 120px;
       background: red;
       display: flex;
       padding: 0 20px;
       justify-content: space-between;
       section {
           display: flex;
           flex: 1;
           justify-content: center;
           align-items: center;
           a {
               display: block;
               width: 120px;
               height: 120px;
           }
           &.footer-home-icon {
               a {
                   background: url(../../assert/img/nav/index.png) center center no-repeat;
                   background-size: 64px 64px;
               }
           }
           &.footer-phone-icon {
               a {
                   background: url(../../assert/img/nav/phone.png) center center no-repeat;
                   background-size: 64px 64px;
               }
           }
           &.footer-user-icon {
               a {
                   background: url(../../assert/img/nav/user.png) center center no-repeat;
                   background-size: 64px 64px;
               }
           }
       }
    }
</style>