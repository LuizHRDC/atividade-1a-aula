import { Fragment } from "react";
import Button from "../components/Button/Button";
import Title from "../components/Title/Title";
import { useNavigate } from "react-router";
import { Tabela } from "../components/Tabela";  

function Home() {

  const navegador = useNavigate();

  
  const tableData = [
    { itemCol1: "Lucas Pereira", itemCol2: "25 anos, São Paulo" },
    { itemCol1: "Ana Costa", itemCol2: "30 anos, Rio de Janeiro" },
    { itemCol1: "Carlos Lima", itemCol2: "28 anos, Belo Horizonte" },
  ];
  

  return (
    <Fragment>
      <Title texto="Home" />
      <Button texto="Contato" funcaoClique={() => navegador("/contato")} />
      <Button texto="Sobre" funcaoClique={() => navegador("/sobre")} />

      
      <Tabela 
        titleCol1="Coluna 1"
        titleCol2="Coluna 2"
        tableBody={tableData}
      />
    </Fragment>
  );
}

export default Home;
