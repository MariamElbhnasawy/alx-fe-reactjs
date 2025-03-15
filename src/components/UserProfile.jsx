import React from "react";

<<<<<<< HEAD
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
=======
function UserProfile({ name, age, bio }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h2 style={{ color: "blue" }}>{name}</h2>
      <p style={{ fontWeight: "bold", fontSize: "16px", margin: "10px 0" }}>
        Age: {age}
      </p>
      <p style={{ fontSize: "14px", margin: "10px 0" }}>{bio}</p>
    </div>
  );
}
>>>>>>> 9dadeac (new commit)

export default UserProfile;
