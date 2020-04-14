<template>
    <div class="main">
        <Calendar />
    </div>
</template>

<script>
import Calendar from 'mpvue-calendar'
import 'mpvue-calendar/src/style.css'
export default {
    name: 'eventsindex',
    components: {
        Calendar
    }
}
</script>

<style lang="scss" scoped>
.main {
    width: 100%;
    height: 100%;
    text-align: center;
}
</style>


