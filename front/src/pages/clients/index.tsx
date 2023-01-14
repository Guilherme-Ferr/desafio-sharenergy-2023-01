import { useState } from "react";
import { ClientBox } from "../../components/containers/clientBox";
import { MenuBox } from "../../components/containers/menuBox";
import { Container } from "./styles";
import { ClientTable } from "./table";
import { ClientTableRow } from "./table/styles";

export function Clients() {
  const [clients, setClients] = useState([]);

  return (
    <Container>
      <MenuBox>
        <ClientBox>
          <ClientTable>
            {clients.map((client) => {
              <ClientTableRow />;
            })}
          </ClientTable>
        </ClientBox>
      </MenuBox>
    </Container>
  );
}
