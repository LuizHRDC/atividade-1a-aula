import { Fragment } from "react";
import Button from "../components/Button/Button";
import Title from "../components/Title/Title";
import { useNavigate } from "react-router";



function Sobre() {

  const navegador = useNavigate();

  return (
    <Fragment>
      <Title texto="Sobre"/>
      <Button texto="Home" funcaoClique={() => {
        navegador("/")
      }}/>
      <Button texto="Contato" funcaoClique={() => {
        navegador("/contato")
      }}/>
    </Fragment>
  );
}

  export default Sobre;