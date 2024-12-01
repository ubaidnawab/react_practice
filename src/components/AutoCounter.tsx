import { useEffect, useRef, useState } from "react";

const AutoCounter = () => {
    const [miliSecondCounter, setMiliSecondCounter]  = useState<number>(0)
    const [secondCounter, setSecondCounter]  = useState<number>(0)
    const [minutCounter, setMinutCounter] = useState<number>(0)
    const [hourCounter, setHourCounter] = useState<number>(0)
    const [isRunning, setIsRunning] = useState<boolean>(false);

    const timerRef = useRef<number | null>(null);

    const miliCounterStart = () => {
        if (isRunning) return;
        setIsRunning(true);
        timerRef.current = setInterval(() => {
            setMiliSecondCounter(miliSecondCounter => {
                const newMiliSecondCounter = miliSecondCounter + 1;
                newMiliSecondCounter == 10 ? secondCounterStart() : 0;
                return newMiliSecondCounter === 10 ? 0 : newMiliSecondCounter;
            });
        }, 100);
    }

    const secondCounterStart = () => {
        setSecondCounter(secondCounter => {
            const newSecondCounter = secondCounter+1;
            newSecondCounter === 60 ? minutCounterStart() : 0;
            return newSecondCounter === 60 ? 0 : newSecondCounter;
        });
    }
    const minutCounterStart = () => {
        setMinutCounter(minutCounter => {
            const newMinutCounter = minutCounter+1;
            newMinutCounter === 60 ? hourCounterStart() : 0;
            return newMinutCounter === 60 ? 0 : newMinutCounter;
        });
    }

    const hourCounterStart = () => {
        setHourCounter(hourCounter => {
            return hourCounter+1;
        });
    }
    
    const stopCounter = ()=> {
        setIsRunning(false);
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null; 
        }
    }
    const resetCounter = ()=> {
        setMiliSecondCounter(0);
        setSecondCounter(0);
        setMinutCounter(0);
        setHourCounter(0);
        setIsRunning(false); 
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }   
    }
    // useEffect(()=> {
    //     const timer = secondCounterStart();
    //     return () => {
    //         clearInterval(timer);
    //     }
    // },[])
    return(
        <>
           <div className="text-3xl font-bold flex justify-center"> 
                {/* <div> {String(hourCounter).padStart(2, '0')} :</div>
                <div> {String(minutCounter).padStart(2, '0')} :</div>
                <div> {String(secondCounter).padStart(2, '0')} :</div> */}
                <div className="flex flex-col justify-center pr-4">
                    <span>H</span> 
                    <span>{String(hourCounter).padStart(2, '0')}</span>
                </div>
                <div className="flex flex-col justify-center pr-4">
                    <span>M</span>
                    <span>{String(minutCounter).padStart(2, '0')}</span>
                </div>
                <div className="flex flex-col justify-center pr-4">
                    <span>S</span>
                    <span>{String(secondCounter).padStart(2, '0')} </span>
                </div>
                <div className="flex flex-col justify-center pr-4">
                    <span>MS</span>
                    <span>{String(miliSecondCounter).padStart(2, '0')}</span>
                </div>
            </div>
            <div className="flex justify-center mb-2 mt-2 gap-4">
                <button onClick={miliCounterStart}  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Start</button>
                <button onClick={stopCounter} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Stop</button>
            </div>
            <div>
                <button onClick={resetCounter} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4  mt-2 rounded">Reset</button>
            </div>
        </>
    );
}
export default AutoCounter;