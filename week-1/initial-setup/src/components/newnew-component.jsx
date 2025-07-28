/**
 * Username
 * First name
 * Last name
 * Age
 * Height
 * Occupation
 */
export const UserProfile = ({ user, first, last, age, height, occupation }) => {
  return (

    <div>
      <ul>
        <li>Username:{user}</li>
        <li>First Name:{first}</li>
        <li>Last Name:{last}</li>
        <li>Age:{age}</li>
        <li>Height:{height}</li>
        <li>Occupation:{occupation}</li>
      </ul>
    </div>
  );
};
export default UserProfile
