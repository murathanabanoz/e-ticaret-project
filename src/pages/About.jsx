import "./About.css";

function About() {
  return (
    <div className="about-container">
      <h1>Hakkımızda</h1>
      <p>
        Biz, müşterilerimize en kaliteli ürünleri en uygun fiyatlarla sunmayı
        hedefleyen bir e-ticaret şirketiyiz. 2024 yılında kurulan şirketimiz,
        müşteri memnuniyetini her zaman ön planda tutmaktadır.
      </p>
      <div className="about-sections">
        <div className="section">
          <h2>Misyonumuz</h2>
          <p>
            Müşterilerimize güvenilir ve kaliteli alışveriş deneyimi sunmak,
            sektörde öncü ve yenilikçi yaklaşımlarla hizmet vermek.
          </p>
        </div>
        <div className="section">
          <h2>Vizyonumuz</h2>
          <p>
            E-ticaret sektöründe lider konuma ulaşmak ve müşterilerimize en iyi
            hizmeti sunmaya devam etmek.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
