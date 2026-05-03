export type User = {
    gender: string;
    name: {
        title: string;
        first: string;
        last: string;
    };
    email: string;
    phone: string;
    cell: string;
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    };
    location: {
        city: string;
        state: string;
        country: string;
    };
    dob: {
        date: string;
        age: number;
    };
};