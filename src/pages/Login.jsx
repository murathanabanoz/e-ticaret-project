import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginStart, loginSuccess, loginFailure } from "../store/authSlice";
import "./Login.css";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginStart());

    try {
      // Burada gerçek API çağrısı yapılacak
      const response = await mockLoginAPI(formData);
      dispatch(loginSuccess(response.user));
      navigate("/");
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  };

  return (
    <div className="login-container">
      <h2>Giriş Yap</h2>
      <form onSubmit={handleSubmit} className="login-form">
        {error && <div className="error-message">{error}</div>}
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
          <label htmlFor="password">Şifre</label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Giriş yapılıyor..." : "Giriş Yap"}
        </button>
      </form>
    </div>
  );
}

// Mock API call
const mockLoginAPI = (credentials) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        credentials.email === "test@test.com" &&
        credentials.password === "password"
      ) {
        resolve({
          user: {
            id: 1,
            name: "Test Kullanıcı",
            email: credentials.email,
          },
        });
      } else {
        reject(new Error("Geçersiz e-posta veya şifre"));
      }
    }, 1000);
  });
};

export default Login;
