export interface RandomUser {
  name: string;
  username: string;
  email: string;
  age: number;
  picture: string;
}

export function formatRandomUserList(userList: any[]) {
  return userList.map((user: any) => {
    return {
      name: `${user.name.first} ${user.name.last}`,
      username: user.login.username as string,
      email: user.email as string,
      age: user.dob.age as number,
      picture: user.picture.large as string,
    };
  });
}
