import { useNavigate } from "react-router-dom"; // fix import

export default function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user"); // remove the correct key
    navigate("/login");
    // Optionally, you can also reload or update state if needed
  };

  return (
    <button
      onClick={handleLogout}
      style={{
        padding: "10px 20px",
        borderRadius: "4px",
        background: "#FF6900",
        color: "#fff",
        border: "none",
        cursor: "pointer",
        fontWeight: "bold",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      }}
    >
      Logout
    </button>
  );
}