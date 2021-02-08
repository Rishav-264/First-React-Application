import Button from './Button.js'

const Header = ({ name,title }) =>{
    return(
        <header className="header">
            <h3>Hello {name}! Here are a few things to remember.</h3>
        </header>
    )
}

export default Header;