import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form gönderme işlemi burada yapılacak
    console.log("Form data:", formData);
    alert("Mesajınız alındı. En kısa sürede size dönüş yapacağız.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="contact-container">
      <h1>İletişim</h1>
      <div className="contact-info">
        <div className="info-section">
          <h3>Adres</h3>
          <p>Örnek Mahallesi, E-Ticaret Caddesi No:123</p>
          <p>İstanbul, Türkiye</p>
        </div>
        <div className="info-section">
          <h3>İletişim Bilgileri</h3>
          <p>Email: info@eticaret.com</p>
          <p>Tel: +90 (212) 123 45 67</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Ad Soyad</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-posta</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Konu</label>
          <input
            type="text"
            id="subject"
            value={formData.subject}
            onChange={(e) =>
              setFormData({ ...formData, subject: e.target.value })
            }
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mesaj</label>
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            required
          />
        </div>
        <button type="submit">Gönder</button>
      </form>
    </div>
  );
}

export default Contact;
