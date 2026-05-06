import type { User } from "./types";

type ApiResponse = {
    data: User[];
    page: number;
    nextPage: boolean;
    previousPage: boolean;
    totalPages: number;
};

const BASE_URL = "https://api.freeapi.app/api/v1/public/randomusers";

export const fetchUsers = async (
    page: number
): Promise<ApiResponse> => {
    const url = `${BASE_URL}?page=${page}&limit=12`;

    const res = await fetch(url);
    const json = await res.json();

    if (!res.ok) {
        throw new Error(json.message || "Failed to fetch users");
    }

    return {
        page: json.data.page,
        totalPages: json.data.totalPages,
        nextPage: json.data.nextPage,
        previousPage: json.data.previousPage,
        data: json.data.data,
    };
};