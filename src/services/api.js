const baseURL = 'http://localhost:3001/';

export const generateTicket = async (data) => {
    
    data.employeeId = "emp123";

    const url = baseURL + 'generateTicket';
    console.log(data);
    const response = await fetch(url, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return response.json();
  
}