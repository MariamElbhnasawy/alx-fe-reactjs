import { useContext } from "react";
import UserContext from "./UserContext";

function ProfilePage() {
  const user = useContext(UserContext);

  return (
    <div>
      <h2>Hello : {user.name} </h2>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default ProfilePage;
