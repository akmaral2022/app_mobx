import { ButtonHTMLAttributes } from 'react';
import './button.css'
export { }

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    onClick?: () => void;
}

const CustomButton: React.FC<ButtonProps> = ({ onClick, ...props }) => {
    return (
        <div className='customButton'>
            <button onClick={onClick} {...props} >{props.children}</button>
        </div>
    )
}
export default CustomButton