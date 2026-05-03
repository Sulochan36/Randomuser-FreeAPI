import type { User } from "./types";

type Props = {
    user: User | null;
    loading: boolean;
    error: string | null;
    onRefresh: () => void;
};

const UserCard = ({ user, loading, error, onRefresh }: Props) => {
    if (loading) {
        return (
            <div className="card">
                <p>Loading user...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="card error">
                <p>{error}</p>
                <button onClick={onRefresh}>Retry</button>
            </div>
        );
    }

    if (!user) return null;

    return (
        <div className="card">
            <img src={user.picture.large} alt="user" className="avatar" />

            <h2>
                {user.name.title} {user.name.first} {user.name.last}
            </h2>

            <p><strong>Gender:</strong> {user.gender}</p>
            <p><strong>Age:</strong> {user.dob.age}</p>

            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Cell:</strong> {user.cell}</p>

            <p>
                <strong>Location:</strong>{" "}
                {user.location.city}, {user.location.state}, {user.location.country}
            </p>

            <button onClick={onRefresh}>Get New User</button>
        </div>
    );
};

export default UserCard;