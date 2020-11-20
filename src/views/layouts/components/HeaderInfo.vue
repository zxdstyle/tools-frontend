<template>
    <div class="account_money">
        <ul>
            <li class="crypto">
                <span>0.0025</span>
                <i class="cc BTC-alt"></i>
            </li>
            <li class="usd">
                <span>19.93 USD</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "HeaderInfo"
}
</script>

<style lang="less" scoped>
.account_money {
    margin-right: 20px;
}
@media only screen and (max-width: 767px) {
    .account_money {
        display: none;
    }
}
.account_money ul li {
    display: inline;
    justify-content: space-around;
}
.account_money ul li.crypto {
    background: #423a6f;
    padding: 8px 15px 8px 22px;
    color: #7b6fff;
    border-radius: 30px 0 0px 30px;
    border: 1px solid #423a6f;
    transition: all 0.3s ease-in-out;
}
@media only screen and (max-width: 1199px) {
    .account_money ul li.crypto {
        padding: 8px 10px 8px 20px;
    }
}
@media only screen and (min-width: 1200px) and (max-width: 1350px) {
    .account_money ul li.crypto {
        padding: 8px 10px 8px 20px;
    }
}
.account_money ul li.crypto span {
    margin-right: 10px;
    font-weight: 500;
}
@media only screen and (max-width: 1199px) {
    .account_money ul li.crypto span {
        margin-right: 10px;
    }
}
@media only screen and (min-width: 1200px) and (max-width: 1350px) {
    .account_money ul li.crypto span {
        margin-right: 10px;
    }
}
.account_money ul li.crypto:hover,
.account_money ul li.crypto:focus,
.account_money ul li.crypto.active {
    background: #423a6f;
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.08);
}
.account_money ul li.usd {
    border: 1px solid rgba(255, 255, 255, 0.08);
    padding: 8px 20px 8px 10px;
    border-radius: 0 30px 30px 0;
}
@media only screen and (max-width: 1199px) {
    .account_money ul li.usd {
        padding: 8px 20px 8px 10px;
    }
}
@media only screen and (min-width: 1200px) and (max-width: 1350px) {
    .account_money ul li.usd {
        padding: 8px 20px 8px 10px;
    }
}
.account_money ul li.usd span {
    font-weight: 500;
    color: #fff;
}
</style>
