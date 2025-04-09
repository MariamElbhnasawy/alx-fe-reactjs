import React from "react";

function UserProfile({ name, age, bio }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h2 style={{ color: "blue" }}>{name}</h2>
      <p style={{ fontWeight: "bold", fontSize: "16px", margin: "10px 0" }}>
        {"{props.name}", "{props.age}", "{props.bio}"}
      </p>
      <p style={{ fontSize: "14px", margin: "10px 0" }}>Age: {age}</p>
      <p style={{ fontSize: "14px", margin: "10px 0" }}>{bio}</p>
    </div>
  );
}

export default UserProfile;
/*Bio*/
