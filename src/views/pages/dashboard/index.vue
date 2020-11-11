<template>
    <div class="content-body">
        <div class="container-fluid">
            <div class="row">
                <div class="col-xl-3 col-lg-4 col-xxl-4">
                    <portfolio></portfolio>
                </div>

                <div class="col-xl-6 col-lg-8 col-xxl-8">
                    <profile-chart></profile-chart>
                </div>
                <div class="col-xl-3 col-lg-12 col-xxl-12">
                    <follow></follow>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-3 col-lg-4 col-xxl-4">
                    <exchange></exchange>
                </div>
                <div class="col-xl-9 col-lg-8 col-xxl-8">
                    <recent-activities></recent-activities>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Portfolio from "@/views/pages/dashboard/components/Portfolio"
import ProfileChart from "@/views/pages/dashboard/components/ProfileChart"
import Follow from "@/views/pages/dashboard/components/Follow"
import Exchange from "@/views/pages/dashboard/components/Exchange"
import RecentActivities from "@/views/pages/dashboard/components/RecentActivities"
export default {
    name: "Home",
    components: { Portfolio, ProfileChart, Follow, Exchange, RecentActivities }
}
</script>
