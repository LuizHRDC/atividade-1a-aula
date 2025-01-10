import "./Button.css"

interface ButtonProps {
  texto: string
  funcaoClique?: () => void
}


function Button(parametro: ButtonProps) {
  return (
    <div className="container-button">
      <button 
        className="my-button"
        onClick={
          parametro.funcaoClique
            ? parametro.funcaoClique
            : () => (
                console.log("Nenhuma ação definida.")
              )
        }
      >
        {parametro.texto}
      </button>
    </div>
  );
}

export default Button;