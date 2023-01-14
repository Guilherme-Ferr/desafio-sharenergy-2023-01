import { FormControl, Input } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import { InputStyled } from "./styles";

export function CustomUsernameInput({ id, register, ...props }) {
  return (
    <InputStyled>
      <MailIcon
        style={{ color: "#002c46", marginTop: "10px", marginRight: "5px" }}
      />
      <FormControl variant="standard">
        <Input
          id={id}
          type="text"
          {...register(id)}
          {...props}
          style={{ width: "265px" }}
        />
      </FormControl>
    </InputStyled>
  );
}
