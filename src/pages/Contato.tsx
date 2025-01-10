import Button from "../components/Button/Button";
import Title from "../components/Title/Title";
import { useNavigate } from "react-router";
import { propsTabela, Tabela } from "../components/Tabela";


function Contato() {

    const navegador = useNavigate();

    const listaContatos: propsTabela[] = [
        {
          itemCol1: 'Lucas Pereira',
          itemCol2: '9919999991',
        },
        {
          itemCol1: 'Ana Costa',
          itemCol2: '9929999992',
        },
        {
          itemCol1: 'Carlos Lima',
          itemCol2: '9939999992',
        },
      ];
    
      return (
        <>
          <Title texto="Contato"/>
        <Button texto="Home" funcaoClique={() => {
        navegador("/")
      }}/>
        <Button texto="Sobre" funcaoClique={() => {
        navegador("/sobre")
      }}/>
        <Tabela
            titleCol1="Nome"
            titleCol2="Número"
            tableBody={listaContatos}
          />
        </>
      );

  }

  export default Contato;