import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

function User({ setIsLoginOpen }) {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      setIsLoginOpen(false);
    }
  }, [isAuthenticated, setIsLoginOpen]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <div>
      {isAuthenticated ? (
        <div className=" flex items-center">
          <span className="text-with font-semibold">{user.email}</span>
          <span className="text-with font-semibold">
            <svg
              onClick={handleLogout}
              className="w-6 h-6 mx-2"
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" x2="9" y1="12" y2="12"></line>
            </svg>
          </span>
        </div>
      ) : (
        <div className="flex items-center justify-end gap-1 font-semibold">
          <button
            onClick={() => setIsLoginOpen(true)}
            className="text-sm mobile:text-base cursor-pointer bg-gray-200 rounded-xl px-3 py-1 hover:bg-gray-300"
          >
            Login
          </button>

          <button className="text-sm mobile:text-base bg-gray-800 text-with rounded-xl px-3 py-1 hover:bg-gray-500">
            Sign&nbsp;up
          </button>
        </div>
      )}
    </div>
  );
}

export default User;
