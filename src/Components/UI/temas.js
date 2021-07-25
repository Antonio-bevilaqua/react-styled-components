import {
  corPrimaria,
  fundoClaro,
  textoFundoClaro,
  conteudoClaro,
  fundoEscuro,
  textoFundoEscuro,
  conteudoEscuro,
} from "./variaveis";

export const temaClaro = {
    cor: corPrimaria,
    body: fundoClaro,
    inside: conteudoClaro,
    text: textoFundoClaro,
    filter: '',
};

export const temaEscuro = {
    cor: corPrimaria,
    body: fundoEscuro,
    inside: conteudoEscuro,
    text: textoFundoEscuro,
    filter: "invert(100%)",
};