import {FormEvent, useState} from 'react';
import './App.css'

function App() {
    const [value, setValue] = useState<string>('');
    const [double, setDouble] = useState<string>('');
    const [sixteen, setSixteen] = useState<string>('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const numValue = parseInt(value, 10);

        const doubleValue = numValue.toString(2);
        const sixteenValue = numValue.toString(16).toUpperCase();

        setDouble(doubleValue);
        setSixteen(sixteenValue);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Введите число"
                    required
                />
                <button type="submit">Преобразовать</button>
            </form>

            <div>
                {double && <p>Двоичное: {double}</p>}
                {sixteen && <p>Шестнадцатеричное: {sixteen}</p>}
            </div>
        </>
    )
}

export default App
