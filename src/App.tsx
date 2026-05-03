import { useEffect, useState } from "react"
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

  const url = 'https://api.freeapi.app/api/v1/public/randomusers/user/random';
  const options = { method: 'GET', headers: { accept: 'application/json' } };

  const fetchUser = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(url,options);
      const result: ApiResponse = await response.json();

      setUser(result.data);
    } catch (err) {
      setError("Failed to fetch user. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);
  

  return (
    <>
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1>Random User Generator</h1>
        <p>The API endpoint retrieves a single random user. When accessing this endpoint, you will receive a response containing the details of one randomly selected user.</p>

        <UserCard
          user={user}
          loading={loading}
          error={error}
          onRefresh={fetchUser}
        />

      </div>



    </>
  )
}

export default App