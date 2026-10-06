export interface User {
    id: number;
    name: string;
    email: string;
    role ?: string;
    password ?: string;
    created_at ?: string;
    updated_at ?: string;
}
export const defaultUser: User = {
    id: 0,
    name: "",
    email: "",
    password: "",
}

