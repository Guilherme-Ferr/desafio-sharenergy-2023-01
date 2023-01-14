import { useForm } from "react-hook-form";
import { useState } from "react";
import { LoginBox } from "../../components/containers/loginBox";
import { Container, InputsHolder } from "./styles";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { CustomUsernameInput } from "../../components/inputs/customUsernameInput";
import { CustomPasswordInput } from "../../components/inputs/customPasswordInput";
import { CustomButton } from "../../components/buttons/customButton";
import { api } from "../../services/axios";

export function Login() {
  const { register, handleSubmit } = useForm();
  const navigation = useNavigate();
  const [inputs, setInputs] = useState({
    password: "",
    username: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setInputs({ ...inputs, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setInputs({
      ...inputs,
      showPassword: !inputs.showPassword,
    });
  };

  async function loginSubmit(data: {
    password: string;
    username: string;
  }): Promise<void> {
    try {
      const response = await api.post("users/login", data);
      if (response.status == 200) {
        toast.success("Login realizado com sucesso!");
        localStorage.setItem("user", JSON.stringify(response.data.token));
        api.defaults.headers.common.authorization = response.data.token;
        navigation("/menu");
      } else {
        toast.error("Usuário ou senha incorretos");
      }
    } catch (error) {
      toast.error("Usuário ou senha incorretos");
    }
  }

  return (
    <Container>
      <form onSubmit={handleSubmit(loginSubmit)}>
        <LoginBox>
          <InputsHolder>
            <CustomUsernameInput
              id="username"
              placeholder="Usuario"
              register={register}
              onChange={handleChange("username")}
            />

            <CustomPasswordInput
              id="password"
              placeholder="Senha"
              register={register}
              onChange={handleChange("password")}
              showPassword={inputs.showPassword}
              handleClickShowPassword={handleClickShowPassword}
            />
            <CustomButton color="primary" type="submit" text="entrar" />
          </InputsHolder>
        </LoginBox>
      </form>
    </Container>
  );
}
