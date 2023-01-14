import { CardMedia } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { CustomButton } from "../../components/buttons/customButton";
import { AnimalBox } from "../../components/containers/animalBox";
import { MenuBox } from "../../components/containers/menuBox";
import { Container } from "./styles";

export function Cats() {
  const [cat, setCat] = useState();
  const [code, setCode] = useState("200");

  const handleChange = (event) => {
    setCode(event.target.value);
  };

  async function loadCat(httpCode: string): Promise<void> {
    try {
      const request = axios.create({
        baseURL: "https://http.cat",
      });
      const response = await request.get(`/${httpCode}`);

      if (response.status !== 200) {
        toast.error("Não foi possivel carregar os status");
      }
      setCat(response.data);
    } catch (error) {
      toast.error("Não foi possivel carregar os status");
    }
  }

  useEffect(() => {
    loadCat(code);
  }, []);

  return (
    <Container>
      <MenuBox>
        <AnimalBox animal="Cats">
          <CustomButton
            onClick={() => loadCat("200")}
            color="primary"
            text="Pesquisar código"
            style={{ width: "200px" }}
          />
          <CardMedia image={cat} style={{ width: "600px", height: "800px" }} />
        </AnimalBox>
      </MenuBox>
    </Container>
  );
}
