import { ImageHolder, Container, ContentHolder } from "./styles";

export function MenuBox({ children }) {
  return (
    <Container>
      <ImageHolder>
        <img src="https://www.sharenergy.com.br/wp-content/uploads/2022/12/logo_color.png" />
      </ImageHolder>
      <ContentHolder>{children}</ContentHolder>
    </Container>
  );
}
