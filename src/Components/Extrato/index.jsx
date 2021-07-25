import React from "react";
import { Box, Botao } from "../UI/index.js";
import { extratoLista } from "../../info.js";
import Items from "../Items";



const Extrato = () => {
  return <Box>
      {extratoLista.updates.map(({id, type, from, value, date}) => (
          <Items key={id} type={type} from={from} value={value} date={date} />
      ))}
      <Botao>Ver Mais</Botao>
  </Box>;
};

export default Extrato;
