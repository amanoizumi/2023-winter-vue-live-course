<script setup>
import axios from 'axios';
import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';

const apiUrl = import.meta.env.VITE_API_URL;

const router = useRouter();
const showAdmin = ref(false);

const checkLogin = () => {
  axios
    .post(`${apiUrl}/api/user/check`)
    .then(() => {
      showAdmin.value = true;
    })
    .catch((err) => {
      // alert(err.response.data.message)
      router.push('/');
    });
};

onMounted(() => {
  const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
  axios.defaults.headers.common.Authorization = token;

  checkLogin();
});
</script>

<template>
  <h1>header</h1>
  <RouterView v-if="showAdmin" />
  <h1>footer</h1>
</template>
