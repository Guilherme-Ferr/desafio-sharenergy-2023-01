import { ImageHolder, Container } from "./styles";

export function LoginBox({ children }) {
  return (
    <Container>
      <ImageHolder>
        <img src="https://www.sharenergy.com.br/wp-content/uploads/2022/12/logo_color.png" />
      </ImageHolder>
      {children}
    </Container>
  );
}
