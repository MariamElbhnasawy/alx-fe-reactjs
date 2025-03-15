import React from "react";

const UserProfile = (props) => {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "15px",
        margin: "15px",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h2 style={{ color: "blue", fontSize: "24px", marginBottom: "5px" }}>
        {props.name}
      </h2>
      <p style={{ fontSize: "18px", marginBottom: "5px" }}>
        Age:{" "}
        <span style={{ fontWeight: "bold", color: "darkred" }}>
          {props.age}
        </span>
      </p>
      <p style={{ fontSize: "16px", fontStyle: "italic" }}>Bio: {props.bio}</p>
    </div>
  );
};

export default UserProfile;
