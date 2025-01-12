import { useSelector } from "react-redux";

function Profile() {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="profile-container">
      <h1>Profil Bilgileri</h1>
      <div className="profile-info">
        <div className="info-item">
          <label>Ad Soyad:</label>
          <span>{user.name}</span>
        </div>
        <div className="info-item">
          <label>E-posta:</label>
          <span>{user.email}</span>
        </div>
      </div>
      {/* Buraya sipariş geçmişi, adres bilgileri vb. eklenebilir */}
    </div>
  );
}

export default Profile;
