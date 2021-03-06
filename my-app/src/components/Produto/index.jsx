import styled from "styled-components";

const ProdutoWrapper = styled.div`
  width: 200px;
  background-color: #bab3b3;
`;

const ImagemProduto = styled.img`
  width: 100%;
  height: 250px;
`;
const Texto = styled.div`
  color: #f8f8f2;
  text-align: center;
  font-size: 25px;
`;

const Produto = ({ nome, valor, imagem }) => {
  return (
    <>
      <ProdutoWrapper>
        <ImagemProduto src={imagem} />
        <Texto>{nome}</Texto>
        <Texto> 
          {valor.toLocaleString("pt-br", {
            style: "currency",              // CONVERSÃO DE MOEDA
            currency: "BRL",
          })}
        </Texto>
      </ProdutoWrapper>
    </>
  );
};

export default Produto;
