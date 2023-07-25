
// Assuming you have defined the submitData function here
function submitData(name, email) {
    const url = 'http://localhost:3000/users'; // Fix the URL to '/users'
    const data = {
      name: name,
      email: email
    };
  
    const config = {
      method: 'POST', // Add the method here
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    };

    fetch("http://localhost:3000/dogs", configurationObject)
  .then(function (response) {
    return response.json();
  })
  .then(function (object) {
    console.log(object);
  })
  .catch(function (error) {
    alert("Bad things! Ragnarők!");
    console.log(error.message);
  });
  }
  
  // Export the submitData function
  export { submitData };
  