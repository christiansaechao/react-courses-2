export const UserCard = ({ user }) => {
    const { first, last } = user.name;
    const { country } = user.location;
    const { email } = user;
    const { medium } = user.picture;
    
    return (
        <div className="flex flex-col items-center">
            <div>
                <img src={medium} alt="" />
            </div>
            <h1>{last}, {first}</h1>
            <p>Lives in: {country}</p>
            <p>Email: {email}</p>
        </div>
    )
}