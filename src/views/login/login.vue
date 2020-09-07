<template>
  <div class="login-test">
    <input type="text" class="text-input" placeholder="请输入用户名" />
    <input type="password" class="text-pwd" placeholder="请输入密码" />
    <button class="login-btn" @click="login()">登录</button>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "login",
  data() {
    return {
      msg: ""
    };
  },
  computed: {
    ...mapGetters(["token"])
  },
  created() {},
  methods: {
    ...mapMutations({
      setToken: "SET_TOKEN"
    }),
    login() {
      //测试设置token
      this.setToken({ token: "token234242dd" });

      //测试读取token
      this.$router.replace({
        path: this.$route.query.from
      });
    }
  }
};
</script>
<style lang="scss">
.login-test {
  width: 260px;
  margin: 30px auto;
  input {
    display: block;
    width: 200px;
    height: 25px;
    padding: 0 10px;
    margin-bottom: 10px;
    background: #fff;
    border: #d1d1d1 1px solid;
    border-radius: 2px;
  }
  .login-btn {
    display: block;
    width: 220px;
    height: 25px;
    margin-bottom: 10px;
    text-align: center;
    background: #08f;
    border: none;
    color: #fff;
    border-radius: 2px;
  }
}
</style>
