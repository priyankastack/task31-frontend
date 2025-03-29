import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TokenContext } from "../context/context";

const Home = () => {
  const navigate = useNavigate();
  const { token, storeToken } = useContext(TokenContext);
  const [data, setData] = useState(null);

  // Retrieve token from localStorage on page load
  useEffect(() => {
    const storedToken = localStorage.getItem("Token");
    if (storedToken) {
      storeToken(storedToken);
    } else {
      navigate("/login"); // Redirect to login if no token is found
    }
  }, [storeToken, navigate]);

  // Fetch user data only if token is available
  useEffect(() => {
    if (!token) return; // Avoid API call if token is not set

    const fetchUserData = async () => {
      try {
        const response = await fetch("https://task31-backend-lime.vercel.app/api/users", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const result = await response.json();
        console.log(result);

        if (!response.ok) {
          alert("Unauthorized access. Please log in first!");
          navigate("/login");
          return;
        }

        setData(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchUserData();
  }, [token, navigate]);

  return (
    <div>
      <h1 className="text-4xl font-bold text-center">Namaste! {data?data.name:"Loading..."}🙏</h1>
    </div>
  );
};

export default Home;
