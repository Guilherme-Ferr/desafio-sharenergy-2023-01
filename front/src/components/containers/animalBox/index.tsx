import { CatsContainer, Container, Title } from "./styles";

export function AnimalBox({ children, animal }) {
  return (
    <Container>
      <Title>HTTP {animal}</Title>
      <CatsContainer>{children}</CatsContainer>
    </Container>
  );
}
