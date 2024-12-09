<script setup lang="ts">
import { useNewApplication, useNewUser, useSendEmailToVerification } from '@/composables/api/useApi';
import router from '@/router';
import { computed, reactive, ref } from 'vue';
// Prop létrehozása, mivel egz változót adtam át a szülőtől, azaz a BookComponent-ből, ő tudja, hogy ezt kapja meg. Több változó átadása is lehetséges.
const props = defineProps(['selectedBook'])
const first_name = ref<string>('');
const family_name = ref<string>('');
const email = ref<string>('');
const motivational_letter = ref<string>('');
const emailAlreadyExist = ref<Boolean>(false)
const emailIsValid = ref<Boolean>(false)
const validForm = computed(() => {
  return first_name.value !== '' && family_name.value !== '' && email.value !== '' && emailIsValid.value && motivational_letter.value !== ''
})

// Error messages
const errMessages = reactive({
  family_name_err_msg: '',
  first_name_err_msg: '',
  email_err_msg: '',
  motivational_err_msg: ''
});

const resetRefs = () => {
    first_name.value = '',
    family_name.value = '',
    email.value = '',
    motivational_letter.value = ''
}

const validateFamilyNameInputField = () => {
  let validationError = false;

  if (family_name.value === '') {
    errMessages.family_name_err_msg = 'A vezetéknév mező nem lehet üres!';
    validationError = true;
  } else {
    errMessages.family_name_err_msg = '';
    validationError = false;
  }

  return validationError;
};

const validateFirstNameInputField = () => {
  let validationError = false;

  if (first_name.value === '') {
    errMessages.first_name_err_msg = 'A keresztnév mező nem lehet üres!';
    validationError = true;
  } else {
    errMessages.first_name_err_msg = '';
    validationError = false;
  }

  return validationError;
}

const validateEmailInputField = () => {
  let validationError = false;

  if (email.value === '') {
    errMessages.email_err_msg = 'Az e-mail cím mező nem lehet üres!';
    validationError = true;
  } else {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    if (!emailRegex.test(email.value)) {
      errMessages.email_err_msg = 'Az e-mail cím formátuma nem megfelelő!'
      emailIsValid.value = false
      validationError = true;
    }
    else {
      errMessages.email_err_msg = '';
      emailIsValid.value = true
      validationError = false;
    }
  }
  return validationError;
}

const validateMotivationalLetterInputField = () => {
  let validationError = false;

  if (motivational_letter.value === '') {
    errMessages.motivational_err_msg = 'A motivációs levél mező nem lehet üres!';
    validationError = true;
  } else {
    errMessages.motivational_err_msg = '';
    validationError = false;
  }

  return validationError;
}

const createNewUser = () => {
  let newUser = {
    id: 0,
    first_name: first_name.value,
    family_name: family_name.value,
    email: email.value,
    password: '',
    status: 1
  };

  return newUser;
}

const createNewApplication = (newUserId: number) => {
  let application = {
    id: 0,
    book_id: props.selectedBook.id,
    user_id: newUserId,
    application_status: 1,
    price: 0,
    motivational_letter: motivational_letter.value
  }

  return application;
}

const sendForm = async () => {
  if (validForm.value) {
    const newUserIdFromDatabase: number = await useNewUser(createNewUser())
    if (newUserIdFromDatabase != 0) {
      const useNewApplicationResponse = await useNewApplication(createNewApplication(newUserIdFromDatabase))
      if (useNewApplicationResponse as unknown as number == 400) {
        emailAlreadyExist.value = true
      }
      else if (useNewApplicationResponse.status == 201) {
        emailAlreadyExist.value = false
        await useSendEmailToVerification(useNewApplicationResponse.data[0]['lastInsertRowid'])
        await router.push('/applicantReceived')
      }
    }
    else {
      console.log("Hiba a felhasználó létrehozása közben!")
    }
  }
};
</script>

<template>
  <div class="modal fade" id="bookFormModal" tabindex="-1" aria-labelledby="bookFormModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5>{{ selectedBook.title }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <form @submit.prevent="sendForm()">
          <div class="modal-body">
            <div>
              <label class="form-label" for="family_name">Vezetéknév</label>
              <input :class="{ error: errMessages.family_name_err_msg !== '' }" @focus="validateFamilyNameInputField()"
                @keyup="validateFamilyNameInputField()" v-model="family_name" class="form-control"
                placeholder="Vezetéknév" type="text" id="family_name" name="family_name" />
              <p class="errorMsg" v-if="errMessages.family_name_err_msg !== ''">{{ errMessages.family_name_err_msg }}
              </p>
            </div>
            <div>
              <label class="form-label" for="first_name">Keresztnév</label>
              <input :class="{ error: errMessages.first_name_err_msg !== '' }" @focus="validateFirstNameInputField()"
                @keyup="validateFirstNameInputField()" v-model="first_name" class="form-control"
                placeholder="Keresztnév" type="text" id="first_name" name="first_name" />
              <p class="errorMsg" v-if="errMessages.first_name_err_msg !== ''">{{ errMessages.first_name_err_msg }}
              </p>
            </div>
            <div>
              <label class="form-label" for="email">E-mail</label>
              <input :class="{ error: errMessages.email_err_msg !== '' }" @focus="validateEmailInputField()"
                @keyup="validateEmailInputField()" v-model="email" class="form-control" placeholder="E-mail" type="text"
                id="email" name="email" />
              <p class="errorMsg" v-if="errMessages.email_err_msg !== ''">{{ errMessages.email_err_msg }}
              </p>
            </div>
            <div>
              <label class="form-label" for="motivational_letter">Motivációs levél</label>
              <textarea :class="{ error: errMessages.motivational_err_msg !== '' }"
                @focus="validateMotivationalLetterInputField()" @keyup="validateMotivationalLetterInputField()"
                class="form-control" placeholder="Motivációs levél" type="text" id="motivational_letter"
                v-model="motivational_letter" name="motivational_letter"></textarea>
              <p class="errorMsg" v-if="errMessages.motivational_err_msg !== ''">{{ errMessages.motivational_err_msg }}
              </p>
            </div>
          </div>
          <div class="error" v-if="emailAlreadyExist">
            <p class="errorMsg text-center">Ezzel az e-mail címmel már történt jelentkezés erre a könyvre!</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Bezárás</button>
            <button type="submit" class="btn btn-success" :disabled="!validForm">Küldés</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.error {
  border: 3px solid red;
}

.errorMsg {
  font-style: italic;
  color: rgb(80, 13, 13);
}

.modal-content {
  background-color: #dcb750cf;
  border: 3px solid #191416;
  padding: 2em;
  position: relative;
  box-shadow: 5px 5px 30px grey;
  margin: 3rem 0 10rem 0;
}

p {
  font-family: "Roboto", sans-serif;
}

.modal-content:before {
  background: none;
  border: 3px solid #191416;
  content: "";
  display: block;
  position: absolute;
  top: .1rem;
  left: .1rem;
  right: .1rem;
  bottom: .1rem;
  pointer-events: none;
}

input,
textarea {
  font-family: "Roboto", sans-serif;
}

input::placeholder {
  color: rgb(192, 184, 165);
}

textarea::placeholder {
  color: rgb(192, 184, 165)
}

.btn-success,
.btn-secondary {
  background-color: black;
}
</style>
