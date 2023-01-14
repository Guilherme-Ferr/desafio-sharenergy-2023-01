import { FormControl, IconButton, Input, InputAdornment } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import { InputStyled } from "./styles";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export function CustomPasswordInput({
  id,
  register,
  handleClickShowPassword,
  showPassword,
  ...props
}) {
  return (
    <>
      <InputStyled>
        <LockIcon
          style={{ color: "#002c46", marginTop: "10px", marginRight: "5px" }}
        />
        <FormControl variant="standard">
          <Input
            id={id}
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                >
                  {showPassword ? (
                    <VisibilityOff style={{ color: "#002c46" }} />
                  ) : (
                    <Visibility style={{ color: "#002c46" }} />
                  )}
                </IconButton>
              </InputAdornment>
            }
            {...register(id)}
            {...props}
            style={{ width: "265px" }}
          />
        </FormControl>
      </InputStyled>
    </>
  );
}
