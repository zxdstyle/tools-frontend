<template>
    <div class="card settings_menu">
        <div class="card-header">
            <h4 class="card-title">Settings</h4>
        </div>
        <div class="card-body">
            <ul>
                <li class="nav-item">
                    <router-link to="/edit/profile" class="nav-link">
                        <i class="iconfont icon-user"></i>
                        <span>Edit Profile</span>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/preferences" class="nav-link">
                        <i class="iconfont icon-setting"></i>
                        <span>Preferences</span>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/security" class="nav-link">
                        <i class="iconfont icon-lock"></i>
                        <span>Security</span>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/linked" class="nav-link">
                        <i class="iconfont icon-university"></i>
                        <span>Linked Account</span>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "LeftSide"
}
</script>

<style scoped></style>
