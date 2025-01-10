import "./Title.css"

interface TitleProps {
    texto?: string;
}

function Title(props: TitleProps) {
    return (
        <>
            {props.texto ? <h1>{props.texto}</h1> : <></>}
        </>
    )
}

export default Title;