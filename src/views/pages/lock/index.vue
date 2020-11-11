<template>
    <div id="main-wrapper" class="show">
        <div class="authincation section-padding">
            <div class="container h-100">
                <div class="row justify-content-center h-100 align-items-center">
                    <div class="col-xl-4 col-md-6">
                        <div class="auth-form card">
                            <div class="card-header justify-content-center">
                                <h4 class="card-title">Locked</h4>
                            </div>
                            <div class="card-body">
                                <form action="index.html">
                                    <div class="form-group mb-4">
                                        <label for="">Enter Password</label>
                                        <input
                                            type="password"
                                            class="form-control bg-transparent rounded-0"
                                            placeholder="Password"
                                        />
                                    </div>
                                    <button class="btn-success btn-block btn-lg border-0" type="submit">Unlock</button>
                                </form>
                                <div class="new-account text-center mt-3">
                                    <a class="text-primary" href="reset.html">
                                        <h5>Not Maria Pascle?</h5>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-xl-6 col-md-6">
                        <div class="copy_right">
                            Copyright © 2019 Quixlab. All Rights <a href="http://www.bootstrapmb.com/">Reserved</a>.
                        </div>
                    </div>
                    <div class="col-xl-6 col-md-6 text-lg-right text-center">
                        <div class="social">
                            <a href="#"><i class="fa fa-youtube-play"></i></a>
                            <a href="#"><i class="fa fa-instagram"></i></a>
                            <a href="#"><i class="fa fa-twitter"></i></a>
                            <a href="#"><i class="fa fa-facebook"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "index"
}
</script>

<style scoped></style>
