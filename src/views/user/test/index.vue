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
