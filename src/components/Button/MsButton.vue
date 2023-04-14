<template>
    <button
      class="ms-button btn"
      :class="[type,text?'':'only-icon']"
      :disabled="disabled || processing"
      v-on="listeners"
    >
      <div :class="['icon24 icon left', leftIcon]" v-if="leftIcon">&nbsp;</div>
      <div class="text" :class="[{'pl-0': leftIcon, 'pr-0': rightIcon}]" v-if="text">{{text}}</div>
      <div :class="['icon24 icon right', rightIcon]" v-if="rightIcon"></div>
    </button>
</template>
<script>
export default {
  name: "msButton",
  props: {
    //Text hiển thị
    text: {
      defualt: null,
      type: String
    },
    //Icon trái
    leftIcon: {
      default: null,
      type: String
    },
    //Icon phải
    rightIcon: {
      default: null,
      type: String
    },
    //Loại button gồm 3 loại primary/secondary/third/four để hiện thị style tương ứng
    type: {
      default: "primary",
      type: String
    },
    /**
     * Trạng thái button disabled
     */
    disabled: {
      default: false,
      type: Boolean
    },
    /**
     * Cờ đánh dấu đang xử lý
     */
    processing: {
      default: false,
      type: Boolean
    }
  },
  data() {
    return {};
  },
  computed: {
    //Sự kiện từ 1 dòng dữ liệu emit ra ngoài
    listeners() {
      const me = this;
      return {
        click: event => {
          let deplay = window._appConfig.buttonClickDeplayMilliseconds;
          if (deplay && deplay > 0) {
            if (me._clicking) {
              return;
            }

            me._clicking = true;
            setTimeout(() => {
              delete me._clicking;
            }, deplay);
          }

          me.$emit("click", event);
        },
        mousedown: event => {
          event.preventDefault();
        },
        keydown: event => {
          me.$emit("keydown", event);
        },
        focus: event => {
          me.$emit("focus", event);
        }
      };
    }
  }
};
</script>
<style scoped lang="scss">
@import "../../assets/css/common.scss";
</style>