import { ContainerButton } from "./styles";

export function CustomButton({ text, color, ...props }) {
  const textColor =
    color == "primary" ? "#002c46" : color == "secondary" ? "white" : "white";

  const buttonColor =
    color == "primary" ? "white" : color == "secondary" ? "#002c46" : "#65696F";

  return (
    <ContainerButton
      type="submit"
      fullWidth
      {...props}
      textColor={textColor}
      color={buttonColor}
    >
      {text}
    </ContainerButton>
  );
}
