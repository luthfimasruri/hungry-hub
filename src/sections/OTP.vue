<template>
  <div>
    <form class="p-4" @submit.prevent="verifyOTP">
      <div
        id="input-otp-wrapper"
        class="mb-6 flex flex-row justify-center text-center"
      >
        <input
          v-for="(item, index) in otpLength"
          :key="index"
          type="text"
          inputmode="numeric"
          class="form-control mr-2 h-12 w-10 rounded-lg border text-center"
          maxlength="1"
          minlength="1"
          min="0"
          max="9"
          style="width: 40px"
        />
      </div>
      <input autocomplete="one-time-code" required />

      <div class="mt-6 text-center">
        <button type="submit">Verify</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    phoneCode: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      otp: '',
      otpLength: 6,
      otpNumbers: [],
      timerCount: 0,
      timeout: null,
      phoneVerified: false,
      isOtpValid: true,
    }
  },
  mounted() {
    this.modalOpened()
  },
  methods: {
    async modalOpened() {
      this.otpNumbers = new Array(this.otpLength).fill('')
      this.isOtpValid = true
      this.phoneVerified = false
      this.$nextTick(() => {
        this.initInputOtp()
        this.initWebOtp()
        this.initOtp2()
      })
    },
    verifyOTP() {
      alert('verifyOTP')
    },
    initInputOtp() {
      const inputs = document.getElementById('input-otp-wrapper').children
      for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('keydown', (event) => {
          if (event.key === 'Backspace') {
            inputs[i].value = ''
            this.otpNumbers[i] = ''
            this.otp = this.otpNumbers.join('')
            if (i !== 0) inputs[i - 1].focus()
            event.preventDefault()
          } else {
            if (i === inputs.length - 1 && inputs[i].value !== '') {
              return true
            } else if (event.keyCode > 47 && event.keyCode < 58) {
              // allow 0-9 only
              inputs[i].value = event.key
              this.otpNumbers[i] = event.key
              this.otp = this.otpNumbers.join('')
              if (i !== inputs.length - 1) inputs[i + 1].focus()
              event.preventDefault()
            } else if (event.keyCode > 64 && event.keyCode < 91) {
              // prevent alphabet input
              event.preventDefault()
            }
          }
        })
      }
    },
    initWebOtp() {
      // Web OTP feature detection
      if ('OTPCredential' in window) {
        // alert('Web OTP is supported')
        const inputs = document.getElementById('input-otp-wrapper').children
        if (!inputs.length) return
        const ac = new AbortController()
        const form = inputs[0].closest('form')
        // Invoke the WebOTP API
        navigator.credentials
          .get({
            otp: { transport: ['sms'] },
            signal: ac.signal,
          })
          .then((otp) => {
            alert('otp', otp.code)
            this.otp = otp.code
            for (let i = 0; i < inputs.length; i++) {
              inputs[i].value = otp.code.charAt(i)
            }
            // Automatically verify when an OTP is obtained.
            if (form) form.submit()
          })
          .catch((err) => {
            this.$rollbar.error(err)
          })
      }
    },
    initOtp2() {
      if ('OTPCredential' in window) {
        alert('Web OTP is supported')
        window.addEventListener('DOMContentLoaded', (e) => {
          alert('DOMContentLoaded')
          console.log(e)
          const input = document.querySelector(
            'input[autocomplete="one-time-code"]'
          )
          if (!input) return
          const ac = new AbortController()
          const form = input.closest('form')
          if (form) {
            form.addEventListener('submit', (e) => {
              ac.abort()
              console.log(e)
            })
          }
          navigator.credentials
            .get({
              otp: { transport: ['sms'] },
              signal: ac.signal,
            })
            .then((otp) => {
              input.value = otp.code
              if (form) form.submit()
            })
            .catch((err) => {
              console.log(err)
            })
        })
      }
    },
  },
}
</script>
