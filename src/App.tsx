import { useEffect, useState } from "react";
import type { User } from "./types";
import UserCard from "./UserCard";

type ApiResponse = {
  statusCode: number;
  data: User;
  message: string;
  success: boolean;
};

const App = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const url = "https://api.freeapi.app/api/v1/public/randomusers/user/random";

  const fetchUser = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch(url);
      const result: ApiResponse = await res.json();

      setUser(result.data);
    } catch {
      setError("Failed to fetch user. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-indigo-200 px-4">

      <div className="w-full max-w-md text-center space-y-6">

        {/* Title */}
        <h1 className="text-3xl font-semibold text-gray-800 tracking-tight">
          👤 Random User Generator
        </h1>

        {/* Card */}
        <UserCard
          user={user}
          loading={loading}
          error={error}
          onRefresh={fetchUser}
        />

      </div>

    </div>
  );
};

export default App;