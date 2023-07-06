import ApiManager from "./ApiManager";

export const register = async data => {
   try {
     const result = await ApiManager('users', {
        method: 'POST',
        headers: {
            "content-type": "application/json"
        },
        data: data
     })
     return result;
   } catch (error) {
     return error.response.data
   }
}