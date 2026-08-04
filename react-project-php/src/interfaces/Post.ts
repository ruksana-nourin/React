export interface Post {
  id?: number;
  userId: string;
  title: string;
  body: string;
}

export const defaultPost: Post ={
    userId: "",
    title: "",
    body: "",
};