<template>
    <div class="page_title">
        <div class="container-fluid">
            <div class="row">
                <div class="col-xl-12">
                    <div class="page_title-content">
                        <p>Welcome Back,<span> Maria</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PageTitle"
}
</script>

<style lang="scss" scoped>
.page_title {
    padding: 15px 0 15px;
    position: relative;
    background: transparent;
    margin-top: 80px;
    margin-left: 75px;
}
.page_title p {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 0;
    color: #7b6fff;
}
.page_title p span {
    line-height: 30px;
    font-weight: 500;
    color: #fff;
    margin-left: 10px;
    opacity: 1;
}
</style>
