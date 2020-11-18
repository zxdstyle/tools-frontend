<template>
    <div class="card balance-widget">
        <div class="card-header border-0 py-0">
            <h4 class="card-title">Your Portfolio</h4>
        </div>
        <div class="card-body pt-0">
            <div class="balance-widget">
                <div class="total-balance">
                    <h3>$63411.00</h3>
                    <h6>Total Balance</h6>
                </div>
                <ul class="list-unstyled">
                    <li class="media">
                        <i class="cc BTC mr-3"></i>
                        <div class="media-body">
                            <h5 class="m-0">Bitcoin</h5>
                        </div>
                        <div class="text-right">
                            <h5>0.000242 BTC</h5>
                            <span>0.125 USD</span>
                        </div>
                    </li>
                    <li class="media">
                        <i class="cc LTC mr-3"></i>
                        <div class="media-body">
                            <h5 class="m-0">Litecoin</h5>
                        </div>
                        <div class="text-right">
                            <h5>0.000242 LTC</h5>
                            <span>0.125 USD</span>
                        </div>
                    </li>
                    <li class="media">
                        <i class="cc XRP mr-3"></i>
                        <div class="media-body">
                            <h5 class="m-0">Ripple</h5>
                        </div>
                        <div class="text-right">
                            <h5>0.000242 XRP</h5>
                            <span>0.125 USD</span>
                        </div>
                    </li>
                    <li class="media">
                        <i class="cc DASH mr-3"></i>
                        <div class="media-body">
                            <h5 class="m-0">Dash</h5>
                        </div>
                        <div class="text-right">
                            <h5>0.000242 XRP</h5>
                            <span>0.125 USD</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Portfolio"
}
</script>

<style lang="less" scoped>
.balance-widget ul li {
    padding: 18px;
    align-items: center;
    border-bottom: 0 solid #423a6f;
    background: #423a6f;
    border-radius: 15px;
    margin-bottom: 15px;
}
.balance-widget ul li i {
    font-size: 30px;
}
</style>
