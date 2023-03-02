<template lang="pug">
.login 
  #login.login-block 
    img(src="../assets/logo.svg")
    //- img(:src="require(`@/assets/logo.svg)`)")
    .login-block__box
      a(href="/login", target="_blank") Go to login
      h1 Reset password
      h2 We'll email you instructions on how to reset your password.
      form
        .input-group
          label.none(for="email") Email
          input.form-control.form--input(
            onfocus="document.querySelector('label[for=email]').style.display = 'block';",
            type="text",
            v-model="v$.email.$model",
            placeholder="Email",
            :class="{ error: v$.$error }"
          )
          span.error(v-for="(error, index) in v$.email.$errors", :key="index") {{ error.$message }}
        button(@click.prevent="addExternalResults()") Reset password
  .login-bg
</template>

<script lang="ts" setup>
import { ref } from "vue";
import useVuelidate from "@vuelidate/core";
import { email } from "@vuelidate/validators";

let rules = {
  email: {
    email,
    name_validation: {
      $message: "Incorrect format",
    },
  },
};

const form = ref({
  email: "",
});
const $externalResults = ref({
  email: "",
});
const addExternalResults = () => {
  if (!form.value.email) {
    $externalResults.value = {
      email: "Require",
    };
    v$.value.$validate();
  }
};
const v$ = useVuelidate(rules, form, { $externalResults });
</script>
<style lang="scss" scoped>
.input-group {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  max-height: 56px;
  min-height: 56px;
  &:nth-child(2) {
    margin: 40px 0 40px 0;
  }

  label.none {
    display: none;
    margin-bottom: -30px;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 16px;
    color: var(--dark-charcoal);
  }
  .form--input {
    padding: 0;

    background: transparent;
    border: none;
    border-bottom: 1px solid #000000;
    border-radius: unset;
    outline: none;
    box-shadow: none;

    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 28px;
    color: var(--cod-gray);
    &:focus {
      label {
        display: block;
        margin-bottom: 40px;
      }
    }
    &::placeholder {
      color: var(--dark-charcoal);
    }
  }
  .form--input.error {
    border-bottom: 1px solid #d93025;
  }
}

.login {
  justify-content: space-between;
  display: flex;
  &-bg {
    background-image: url("../assets/bg.png");
    width: 601px;
    height: 1024px;
  }
  &-block {
    img {
      margin: 48px 0 0 48px;
    }
    &__box {
      margin: 58px 193px 0 198px;
    }
    a {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 24px;
      color: #959b9d;
      text-decoration: none;
      &::before {
        display: inline-block;
        content: "";
        width: 16px;
        height: 16px;
        margin-right: 8px;
        background-image: url("../assets/right-arrow.svg");
        background-repeat: no-repeat;
      }
    }
    h1 {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 600;
      font-size: 48px;
      line-height: 56px;
      width: 454px;
      color: #000000;
    }
    h2 {
      font-family: "Outfit";
      font-style: normal;
      font-weight: 300;
      font-size: 18px;
      line-height: 28px;
      color: #060606;
      margin: 0 0 40px 0;
      span {
        a {
          color: #00aed8;
          text-decoration: none;
          margin-left: 5px;
        }
      }
    }
    input {
      width: 454px;
      height: 56px;
      left: 192px;
      top: 342px;
      border-bottom: 1px solid #060606;
      margin-top: 44px;
    }
    button {
      width: 454px;
      height: 56px;
      left: 192px;
      top: 791px;
      background: #060606;
      border-radius: 14px;
      color: #fff;
      font-family: "Poppins";
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 24px;
      margin-top: 40px;
      a {
        color: #fff;
      }
    }
    button.password {
      margin-top: 0;
      font-family: "Poppins";
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 24px;
      text-align: right;
      color: #00aed8;
      border: none;
      background: transparent;
      position: absolute;
      top: 10px;
      left: 361px;
      cursor: pointer;
      width: 100px;
    }
    span.error {
      font-family: "Outfit";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      color: #d93025;
    }
    span.error::before {
      display: inline-block;
      content: "";
      width: 9px;
      height: 9px;
      margin-right: 4px;
      background-image: url("../assets/error.svg");
      background-repeat: no-repeat;
    }
    p.password {
      font-family: "Outfit";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      color: #000000;
      width: 219px;
    }
    p.password.red::before {
      background-image: url("../assets/ellipse-red.svg");
    }
    p.password.green::before {
      background-image: url("../assets/ellipse-green.svg");
    }
    p.password::before {
      display: inline-block;
      content: "";
      width: 9px;
      height: 9px;
      margin-right: 4px;
      background-image: url("../assets/ellipse.svg");
      background-repeat: no-repeat;
    }
    &__error {
      display: flex;
    }
    &__confirm {
      padding-top: 230px;
    }
  }
}
</style>
