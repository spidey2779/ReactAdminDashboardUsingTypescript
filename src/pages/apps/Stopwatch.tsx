import { useEffect, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar"

const formatTime = (timeInSeconds: number) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    const hoursInString = hours.toString().padStart(2, "0");
    const minInString = minutes.toString().padStart(2, "0");
    const secInString = seconds.toString().padStart(2, "0");
    return `${hoursInString} : ${minInString} : ${secInString}`;
}

const Stopwatch = () => {
    const [time, setTime] = useState<number>(0);
    const [isRunning, setIsRunning] = useState<boolean>(false);

    useEffect(() => {
        let intervalID: number;
        if (isRunning)
            intervalID = setInterval(() => {
                setTime(prev => prev + 1)
            }, 1000)
        return () => {
            clearInterval(intervalID)
        }
    }, [isRunning])

    const resetHandler = () =>{
        setTime(0);
        setIsRunning(false);
    }
    return (
        <div className="admin-container">
            <AdminSidebar />
            <main className="dashboard-app-container">
                <h1>Stop Watch</h1>
                <section>
                    <div className="stopwatch">
                        <h2>{formatTime(time)}</h2>
                        <button onClick={() => setIsRunning(prev => !prev)}>{isRunning ? "Stop" : "Start"}</button>
                        <button onClick={resetHandler}>Reset</button>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Stopwatch
