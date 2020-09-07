<template>
  <div>
    <h1>响应数据</h1>
    <div>响应消息:{{ this.msg }}</div>
  </div>
</template>

<script>
import { getByThridparty } from "@/api/user";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "test",
  data() {
    return {
      msg: ""
    };
  },
  computed: {
    ...mapGetters(["token"])
  },
  async created() {
    try {
      const data = await getByThridparty({
        id: 555
      });
      this.msg = data.message;

      //测试设置token
      this.setToken({ token: "token234242dd" });

      //测试读取token
      console.info("....read token form store:", this.token);

      console.info(data);
    } catch (e) {
      this.$throw(e);
    }
  },
  methods: {
    ...mapMutations({
      setToken: "SET_TOKEN"
    })
  }
};
</script>
