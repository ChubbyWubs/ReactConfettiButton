import { useState } from 'react';

function Button() {
    const [isCountingDown, setIsCountingDown] = useState(false);

    const handleClick = () => {
        if (isCountingDown) return;
        setIsCountingDown(true);
        
        let count = 3;
        console.log(`Button clicked: confetti in ${count}`);
        
        const countdown = setInterval(() => {
            count--;
            if (count > 0) {
                console.log(`Button clicked: confetti in ${count}`);
            } else {
                clearInterval(countdown);
                window.confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 }
                });
                setIsCountingDown(false);
            }
        }, 1000);
    };

    return (
        <button 
            onClick={handleClick}
            disabled={isCountingDown}
        >
            {isCountingDown ? 'Wait...' : 'Click for Confetti! 🎉'}
        </button>
    );
}

export default Button;