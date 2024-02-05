import { ChangeEvent } from "react";
import "./input.css"

interface InputProps {
    width?: string;
    height?: string;
    value: string;
    setValue: (value: string) => void
    placeholder?: string;
}
const MyInput: React.FC<InputProps> = ({ width, height, value, setValue, placeholder }) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }
    return (
        <input style={{ width, height }} value={value} onChange={handleChange} placeholder={placeholder}></input>
    )
}

export default MyInput