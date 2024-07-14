const form = document.getElementById('form'); 

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const data = {
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    email: formData.get('email'),
    password: formData.get('password'),
    contactNumber: formData.get('contactNumber'),
    domain: formData.get('domain')
  };

  console.log('Form Data:', data);

  fetch('/create-account', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((response) => response.json())
    .then((data) => console.log('Server Response:', data))
    .catch((error) => console.error('Error:', error));
});
