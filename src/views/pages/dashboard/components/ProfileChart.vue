<template>
    <div class="card profile_chart">
        <div class="card-header py-0">
            <div class="chart_current_data">
                <h3>主流编程语言排行榜</h3>
                <p class="text-success">数据来源: <span>www.tiobe.com</span></p>
            </div>
            <!--            <div class="duration-option">-->
            <!--                <a id="all" class="active" @click="onChangeLanguage(['PHP', 'Go'])">PHP VS Go</a>-->
            <!--                <a id="one_month" @click="onChangeLanguage(['Go', 'Java'])">Go VS Java</a>-->
            <!--                <a id="six_months" @click="onChangeLanguage([])">ALL</a>-->
            <!--            </div>-->
        </div>
        <div class="card-body">
            <div id="timeline-chart">
                <VueApexCharts height="300" :options="options" :series="series"></VueApexCharts>
            </div>
            <div class="chart-content text-center">
                <div class="row">
                    <div class="col-xl-3 col-sm-6 col-6">
                        <div class="chart-stat">
                            <p class="mb-1">24hr Volume</p>
                            <h5>$1236548.325</h5>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 col-6">
                        <div class="chart-stat">
                            <p class="mb-1">Market Cap</p>
                            <h5>19B USD</h5>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 col-6">
                        <div class="chart-stat">
                            <p class="mb-1">Circulating Supply</p>
                            <h5>29.4M BTC</h5>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 col-6">
                        <div class="chart-stat">
                            <p class="mb-1">All Time High</p>
                            <h5>19.783.06 USD</h5>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 col-6">
                        <div class="chart-stat">
                            <p class="mb-1">Typical hold time</p>
                            <h5>88 days</h5>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 col-6">
                        <div class="chart-stat">
                            <p class="mb-1">Trading activity</p>
                            <h5>70% buy</h5>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 col-6">
                        <div class="chart-stat">
                            <p class="mb-1">Popularity</p>
                            <h5>#1 most held</h5>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6 col-6">
                        <div class="chart-stat">
                            <p class="mb-1">Popularity</p>
                            <h5>#1 most held</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts"
import { onMounted, ref } from "vue"
import System from "@/models/system"
export default {
    name: "ProfileChart",
    components: { VueApexCharts },
    setup() {
        let series = ref([])
        onMounted(() => {
            changeLanguage()
        })

        const changeLanguage = async languages => {
            let { data } = await System.getLanguages({
                languages: languages
            })
            series.value = data
        }

        const onChangeLanguage = languages => {
            changeLanguage(languages)
        }

        const options = {
            chart: {
                id: "language",
                type: "line",
                height: 300,
                foreColor: "#8C87C2",
                fontFamily: "Rubik, sans-serif",
                stacked: true,
                dropShadow: {
                    enabled: true,
                    enabledSeries: [0],
                    top: -2,
                    left: 2,
                    blur: 5,
                    opacity: 0.06
                },
                toolbar: {
                    show: false
                }
            },
            colors: [
                "#008ffB",
                "#7bb5ec",
                "rgb(144, 237, 125)",
                "rgb(247, 163, 92)",
                "rgb(128, 133, 233)",
                "rgb(228, 211, 84)",
                "rgb(43, 144, 143)"
            ],
            stroke: {
                curve: "smooth",
                width: 3
            },
            dataLabels: {
                enabled: false
            },
            markers: {
                size: 0,
                strokeColor: "#fff",
                strokeWidth: 3,
                strokeOpacity: 1,
                fillOpacity: 1,
                hover: {
                    size: 6
                }
            },
            xaxis: {
                type: "datetime",
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                }
            },
            yaxis: {
                labels: {
                    offsetX: -10,
                    offsetY: 0
                },
                tooltip: {
                    enabled: true
                }
            },
            grid: {
                show: false,
                padding: {
                    left: -5,
                    right: 5
                }
            },
            tooltip: {
                x: {
                    format: "dd MMM yyyy"
                }
            },
            legend: {
                position: "top",
                horizontalAlign: "left"
            }
            // fill: {
            //     type: "gradient",
            //     // gradient: {
            //     //     shadeIntensity: 1,
            //     //     opacityFrom: 0.5,
            //     //     opacityTo: 0,
            //     //     stops: [0, 100, 100]
            //     // }
            // }
        }

        return {
            options,
            series,
            onChangeLanguage
        }
    }
}
</script>

<style lang="scss" scoped>
.profile_chart.card .card-header {
    border: 0px;
}
@media only screen and (max-width: 767px) {
    .profile_chart.card .card-header {
        flex-direction: column;
    }
}
.profile_chart.card .card-header .duration-option {
    box-shadow: 0px 36px 48px rgba(31, 66, 135, 0.04);
}
.profile_chart.card .card-header .duration-option a {
    display: inline-block;
    margin-left: 10px;
    text-align: center;
    padding: 5px 15px;
    border: 1px solid #423a6f;
    float: left;
    transition: all 0.3s ease;
    font-weight: 500;
    border-radius: 5px;
    color: #fff;
}
.profile_chart.card .card-header .duration-option a:hover,
.profile_chart.card .card-header .duration-option a:focus,
.profile_chart.card .card-header .duration-option a.active {
    background: #7b6fff;
    color: #fff;
    border-right: 1px solid transparent;
}

.profile_chart.card .card-body .chart_current_data {
    min-width: 165px;
    border-radius: 16px;
    background: #fff;
    padding: 13px 20px;
    display: inline-block;
    margin-bottom: 40px;
}
.profile_chart.card .card-body .chart_current_data h3 {
    font-size: 36px;
    color: #7b6fff;
    margin-bottom: 0px;
    line-height: 43px;
}
.profile_chart.card .card-body .chart_current_data p {
    margin-bottom: 0px;
    font-size: 14px;
    font-weight: 500;
    color: #f5f5f5;
}
</style>
