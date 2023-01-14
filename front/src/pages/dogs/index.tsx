import { CardMedia } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { CustomButton } from "../../components/buttons/customButton";
import { AnimalBox } from "../../components/containers/animalBox";
import { MenuBox } from "../../components/containers/menuBox";
import { Container } from "./styles";

export function Dogs() {
  const [dog, setDog] = useState();

  async function loadDog(): Promise<void> {
    try {
      const request = axios.create({
        baseURL: "https://dog.ceo/api/breeds/image",
      });
      const response = await request.get("/random");

      if (response.status !== 200) {
        toast.error("Error ao carregar os dados");
      }
      setDog(response.data.message);
    } catch (error) {
      toast.error("Error ao carregar os dados");
    }
  }

  useEffect(() => {
    loadDog();
  }, []);

  return (
    <Container>
      <MenuBox>
        <AnimalBox animal="Dogs">
          <CustomButton
            onClick={() => loadDog()}
            color="primary"
            text="Atualizar"
            style={{ width: "200px" }}
          />

          <CardMedia image={dog} style={{ width: "600px", height: "800px" }} />
        </AnimalBox>
      </MenuBox>
    </Container>
  );
}
