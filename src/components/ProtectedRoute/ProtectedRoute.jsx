import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthProvider.jsx";
import Login from "../Login/Login";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      setShowLoginModal(true);
    }
  }, [isAuthenticated]);

  const handleLoginSuccess = () => {
    setShowLoginModal(false);
    navigate("/reserve");
  };
  if (showLoginModal) {
    return (
      <Login
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    );
  }
  return isAuthenticated ? children : null;
}
export default ProtectedRoute;
