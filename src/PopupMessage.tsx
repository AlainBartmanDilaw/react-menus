import React, { useState, useEffect } from "react";
import { BarLoader } from "react-spinners";

interface ModalProps {
    message: string;
    duration?: number;
}

const Modal: React.FC<ModalProps> = ({ message, duration = 3000 }) => {
    const [isOpen, setIsOpen] = useState<boolean>(true);
    const [progress, setProgress] = useState<number>(0);

    useEffect(() => {
        const startTime = Date.now();
        const endTime = startTime + duration;
        const timer = setInterval(() => {
            const elapsedTime = Date.now() - startTime;
            const remainingTime = endTime - Date.now();
            const progress = Math.min(100, (elapsedTime / duration) * 100);
            setProgress(progress);
            if (remainingTime <= 0) {
                clearInterval(timer);
                setIsOpen(false);
            }
        }, 100);
        return () => clearInterval(timer);
    }, [duration]);

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <>
            {isOpen && (
                <div className="modal">
                    <div className="modal-content">
            <span className="close" onClick={handleClose}>
              &times;
            </span>
                        <p>{message}</p>
                        <BarLoader
                            width={150}
                            height={5}
                            color={"#007bff"}
                            loading={true}
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;
