async function enviarCorreo(event) {
  event.preventDefault();

  const successMessage = document.getElementById('success-message');
  const errorMessage = document.getElementById('error-message');
  const sendButton = document.getElementById('send-button');

  successMessage.innerHTML = '';
  errorMessage.innerHTML = '';
  sendButton.disabled = true;
  sendButton.textContent = 'Enviando...';

  const name = document.getElementById('name').value;
  const mail = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;

  const data = { name, mail, phone, message };

  try {
    const respuesta = await fetch('https://apidomiciliostypescript-xb252ymbgq-uc.a.run.app/api/questionMail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (respuesta.ok) {
      console.log('Correo enviado exitosamente');
      successMessage.innerHTML = 'Tu mensaje ha sido enviado. Gracias por contactarnos.';
      document.getElementById('contactForm').reset();
    } else {
      throw new Error('Error al enviar correo');
    }
  } catch (error) {
    console.error(error);
    errorMessage.innerHTML = 'No pudimos enviar tu mensaje en este momento. Intentalo de nuevo en unos minutos o escribenos por WhatsApp.';
  } finally {
    sendButton.disabled = false;
    sendButton.textContent = 'Enviar mensaje';
  }
}

document.getElementById('contactForm').addEventListener('submit', enviarCorreo);
