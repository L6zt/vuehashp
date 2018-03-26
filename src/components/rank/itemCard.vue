<template>
    <router-link class="rank-item-card" :to="`/rank/${encodeURIComponent(msg.name)}`">
        <h3>
            {{msg.name}}
        </h3>
        <p>
            {{msg.desc}}
        </p>
        <p>{{msg.score}}</p>
        <div>
            <button @click.prevent="handleClick">投票</button>
        </div>
    </router-link>
</template>
<script>
    export default {
        props: {
        	msg: {
        		type: Object,
                required: true
            }
        },
        methods: {
        	handleClick () {
        		this.$emit('click')
            }
        }
    }
</script>
<style scoped lang="scss">
    .rank-item-card {
        float: left;
        width: 50%;
        padding: 20px;
        // link、visited、hover、active
        &:link {
            color: #ccc;
        }
        /*&:visited {*/
            /*color: yellow;*/
        /*}*/
        /*&:active {*/
            /*color: red;*/
        /*}*/
        h3 {
            font-size: 32px;
            line-height: 1;
        }
        button {
            font-size: 32px;
        }
        h3 {
            margin: 1px; /*px*/
        }
    }
</style>