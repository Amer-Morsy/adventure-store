<template>
  <div>
    <h2 class="text-white text-2xl text-center my-8">Your Basket</h2>

    <div class="card text-xl" v-if="cartStore.cart.length">
      <!-- product list -->
      <div
        v-for="product in cartStore.cart"
        :key="product.id"
        class="flex gap-8 items-center"
      >
        <img :src="product.img" :alt="product.title" />
        <p class="text-white">{{ product.title }}</p>
        <!-- product quntity -->
        <ProductQuantity :product="product" />

        <p class="text-white">{{ product.price * product.quantity }} coins.</p>

        <!-- delete -->
        <button class="ml-auto" @click="cartStore.deleteFromCart(product)">
          <span class="material-icons-outlined text-white">delete</span>
        </button>
      </div>
      <!-- cart total -->
      <div class="text-right pt-4 mt-4 border-t-2">
        <span class="text-white">Total amount to pay:</span>
        <span class="text-secondary">{{ cartStore.cartTotal }}</span>
      </div>
    </div>
    <div v-else>
      <p class="text-white">Your basket is empty</p>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "~/stores/cartStore";

const cartStore = useCartStore();
</script>

<style scoped></style>
