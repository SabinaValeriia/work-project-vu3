<template lang="pug">
.login 
  #login.login-block 
    img(src="../assets/logo.svg")
    //- img(:src="require(`@/assets/logo.svg)`)")
    .login-block__box
      h1 Log in to your Quentn account
      h2 Already have an account?
        span 
          a(href="/registration", target="_blank") Sign up
      form.card(action="", @submit.prevent="submit")
        .input-group(
          :class="{ invalid: !form.email.valid && form.email.touched }"
        ) 
          label.none(for="email") Email
          input#email.form-control.form--input(
            type="email",
            v-model="form.email.value",
            @blur="form.email.blur",
            placeholder="Email",
            onfocus="document.querySelector('label[for=email]').style.display = 'block';"
          )
          span.error(v-if="form.email.errors.required && form.email.touched") Please enter email
        .input-group(
          :class="{ invalid: !form.password.valid && form.password.touched }"
        ) 
          label.none(for="password") Passsword
          input#password.form-control.form--input(
            type="password",
            v-model="form.password.value",
            @blur="form.password.blur",
            placeholder="Password",
            onfocus="document.querySelector('label[for=email]').style.display = 'block';"
          )
          button.password(@click.prevent="showPassword = !showPassword") Show
          span.error(
            v-if="form.password.errors.required && form.password.touched"
          ) Please enter password
          span.error(
            v-else-if="form.password.touched && form.password.errors.minLength"
          ) 8 characters minimum
        h3
          a(href="/reset", target="_blank") Forgot your password?
        button.btn.primary(type="submit", :disabled="!form.valid") Log in
</template>

<script lang="ts">
// @ts-ignore
import { useForm } from "../use/form";
const required = (val: any) => !!val;
const minLength = (num: number) => (val: string | any[]) => val.length >= num;
export default {
  setup() {
    const form = useForm({
      email: {
        value: "",
        validators: {
          required,
        },
      },
      password: {
        value: "",
        validators: {
          required,
          minLength: minLength(8),
        },
      },
    });

    function submit() {
      console.log(form.email.value);
    }
    return { form, submit };
  },
};
</script>

<style lang="scss" scoped>
.input-group.invalid input {
  border-color: #e53935;
}
.input-group.invalid input {
  border-color: #e53935;
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
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 28px;
      color: #000000;
      text-decoration: none;
      display: flex;
      justify-content: right;
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
