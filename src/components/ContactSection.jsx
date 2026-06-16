import { useState } from 'react';
import { Alert, Button, Checkbox, Field, Input, Spinner, Textarea } from 'prizma-ui';

const whatsappUrl =
  'https://api.whatsapp.com/send/?phone=%2B573246780067&text=Quiero%20informacion%20comercial%20de%20Prizma';

const initialState = {
  name: '',
  email: '',
  phone: '',
  company: '',
  message: '',
  consent: false,
};

export function ContactSection() {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: '', message: '' });

    if (!formData.consent) {
      setStatus({ type: 'error', message: 'Debes autorizar el tratamiento de datos para continuar.' });
      return;
    }

    setLoading(true);

    try {
      const payload = {
        service_id: 'service_8f13knq',
        template_id: 'template_ye4xgf1',
        user_id: 'ry01Q6ZvIWQw3Piix',
        template_params: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: formData.message,
        },
      };

      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('No se pudo enviar el formulario');
      }

      setStatus({ type: 'success', message: 'Mensaje enviado. Un asesor te contactara pronto.' });
      setFormData(initialState);
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'No pudimos enviar el mensaje ahora. Escríbenos por WhatsApp para atencion inmediata.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section section-contrast" id="contacto">
      <div className="container contact-shell">
        <div className="contact-copy">
          <p className="eyebrow">Comercial y soporte</p>
          <h2>Hablemos de tu implementacion</h2>
          <p>
            Si necesitas un plan por etapas, integraciones entre sistemas o despliegue completo del ecosistema Prizma, te
            ayudamos a definir alcance, presupuesto y tiempos.
          </p>
          <Button
            variant="primary"
            onClick={() => window.open(whatsappUrl, '_blank', 'noopener,noreferrer')}
          >
            WhatsApp directo
          </Button>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <Field label="Nombre" htmlFor="contact-name">
            <Input
              id="contact-name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Field>
          <Field label="Correo" htmlFor="contact-email">
            <Input
              id="contact-email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Field>
          <Field label="Celular" htmlFor="contact-phone">
            <Input
              id="contact-phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </Field>
          <Field label="Empresa" htmlFor="contact-company">
            <Input
              id="contact-company"
              name="company"
              type="text"
              value={formData.company}
              onChange={handleChange}
              required
            />
          </Field>
          <Field label="Mensaje" htmlFor="contact-message">
            <Textarea
              id="contact-message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </Field>
          <Checkbox
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            required
            label="Autorizo el tratamiento de mis datos para contacto comercial."
          />
          {status.message ? (
            <Alert tone={status.type === 'success' ? 'success' : 'danger'}>
              {status.message}
            </Alert>
          ) : null}
          <Button variant="primary" type="submit" disabled={loading || !formData.consent}>
            {loading ? <Spinner size={16} label="Enviando" /> : 'Solicitar asesoria'}
          </Button>
        </form>
      </div>
    </section>
  );
}
