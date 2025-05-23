import React from "react";

const Profile = ({ name, age, location, profession }) => {
  return (
    <div>
      <h1>Name:{name}</h1>
      <h1>Age: {age}</h1>
      <h1>Location: {location}</h1>
      <h1>Profession:{profession}</h1>
    </div>
  );
};

export default Profile;
