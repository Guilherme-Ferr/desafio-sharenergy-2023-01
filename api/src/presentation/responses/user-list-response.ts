export interface UserListResponse {
  count: number;
  page: number;
  users: {
    name: string;
    username: string;
    email: string;
    age: number;
    picture: string;
  }[];
}
