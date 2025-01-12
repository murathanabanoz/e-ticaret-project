import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
    alert("Mesajınız alındı. En kısa sürede size dönüş yapacağız.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Bizimle İletişime Geçin</h1>
        <p>
          Sorularınız için bize ulaşabilirsiniz. En kısa sürede dönüş yapacağız.
        </p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <div className="info-card">
            <div className="info-icon">📍</div>
            <h3>Adres</h3>
            <p>Aydınlıkevler Mahallesi,</p>
            <p>Hayat Caddesi No:123</p>
            <p>İzmir, Türkiye</p>
          </div>

          <div className="info-card">
            <div className="info-icon">📧</div>
            <h3>E-posta</h3>
            <p>info@eticaret.com</p>
            <p>destek@eticaret.com</p>
          </div>

          <div className="info-card">
            <div className="info-icon">📞</div>
            <h3>Telefon</h3>
            <p>+90 (212) 123 45 67</p>
            <p>+90 (212) 123 45 68</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-header">
            <h2>Mesaj Gönderin</h2>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Ad Soyad</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                placeholder="Adınız ve soyadınız"
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
                placeholder="E-posta adresiniz"
              />
            </div>
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
              placeholder="Mesajınızın konusu"
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
              placeholder="Mesajınızı buraya yazın..."
              rows="5"
            />
          </div>

          <button type="submit">Mesaj Gönder</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
