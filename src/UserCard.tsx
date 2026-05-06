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
            <div className="w-full max-w-md bg-white/70 backdrop-blur rounded-2xl shadow-md p-6 text-center">
                <p className="text-gray-600 text-sm animate-pulse">
                    Loading user...
                </p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="w-full max-w-md bg-white/80 backdrop-blur rounded-2xl shadow-md p-6 text-center space-y-4">
                <p className="text-red-500 text-sm">{error}</p>
                <button
                    onClick={onRefresh}
                    className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm hover:bg-indigo-700 transition"
                >
                    Retry
                </button>
            </div>
        );
    }

    if (!user) return null;

    return (
        <div className="w-full max-w-md bg-white/80 backdrop-blur-xl rounded-3xl shadow-lg p-6 flex flex-col items-center text-center space-y-5 hover:shadow-xl transition">

            {/* Avatar */}
            <img
                src={user.picture.large}
                alt="user"
                className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-md"
            />

            {/* Name */}
            <div>
                <h2 className="text-xl font-semibold text-gray-800 tracking-tight">
                    {user.name.first} {user.name.last}
                </h2>
                <p className="text-sm text-gray-500">
                    {user.location.city}, {user.location.country}
                </p>
            </div>

            {/* Info Grid */}
            <div className="w-full grid grid-cols-2 gap-4 text-sm text-gray-700">

                <div className="bg-gray-50 rounded-xl p-3">
                    <p className="text-xs text-gray-500">Gender</p>
                    <p className="font-medium">{user.gender}</p>
                </div>

                <div className="bg-gray-50 rounded-xl p-3">
                    <p className="text-xs text-gray-500">Age</p>
                    <p className="font-medium">{user.dob.age}</p>
                </div>

                <div className="col-span-2 bg-gray-50 rounded-xl p-3">
                    <p className="text-xs text-gray-500">Email</p>
                    <p className="font-medium break-all">{user.email}</p>
                </div>

                <div className="bg-gray-50 rounded-xl p-3">
                    <p className="text-xs text-gray-500">Phone</p>
                    <p className="font-medium">{user.phone}</p>
                </div>

                <div className="bg-gray-50 rounded-xl p-3">
                    <p className="text-xs text-gray-500">Cell</p>
                    <p className="font-medium">{user.cell}</p>
                </div>

            </div>

            

        </div>
    );
};

export default UserCard;