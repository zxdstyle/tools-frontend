<template>
    <div class="outer-wrapper">
        <div class="inner animated lightSpeedInLeft">
            <div class="four-wrapper">
                <div class="leg-1"></div>
                <div class="leg-2"></div>
                <div class="leg-3"></div>
            </div>

            <div class="zero-wrapper">
                <div class="zero-wrapper__middle"></div>
            </div>

            <div class="four-wrapper">
                <div class="leg-1"></div>
                <div class="leg-2"></div>
                <div class="leg-3"></div>
            </div>
        </div>

        <h1>Page not found</h1>

        <div class="w-100 text-center mt-5">
            <a-button @click="$router.push({ path: '/' })" type="primary">返回首页</a-button>
            <a-button @click="$router.back()" type="info" class="ml-5">上一页</a-button>
        </div>
    </div>
</template>

<script>
export default {
    name: "404"
}
</script>

<style lang="less" scoped>
@bgColor: #3a3361;
@textColor: #d6c7bc;
@color1: #b38ca5;
@color2: #d7949c;
@color3: #d76f74;

@digitWidth: 200px;
@digitHeight: 260px;

@legHeight: @digitHeight / 4;

// =========

.gradient(@direction) {
    background: linear-gradient(@direction, @color1 0%, @color1 20%, @color2 50%, @color3 100%);
}

// =========

body {
    background-color: @bgColor;
}

h1 {
    font-family: "Lato", sans-serif;
    text-transform: uppercase;
    color: @textColor;
    font-weight: 700;
    text-align: center;
}

.outer-wrapper {
    padding-top: 10%;
    width: 100vw;
    height: 100vh;

    @media (max-width: 767px) {
        padding-top: 5%;
    }

    .inner {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        white-space: nowrap;
    }
}

// =========

.four-wrapper {
    position: relative;
    width: @digitWidth;
    height: @digitHeight;
    margin: 12px;

    .leg-1 {
        .gradient(to right);
        width: 210px;
        height: @legHeight;
        overflow: hidden;
        position: absolute;
        top: 44px;
        left: 0;
        border-radius: 35px;
        transform-origin: 50% 100%;
        transform: rotate(-50deg);
        box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
        z-index: 3;
    }

    .leg-2 {
        .gradient(to right);
        width: 100%;
        height: @legHeight;
        overflow: hidden;
        position: absolute;
        top: 113px;
        left: 0;
        border-radius: 35px;
        z-index: 1;

        &::before,
        &::after {
            content: "";
            display: block;
            position: absolute;
            background-color: rgba(0, 0, 0, 0.1);
        }

        &::before {
            width: 30px;
            height: 80px;
            transform: rotate(50deg);
            left: 50px;
            top: -15px;
        }

        &::after {
            width: 30px;
            height: 100%;
            transform: skew(-15deg);
            left: 88px;
            top: 0;
        }
    }

    .leg-3 {
        .gradient(to top);
        width: @legHeight;
        height: 235px;
        overflow: hidden;
        position: absolute;
        top: 0;
        left: 95px;
        border-radius: 35px;
        box-shadow: 2px 0px 3px rgba(0, 0, 0, 0.1);
        z-index: 1;

        &::before,
        &::after {
            content: "";
            display: block;
            position: absolute;
            background-color: rgba(0, 0, 0, 0.05);
        }

        &::before {
            width: 30px;
            height: 100%;
            transform: rotate(25deg);
        }

        &::after {
            top: -30px;
            width: 25px;
            height: 100%;
            transform: rotate(50deg);
        }
    }
}

.zero-wrapper {
    .gradient(45deg);
    position: relative;
    width: 235px;
    height: 235px;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.2) inset;
    margin: 12px;

    &::before,
    &::after {
        content: "";
        display: block;
        position: absolute;
    }

    &::before {
        top: 40%;
        left: 33px;
        width: 104px;
        height: 60%;
        transform: rotate(35deg);
        background-color: rgba(0, 0, 0, 0.05);
    }

    &::after {
        top: -60px;
        left: -5px;
        width: 60%;
        height: 110%;
        background-color: rgba(255, 255, 255, 0.1);
        transform: rotate(45deg);
    }

    .zero-wrapper__middle {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: round(235px / 2.25);
        height: round(235px / 2.25);
        background-color: @bgColor;
        border-radius: 50%;
        box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.2);
        z-index: 2;
    }
}
</style>
