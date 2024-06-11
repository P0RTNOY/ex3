// const BASE_URL = 'http://localhost:8080';
const BASE_URL = 'https://leafy-chaja-d4f8f6.netlify.app/.netlify/functions/api';
const CRISES_URL = `${BASE_URL}/crises`;

export async function getCrises(){
    try{
        const res = await fetch(CRISES_URL);
        const data = await res.json();
        return Array.isArray(data) ? data : [];
    }
    catch(error){
        console.error('Error fetching crises:', error);
    }
}
export async function getCrisesById(id){
    try{
        const res = await fetch(`${CRISES_URL}/${id}`)
        const data = await res.json();
        return data;
    }
    catch(error){
        console.error('Error getCrisesById:', error);
    }
}export async function deleteCrisesById(id){
    try{
        const res = await fetch(`${CRISES_URL}/${id}`,  {
            method: 'DELETE',
          })
        const data = await res.json();
        return data;
    }
    catch(error){
        console.error('Error getCrisesById:', error);
    }
}

export async function addNewCrises(data){
    try{
        const response = await fetch(`${CRISES_URL}/new`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });
          if (!response.ok) {
            throw new Error('Failed to add crisis');
          }
          return response;
    }
    catch(error){
        console.error('Error getCrisesById:', error);
    }
}

export async function updateCrises(id,data){
    try{
        const response = await fetch(`${CRISES_URL}/${id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });
          if (!response.ok) {
            throw new Error('Failed to update crisis');
          }
          return response;
    }
    catch(error){
        console.error('Error getCrisesById:', error);
    }
}
