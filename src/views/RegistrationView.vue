<template lang="pug">
.login 
  #login.login-block 
    img(src="../assets/logo.svg")
    //- img(:src="require(`@/assets/logo.svg)`)")
    .login-block__box
      h1 Get started with a 14 day free trial
      h2 Already have an account?
        span 
          a(href="/login", target="_blank") Log in
      form
        .input-group(
          :class="{ valid: !v$.$error && v$.$dirty, error: v$.$error }"
        )
          label.hide(for="InputEmail") Name
          input.form-control.form--input(
            type="text",
            v-model="v$.name.$model",
            placeholder="Name"
          )
          span.error(v-for="(error, index) in v$.name.$errors", :key="index") {{ error.$message }}
        .input-group(
          :class="{ valid: !v$.$error && v$.$dirty, error: v$.$error }"
        )
          label.hide(for="InputEmail") Email
          input.form-control.form--input(
            type="text",
            v-model="v$.email.$model",
            placeholder="Email"
          )
          span.error(v-for="(error, index) in v$.email.$errors", :key="index") {{ error.$message }}
        .input-group(
          :class="{ valid: !v$.$error && v$.$dirty, error: v$.$error }"
        )
          input#password.form-control.form--input(
            :type="[showPassword ? 'text' : 'password']",
            v-model="v$.password.$model",
            placeholder="Password"
          )
          button.password(@click.prevent="showPassword = !showPassword") Show
        .login-block__error
          p#lowercase.password One lowercase character
          p#uppercase.password One uppercase character
        .login-block__error
          p#number.password One number
          p#min.password 8 characters minimum
        span.password(
          v-for="(error, index) in v$.password.$errors",
          :key="index"
        ) {{ error.$message }}
        button(@click.prevent="addExternalResults()") Create an account
        .static(:class="{ active: isActive, 'text-danger': hasError }")
  #confirm.login-block.hide
    img(src="../assets/logo.svg")
    .login-block__box.login-block__confirm
      h1 Confirm your email
      p Please check your inbox for a confirmation email. Click the link in the email to confirm your email address.
      button(@click.prevent="resendLink()") Re-send confirmation link
  #login-page.login-block.hide
    img(src="../assets/logo.svg")
    .login-block__box.login-block__confirm
      h1 Congratulations!
      p Your email has been confirmed. You can now login to the system
      button
        a(href="/login") Go to Login
  .login-bg
</template>

<script lang="ts" setup>
import { ref } from "vue";
import useVuelidate from "@vuelidate/core";
import { email } from "@vuelidate/validators";
const showPassword = ref(false);
const isActive = ref(true);
const hasError = ref(false);
const validName = (name: string) => {
  let validNamePattern = new RegExp("^[a-zA-Z]+(?:[-'\\s][a-zA-Z]+)*$");
  if (validNamePattern.test(name)) {
    return true;
  }
  return false;
};
const containsUppercase = (password: string) => {
  const boxU = document.getElementById("uppercase");
  if (/[A-Z]/.test(password)) {
    if (boxU != null) {
      boxU.classList.add("green");
    }
  } else {
    if (boxU != null) {
      boxU.classList.add("red");
    }
    return false;
  }
};
const containsLowercase = (password: string) => {
  const box = document.getElementById("lowercase");
  if (/[a-z]/.test(password)) {
    if (box != null) {
      box.classList.add("green");
    }
  } else {
    if (box != null) {
      box.classList.add("red");
    }
    return false;
  }
};

const containsNumber = (password: string) => {
  const boxN = document.getElementById("number");
  if (/[0-9]/.test(password)) {
    if (boxN != null) {
      boxN.classList.add("green");
    }
  } else {
    if (boxN != null) {
      boxN.classList.add("red");
    }
    return false;
  }
};
const minLength = (password: string) => {
  const boxF = document.getElementById("min");
  if (password && password.length >= 8) {
    if (boxF != null) {
      boxF.classList.add("green");
    }
  } else {
    if (boxF != null) {
      boxF.classList.add("red");
    }
    return false;
  }
};
let rules = {
  name: {
    name_validation: {
      $validator: validName,
      $message: "Incorrect format",
    },
  },
  email: {
    email,
    name_validation: {
      $message: "Incorrect format",
    },
  },
  password: {
    name_validation: {
      $validator: containsUppercase,
    },
    name_validationS: {
      $validator: containsLowercase,
    },
    name_validationT: {
      $validator: containsNumber,
    },
    name_validationF: {
      $validator: minLength,
    },
  },
};

const form = ref({
  name: "",
  email: "",
  password: "",
});
const $externalResults = ref({});

const v$ = useVuelidate(rules, form, { $externalResults });

const addExternalResults = () => {
  if (!form.value.name) {
    $externalResults.value = {
      email: ["Required"],
    };
    v$.value.$validate();
  } else {
    var element = document.getElementById("login");

    document.getElementById("login")?.classList.add("hide");
    document.getElementById("confirm")?.classList.remove("hide");
    document.getElementById("confirm")?.classList.add("block");
  }
};
const resendLink = () => {
  document.getElementById("confirm")?.classList.add("hide");
  document.getElementById("login-page")?.classList.add("block");
};
</script>
<style lang="scss" scoped>
#login-page.login-block.block {
  display: block;
}
#confirm.login-block.block {
  display: block;
}
#confirm.login-block.hide {
  display: none;
}
.hide {
  display: none;
}
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

  label.hide {
    display: none;
    margin-bottom: -30px;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 16px;
    color: var(--dark-charcoal);
    &.error {
      display: block;
    }
  }
  .input-group label:focus {
    position: absolute;
    display: block;
    bottom: 28px;
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

    &::placeholder {
      color: var(--dark-charcoal);
    }
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
      span {
        color: #00aed8;
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
