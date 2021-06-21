<!-- Без валидации инпутов и корректной отправки формы -->
<template>
  <v-card class="cart-addressee">
    <v-form v-model="valid" @submit.prevent="submit">

      <div class="text-container">
        <text-header :small="true" class="mb-10">Укажите получателя</text-header>

        <input-name :name.sync="name"></input-name>
        <input-phone :phone.sync="phone"></input-phone>
        <input-email :email.sync="email"></input-email>

        <div class="subscription">
          <checkbox v-model="checkbox"></checkbox>

          <span>
            <a href="#">Сообщайте</a> мне о скидках, распродажах и новых акциях
          </span>
        </div>

        <textSubtitle>
          Электронная почта нужна, чтобы мы сохранили всю информацию по заказу в вашем личном кабинете.
        </textSubtitle>
      </div>

      <div class="button-submit">
        <btn-large :onClick="consoleClick" :outlined="false" :dark="true"></btn-large>
      </div>
      
    </v-form>
  </v-card>
</template>

<script>
import inputName from '@/components/base/input/inputName.vue'
import inputPhone from '@/components/base/input/inputPhone.vue'
import inputEmail from '@/components/base/input/inputEmail.vue'
import checkbox from '@/components/base/input/checkbox.vue'
import btnLarge from '@/components/base/button/btnLarge.vue'
import textHeader from '@/components/base/text/textHeader.vue'
import textSubtitle from '@/components/base/text/textSubtitle.vue'

export default {
  name: 'cart-addressee',

  data() {
    return {
      valid: true,
      name: '',
      phone: '',
      email: '',
      checkbox: false  
    }
  },

  computed: {
    items() {
      return this.$store.getters.items
    }
  },

  methods: {
    consoleClick() {
      console.log(this.items)
    }
  },

  components: {
    inputName,
    inputPhone,
    inputEmail,
    checkbox,
    btnLarge,
    textHeader,
    textSubtitle
  }
}
</script>

<style scoped>
.cart-addressee {
  padding: 40px;
}

.text-container {
  max-width: 640px;
}

.subscription {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}

.subscription span a {
  color: #4c1e87;
  text-decoration-line: none;
  transition: all 0.4s ease;
}

.subscription span a:hover {
  color: rgba(0, 0, 0, 1);
}

.button-submit {
  margin-top: 20px;
  text-align: center;
}
</style>