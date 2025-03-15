import React from "react";

function UserProfile({ name, age, bio }) {
  return (
    <div
      style={{
        border: "2px solid gray",
        borderRadius: "8px",
        padding: "15px",
        margin: "10px",
        backgroundColor: "#f9f9f9",
        boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
        textAlign: "center",
      }}
    >
      <h2 style={{ color: "blue", marginBottom: "10px" }}>{name}</h2>
      <p style={{ fontSize: "16px", fontWeight: "bold", margin: "5px 0" }}>
        Age: <span style={{ color: "darkred" }}>{age}</span>
      </p>
      <p style={{ fontSize: "14px", color: "#555", margin: "5px 0" }}>{bio}</p>
    </div>
  );
}

export default UserProfile;
