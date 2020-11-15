<template>
    <div class="row">
        <div class="col-md-6">
            <a-textarea @change="onSqlChange" v-model:value="sqlStr" placeholder="请输入合法的SQL建表语句" autoSize />
        </div>
        <div class="col-md-6">
            <a-textarea v-model:value="structStr" placeholder="这里是Golang Struct结构体" autoSize />
        </div>
    </div>
</template>

<script>
import { throttle } from "lodash"
import { ref } from "vue"
import Tools from "@/models/tools"
export default {
    name: "sql-struct",
    setup() {
        let structStr = ref("")

        let sqlStr = ref(`CREATE TABLE \`admin_users\` (
  \`id\` int(10) unsigned NOT NULL AUTO_INCREMENT,
  \`username\` varchar(190) NOT NULL,
  \`password\` varchar(60) NOT NULL,
  \`name\` varchar(191) NOT NULL,
  \`avatar\` varchar(191) DEFAULT NULL,
  \`remember_token\` varchar(100) DEFAULT NULL,
  \`login_user_id\` int(11) DEFAULT '0',
  \`hr_user_id\` int(11) DEFAULT '0',
  \`created_at\` timestamp NULL DEFAULT NULL,
  \`updated_at\` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (\`id\`),
  UNIQUE KEY \`admin_users_username_unique\` (\`username\`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4;`)

        const sql2struct = () => {
            Tools.sql2struct({ sqlStr: sqlStr.value }).then(res => {
                structStr.value = res.data
            })
        }

        const onSqlChange = throttle(() => sql2struct(), 500)

        sql2struct()

        return {
            onSqlChange,
            sqlStr,
            structStr
        }
    }
}
</script>

<style scoped></style>
