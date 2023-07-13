const baseURL = 'https://fynd-project-backend.onrender.com/';

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

export const getAllTickets = async (employeeId) => {

    const url = baseURL + 'getAllTicketsOfClient/' + employeeId;
    const response = await fetch(url);
    return response.json();
  
}