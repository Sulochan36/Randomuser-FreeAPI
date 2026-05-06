import { useEffect, useState } from "react";
import type { User } from "./types";
import UserCard from "./UserCard";
import { fetchUsers } from "./userSerivce";
import Pagination from "./Pagination";

type ApiResponse = {
  statusCode: number;
  data: User;
  message: string;
  success: boolean;
  page: number;
  nextPage: boolean;
  previousPage: boolean;
};

const App = () => {
  const [users, setUsers] = useState<User[] | null>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasNext, setHasNext] = useState(false);
  const [hasPrev, setHasPrev] = useState(false);


  const loadUser = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await fetchUsers(page);
      console.log("Yeh aa raha: ", res.data);
      
      setUsers(res.data);
      setHasNext(res.nextPage);
      setHasPrev(res.previousPage);
    } catch {
      setError("Failed to fetch user. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUser();
  }, [page]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-100 via-white to-indigo-200 px-4">

      <div className="w-full text-center space-y-6 flex flex-col items-center gap-2">

        {/* Title */}
        <h1 className="text-3xl font-semibold text-gray-800 tracking-tight">
          👤 Random User Generator
        </h1>

        {/* Card */}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users?.map((user, index) => (
            <UserCard
              key={index}
              user={user}
              loading={loading}
              error={error}
              onRefresh={loadUser}
            />
          ))}
        </div>

        <div className="mb-10">
          <Pagination
            page={page}
            hasNext={hasNext}
            hasPrev={hasPrev}
            onNext={() => setPage((p) => p + 1)}
            onPrev={() => setPage((p) => p - 1)}
          />
        </div>

        

      </div>

    </div>
  );
};

export default App;