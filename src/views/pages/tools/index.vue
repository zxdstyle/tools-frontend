<template>
    <div class="content-body">
        <div class="container-fluid">
            <div class="row">
                <div v-for="ti in test" :key="ti" class="col-md-3 mb-5">
                    <a-card hoverable size="small" title="Small size card">
                        <template #extra><a href="#">more</a></template>
                        <p>{{ ti }}</p>
                        <p>card content</p>
                        <p>card content</p>
                    </a-card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "index",
    setup() {
        const test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 1, 1, 1, 1, 1, 1]
        return {
            test
        }
    }
}
</script>

<style scoped></style>
