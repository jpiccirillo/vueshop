<script>
import constants from '@/constants'

export default {
  name: 'ShoppingCart',
  computed: {
      cart() {
        return this.$store.state.cart
      },
  },
  methods: {
      remove(id) {
          return this.$store.commit(constants.DELETE_FROM_CART, id)
      }
  }
}
</script>

<template>
  <div class="card-deck mt-5">
    <div v-for="(product, id) in cart" :key="product.id" :class="['card', $style.cardWidth]">
      <div class="card-body">
        <h5 class="card-title">{{ product.title }}</h5>
        <!-- <h6 class="card-subtitle">{{id}} </h6> -->
        <p class="card-text">Price: ${{ product.price }}</p>
        <p class="card-text">Quantity: {{ product.count }}</p>
      </div>
      <div :class="['card-footer bg-danger text-white text-center', $style.cardFooter]"
      @click="remove(id)">
        Remove
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
@media (min-width: 768px) {
  .cardWidth {
    max-width: 33%;
  }
}

@media (min-width: 1500px) {
  .cardWidth {
    max-width: 25%;
  }
}

.cardFooter {
    cursor: pointer;
  }
</style>
