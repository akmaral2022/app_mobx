import MyInput from '../input/input'
import React, { useState } from 'react';
import './Form.css'
import CustomButton from '../button/button';

interface CustomFormProps {
    onTaskAdd: (task: { id: number; title: string, description: string }) => void
}

const CustomForm: React.FC<CustomFormProps> = ({ onTaskAdd }) => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const createTask = (e?: React.FormEvent<HTMLFormElement>) => {
        if (e) {
            e.preventDefault()
        }
        if (title.trim() && description.trim()) {
            const newTask = {
                id: Date.now(),
                title: title,
                description: description
            }
            onTaskAdd(newTask)
            setTitle("")
            setDescription("")
        }
    }


    return (
        <div className='CustomForm'>
            <form onSubmit={createTask}>
                <h3>Are there new tasks?</h3>
                <MyInput width="600px" height="40px" value={title} setValue={(value) => setTitle(value)} placeholder='Введите название' />
                <MyInput width="600px" height="60px" value={description} setValue={(value) => setDescription(value)} placeholder='Введите описание' />
                <CustomButton type='submit'> Создать</CustomButton>
            </form>
        </div>
    )
}

export default CustomForm