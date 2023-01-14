import { useNavigate } from "react-router";
import {
  CardsOptions,
  Container,
  List,
  OtherOptions,
  UserListContainer,
  UserListTitle,
} from "./styles";

export function UserCardList({ children }) {
  const navigation = useNavigate();

  return (
    <Container>
      <List>
        <UserListTitle>Listagem de Usuarios</UserListTitle>
        <UserListContainer>{children}</UserListContainer>
      </List>
      <OtherOptions>
        <CardsOptions
          onClick={() => {
            navigation("/cats");
          }}
        >
          <h1>Gerar Gatos</h1>
        </CardsOptions>

        <CardsOptions
          onClick={() => {
            navigation("/dogs");
          }}
        >
          <h1>Gerar Cachorros</h1>
        </CardsOptions>

        <CardsOptions
          onClick={() => {
            navigation("/clients");
          }}
        >
          <h1>Clientes</h1>
        </CardsOptions>
      </OtherOptions>
    </Container>
  );
}
