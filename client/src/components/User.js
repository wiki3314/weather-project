import React, { useState } from "react";
import axios from "axios";
import { Button } from "semantic-ui-react";
import Search from "./NewSearch";
import "./style.css";

const User = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function getKey() {
    try {
      setLoading(true);
      const response = await axios.post(`http://localhost:4000/create`);
      console.log("data ", response.data);
      if (response.data) {
        setIsAuth(true);
        setLoading(false);
        localStorage.setItem("apiKey", response.data.user.userId);
        console.log(localStorage.getItem("apiKey"));
      }
    } catch (error) {
      console.log(error);
      setError(true);
    }
  }

  return (
    <div>
      {loading ? (
        <div>
          <div>Loading..</div>
        </div>
      ) : isAuth ? (
        <Search />
      ) : !isAuth ? (
        <div style={{ margin: 20, padding: 20 }}>
          <h1 style={{ margin: 20, padding: 20 }}>Welcome to Weather Site</h1>
          <p style={{ margin: 20, padding: 20 }}>
            Want to get api key to check Weather
          </p>
          <Button className="buttonStyle" onClick={getKey}>
            Get Api Key
          </Button>
        </div>
      ) : (
        <div>Error! {error.message}</div>
      )}
    </div>
  );
};

export default User;
