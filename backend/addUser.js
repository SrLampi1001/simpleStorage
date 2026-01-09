// Function to add a new user via POST request
async function addUser(userData) {
  const url = 'http://localhost:3000/users'; // The endpoint URL

  try {
    const response = await fetch(url, {
      method: 'POST', // Specify the method as POST
      headers: {
        'Content-Type': 'application/json' // Indicate the data type of the body
      },
      body: JSON.stringify(userData) // Convert the JavaScript object to a JSON string
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Success:', data);
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}