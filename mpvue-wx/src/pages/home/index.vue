<template>
    <div class="home">
        <div class="swiper"></div>
        <div class="dynamic">
            <div class="content">
                <div class="first">何时会醉</div>
                <div class="second">2020-4-21 21:23:01</div>
                <div class="third">哈哈   吼吼吼   嘿嘿嘿</div>
            </div>
            <div class="content">
                <div class="first">香格里拉皇子</div>
                <div class="second">2020-4-21 21:23:01</div>
                <div class="third">哈哈   吼吼吼   嘿嘿嘿</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'homeindex'
}
</script>

<style lang="scss" scoped>
.home {
    width: 100vw;
    height: 100vh;
    display: block;

    .swiper {
        width: 100%;
        height: 30%;
        background-color: palegoldenrod;
        text-align: center;
    }

    .dynamic {
        margin-top: 10px;
        width: 100%;
        height: calc(70% - 10px);

        .content {
            margin: 10px;
            width: calc(100% - 20px);
            border-top: 1px solid palegoldenrod;

            .first {
                font-weight: 300;
            }

            .second {
                font-size: 13px;
                color: #999;
            }
            
            .third {
                margin-top: 5px;
                font-size: 15px;
            }
        }
    }
}
</style>

