<template>
    <div class="center">
        <button @click="goToPath">个人中心</button>
    </div>
</template>

<script>
export default {
    name: 'centerindex',
    data() {
        return {}
    },
    methods: {
        goToPath() {
            this.$router.push({
                path: '/pages/home/index'
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.center {
    widows: 100%;
    height: 100%;
    text-align: center;
}
</style>


