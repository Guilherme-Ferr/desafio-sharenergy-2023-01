import { Container, Name, Email, NameHolder, ImageHolder } from "./styles";

export function UserCard({ user }) {
  return (
    <Container>
      <Name>{user.name}</Name>
      <ImageHolder src={user.picture} />
      <NameHolder>
        <div>
          <b>Idade:</b> {user.age}
        </div>
      </NameHolder>
      <div>
        <b>Usuario:</b> {user.username}
      </div>
      <Email>
        <b>E-mail:</b> {user.email}
      </Email>
    </Container>
  );
}
