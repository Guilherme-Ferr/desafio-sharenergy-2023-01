import { useEffect, useState } from "react";
import { Container } from "./styles";
import { toast } from "react-toastify";
import { api } from "../../services/axios";
import { MenuBox } from "../../components/containers/menuBox";
import { UserCardList } from "../../components/containers/userCard";
import { UserCard } from "../../components/containers/userCard/card";

export function Menu() {
  const [users, setUsers] = useState([]);

  async function loadUsers(): Promise<void> {
    try {
      const response = await api.get("users/list?count=15");
      if (response.status !== 200) {
        toast.error("Error ao carregar os usuarios");
      }
      setUsers(response.data.users);
    } catch (error) {
      toast.error("Error ao carregar os usuarios");
    }
  }

  useEffect(() => {
    loadUsers();
  }, []);
  return (
    <Container>
      <MenuBox>
        <UserCardList>
          {users.map((user) => (
            <UserCard user={user} />
          ))}
        </UserCardList>
      </MenuBox>
    </Container>
  );
}
