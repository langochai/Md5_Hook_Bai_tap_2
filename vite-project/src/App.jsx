import {useState, useEffect} from 'react'
import './App.css'

function App() {
    const [count, setCount] = useState(3)
    const time = () => {
        setInterval(() => {
            setCount(count - 1)
        }, 1000)
    }
    useEffect(() => {
        if (count === 0) alert("wtf?")
        else time()
        return () => {
            clearInterval(time)
        }
    }, [count])

    return (
        <>
            <p>count: {count}</p>
        </>
    )
}

export default App
