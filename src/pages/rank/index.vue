<template>
    <div class="rank-list-container container">
        <section class="rank-item-card-con clear-fix">
            <item-card
                    v-for="item, index  in rankIndex.list"
                    :key="index"
                    :msg="item"
                    @click="addRankScore(index)"
            >
            </item-card>
        </section>
        <section>
            <button @click="getMoreRankList">click</button>
            <router-link to="/404">404</router-link>
        </section>
    </div>
</template>
<script>
    // json
    import {post} from '../../assert/js/ajax.js'
    import ItemCard from '../../components/rank/itemCard.vue'
    import '../../mock/mock.js'
    import {mapState} from 'vuex'
    export default {
    	name: 'RankList',
    	data () {
            return {
            	condition: {
		            pageSize: 10,
		            currentPage: 1,
	            }
            }
        },
        computed: {
            ...mapState({
                rankIndex: state => state.rank.rankIndex
            })
        },
        mounted () {
            this.handleClick()
        },
        methods: {
    		addRankScore (index) {
    			this.$store.dispatch('rank/addRankScore',{
    				index
                }).then(data => {
                	console.log(data)
                })
            },
            native (e) {
    			console.log(e)
            },
            getMoreRankList () {
	            this.condition.currentPage ++
                this.handleClick()
            },
	        handleClick () {
    			const {condition} = this
                this.$store.dispatch('rank/getRankList', condition)
                    .catch(e => {

                    })
            },
        },
    	components: {ItemCard},
	    beforeRouteLeave (to, from, next) {
		    const {path} = to
            if (/\/rank\/.+/.test(path)) {
            } else {
		    	this.$destroy()
            }
            next()
	    }
    }
</script>
<style lang="scss" scoped="">
    .rank-item-card-con {
        padding: 0 30px;
        button {

        }
    }
</style>