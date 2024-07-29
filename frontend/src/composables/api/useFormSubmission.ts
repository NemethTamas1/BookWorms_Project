import type { User } from "@/models/User";

export function useFormSubmission() {

  const baseURL = 'https://backend-shy-dew-2743.fly.dev/user'
  const localURL = 'http://localhost:3000/user'
  
  async function submitFormData(newUser:User) {
    try {
      const response = await fetch(baseURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
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
  async function handleSubmit(newUser: User) {
    const result = await submitFormData(newUser);
    if (result.success) {
      console.log('Form adatok sikeresen elküldve!');
    } else {
      console.error(result.message)
    }
  };

  return {
    handleSubmit
  };
}
