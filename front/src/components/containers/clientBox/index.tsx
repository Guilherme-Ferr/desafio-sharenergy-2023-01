import { CatsContainer, Container, Title } from "./styles";

export function ClientBox({ children }) {
  return (
    <Container>
      <Title>Clientes</Title>
      <CatsContainer>{children}</CatsContainer>
    </Container>
  );
}
