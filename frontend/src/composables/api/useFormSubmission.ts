// src/composables/useFormSubmission.ts
import { readonly, ref } from 'vue';

export function useFormSubmission() {

  const family_name = readonly(ref(''));
  const first_name = readonly(ref(''));
  const email = readonly(ref(''));
  const motivational_letter = readonly(ref(''));

  const submitFormData = async (formData: { [key: string]: string}) => {
    try {
      const response = await fetch('https://backend-shy-dew-2743.fly.dev/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        return {success: false, message: 'Network error'}
      }

      return {success: true};
    } catch (error) {
      console.error('API hiba:', error);
      return {success: false, message: 'API hiba'};
    }
  };

  //A handleSubmit megcsinálja a formData-t, amit majd később
  //megkap a submitFormData. Ott pedig lemegy a fetch, ami
  //felküldi DB-be az adatokat. !!!ELIVLEG!!!
  //(Valamint szerintem rossz a link, a DB link kellene oda.. xd)
  const handleSubmit = async (event: Event) => {
    event.preventDefault();
    event.stopPropagation();
    
    const formData = {
      family_name: family_name?.value,
      first_name: first_name?.value,
      email: email?.value,
      motivational_letter: motivational_letter?.value,
    };

    const result = await submitFormData(formData);
    if (result.success) {
      console.log('Form adatok sikeresen elküldve!');
    } else {
      console.error(result.message)
    }
  };

  return {
    family_name,
    first_name,
    email,
    motivational_letter,
    handleSubmit
  };
}
