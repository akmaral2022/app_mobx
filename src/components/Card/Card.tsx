import { useState } from 'react';
import styles from './Card.module.css';
import MyInput from '../UI/input/input';
// import deleteImg from '../../image/delete.svg'

interface CardProps {
    id: number;
    name: string;
    text: string;
    completed?: boolean;
    onChangeStatus: (checked: boolean) => void;
    onDelete: () => void;
    onEdit: (id: number, editedName: string, editedText: string) => void;
}

const Card: React.FC<CardProps> = ({ id, name, text, completed, onChangeStatus, onDelete, onEdit }) => {
    const [isEdit, setIsEdit] = useState(false)
    const [editedName, setEditedName] = useState(name);
    const [editedText, setEditedText] = useState(text);

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChangeStatus(e.target.checked)
        console.log(e.target)
    }
    const handleEditClick = () => {
        setIsEdit(true);
    }
    const handleSaveClick = () => {
        onEdit(id, editedName, editedText)
        setIsEdit(false);
    }



    return (
        <div className={styles.Card}>
            <div className={styles.todoBox}>
                {isEdit ?
                    <div className={styles.cardInputs}>
                        <div>
                            <MyInput width='200px' height='30px' value={editedName} setValue={setEditedName}></MyInput>
                            <MyInput width='300px' height='30px' value={editedText} setValue={setEditedText}></MyInput>
                        </div>
                        <div className={styles.cardElemts}>
                            <div className={styles.cardButtons}>
                                <button onClick={() => setIsEdit(false)}>Отменить <img width="20" height="20" src="https://img.icons8.com/ios-filled/50/FFFFFF/cancel.png" alt="cancel" /></button>
                                <button onClick={handleSaveClick}>Сохранить <img width="20" height="20" src="https://img.icons8.com/hatch/64/FFFFFF/checkmark--v2.png" alt="checkmark--v2" /></button>
                            </div>
                        </div>
                    </div>
                    :
                    <>
                        <div>
                            <h2>{name}</h2>
                            <p>{text}</p>
                        </div>
                        <div>
                            <div className={styles.cardElemts}>
                                <input type="checkbox" className={styles.checkbox} checked={completed} onChange={handleCheckboxChange} />
                                <div className={styles.cardButtons}>
                                    <button onClick={handleEditClick}>Change<img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/ball-point-pen.png" alt="ball-point-pen" /></button>
                                    <button onClick={onDelete}>Delete<img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/filled-trash.png" alt="filled-trash" /></button>
                                </div>
                            </div>
                        </div>

                    </>}

            </div>

        </div>
    )
}

export default Card;