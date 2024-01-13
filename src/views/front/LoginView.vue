<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const router = useRouter();
const email = ref('a0918233246@hotmail.com');
const password = ref('');

const loginBtnDisabled = ref(false);

const login = () => {
  loginBtnDisabled.value = true;
  const url = import.meta.env.VITE_API_URL;

  const user = {
    username: email.value,
    password: password.value
  };

  axios
    .post(`${url}/admin/signin`, user)
    .then((res) => {
      const { token, expired } = res.data;
      document.cookie = `hexToken=${token};expires=${new Date(expired)}; path=/`;

      router.push('/admin/products');
    })
    .catch((err) => {
      alert(err.data.message);
    })
    .finally(() => {
      loginBtnDisabled.value = false;
    });
};
</script>
<template>
  <div class="container">
    <div class="row">
      <div class="col-6 mx-auto">
        <h1 class="fw-bold text-center mb-3">請先登入</h1>
        <div class="d-grid gap-4">
          <div class="form-floating">
            <input
              type="email"
              class="form-control"
              v-model.trim="email"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              v-model.trim="password"
              placeholder="Password"
              @keyup.enter="login"
            />
            <label for="floatingPassword">Password</label>
          </div>
          <button
            type="button"
            :disabled="loginBtnDisabled"
            class="btn btn-primary py-2"
            @click="login"
          >
            登入
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
