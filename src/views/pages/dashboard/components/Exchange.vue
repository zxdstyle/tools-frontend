<template>
    <div class="card">
        <div class="card-header border-0 py-0">
            <h4 class="card-title">Exchange</h4>
        </div>
        <div class="card-body">
            <div class="buy-sell-widget">
                <form method="post" name="myform" class="currency_validate">
                    <div class="form-group">
                        <label class="mr-sm-2">Currency</label>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <label class="input-group-text"><i class="cc BTC-alt"></i></label>
                            </div>
                            <select name="currency" class="form-control">
                                <option value="">Select</option>
                                <option value="bitcoin">Bitcoin</option>
                                <option value="litecoin">Litecoin</option>
                            </select>
                        </div>
                    </div>

                    <div class="form-group">
                        <label class="mr-sm-2">Payment Method</label>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <label class="input-group-text"><i class="fa fa-bank"></i></label>
                            </div>
                            <select class="form-control" name="method">
                                <option value="">Select</option>
                                <option value="bank">Bank of America ********45845</option>
                                <option value="master">Master Card ***********5458</option>
                            </select>
                        </div>
                    </div>

                    <div class="form-group">
                        <label class="mr-sm-2">Enter your amount</label>
                        <div class="input-group">
                            <input type="text" name="currency_amount" class="form-control" placeholder="0.0214 BTC" />
                            <input type="text" name="usd_amount" class="form-control" placeholder="125.00 USD" />
                        </div>
                        <div class="d-flex justify-content-between mt-3">
                            <p class="mb-0">Monthly Limit</p>
                            <h6 class="mb-0">$49750 remaining</h6>
                        </div>
                    </div>
                    <button type="submit" name="submit" class="btn btn-success btn-block">
                        Exchange Now
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Exchange"
}
</script>

<style scoped></style>
