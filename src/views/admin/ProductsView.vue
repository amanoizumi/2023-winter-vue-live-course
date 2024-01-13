<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';

const apiUrl = import.meta.env.VITE_API_URL;
const apiPath = import.meta.env.VITE_API_PATH;

const products = ref([]);
const tempProduct = ref({});

const getProducts = () => {
  const url = `${apiUrl}/api/${apiPath}/admin/products`;
  axios
    .get(url)
    .then((res) => {
      products.value = res.data.products;
    })
    .catch((err) => {
      alert(err.data.message);
    });
};

const editEnabled = (product) => {
  const putData = {
    data: {
      ...product
    }
  };

  putData.data.is_enabled = !putData.data.is_enabled;

  const url = `${apiUrl}/api/${apiPath}/admin/product/${product.id}`;
  axios
    .put(url, putData)
    .then(() => {
      getProducts();
    })
    .catch((err) => {
      alert(err.data.message);
    });
};

onMounted(() => {
  getProducts();
});
</script>

<template>
  <div class="container">
    <div class="row py-3">
      <div class="col-md-6">
        <h2>產品列表</h2>
        <table class="table table-hover mt-4">
          <thead>
            <tr>
              <th width="150">產品名稱</th>
              <th width="120">原價</th>
              <th width="120">售價</th>
              <th width="150">是否啟用</th>
              <th width="120">查看細節</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" :key="product.id">
              <td width="150">{{ product.title }}</td>
              <td width="120">{{ product.origin_price }}</td>
              <td width="120">{{ product.price }}</td>
              <td width="150">
                <a
                  href="#"
                  @click.prevent="editEnabled(product)"
                  v-if="product.is_enabled"
                  class="text-success"
                  >啟用</a
                >
                <a href="#" @click.prevent="editEnabled(product)" v-else class="text-danger"
                  >未啟用</a
                >
              </td>
              <td width="120">
                <button type="button" class="btn btn-primary" @click="tempProduct = product">
                  查看細節
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          目前有 <span>{{ products.length }}</span> 項產品
        </p>
      </div>
      <div class="col-md-6">
        <h2>單一產品細節</h2>
        <template v-if="tempProduct.id">
          <div class="card mb-3">
            <img :src="tempProduct.imageUrl" class="card-img-top primary-image" alt="主圖" />
            <div class="card-body">
              <h5 class="card-title">
                {{ tempProduct.title }}
                <span class="badge bg-primary ms-2">{{ tempProduct.category }}</span>
              </h5>
              <p class="card-text">商品描述：{{ tempProduct.description }}</p>
              <p class="card-text">商品內容：{{ tempProduct.content }}</p>
              <div class="d-flex">
                <p class="card-text me-2">{{ tempProduct.price }}</p>
                <p class="card-text text-secondary">
                  <del>{{ tempProduct.origin_price }}</del>
                </p>
                {{ tempProduct.unit }} / 元
              </div>
            </div>
          </div>
          <template v-for="image in tempProduct.imagesUrl" :key="image">
            <img :src="image" alt="" class="images m-2" />
          </template>
        </template>
        <p v-else class="text-secondary">請選擇一個商品查看</p>
      </div>
    </div>
  </div>
</template>

<style></style>
