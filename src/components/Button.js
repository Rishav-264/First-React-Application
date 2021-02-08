const Button = (props) =>{
    const onClick = () =>{
        console.log('clicked');
    }

    return(
        <div>
            <button className= "btn" onClick={onClick}>{props.text}</button>
        </div>
    )
}

export default Button;