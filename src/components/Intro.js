import Button from './Button.js'
import { FaGlasses } from 'react-icons/fa';

const Intro = (props) =>{
    return(
        <div className='intro'>
            <FaGlasses className="glasses" />
            <p>Hello! I am Basic Bot. Please introduce yourself.</p>
        </div>
    )
}

export default Intro;