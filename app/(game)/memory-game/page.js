"use client"

import { useEffect, useState } from 'react';
import data from '../../../data/data.json';
import Link from 'next/link';


const generateCards = () => {
    const productsImgs = data.ProductsImgs.filter((p) => p.id !== 108).map((p) => p.src)
    const cardsArr = [...productsImgs, ...productsImgs]
    return cardsArr.sort(() => Math.random() - 0.5)
}

export default function MemoryGame() {

    const [sortedCards, setSortedCards] = useState(generateCards())
    const [cards, setCards] = useState([])
    const [flipped, setFlipped] = useState([])
    const [matches, setMatches] = useState([])
    const [timer, setTimer] = useState(50)
    const [showCongrats, setShowCongrats] = useState(false)
    const [showGameover, setShowGameover] = useState(false)
    

    useEffect(() => {

        sortedCards.sort(() => Math.random() - 0.5)
        setCards(sortedCards)

    }, [sortedCards])

    useEffect(() => {

        if (showCongrats || showGameover) return;

        const timerSet = setTimeout(() => {
            setTimer((prev) => prev - 1)
        }, 1000);

        if (matches.length === cards.length && matches.length > 0) {
            clearTimeout(timerSet)
            setShowCongrats(true)
            const endGameTimer = setTimeout(() => {
                setShowCongrats(false)
                resetGame()
            }, 3000);
            return () => clearTimeout(endGameTimer)
        }

        if (timer === 0) {
            clearTimeout(timerSet)
            if (matches.length === cards.length && matches.length > 0) {
                setShowCongrats(true)
            } else if (matches.length < cards.length) {
                setShowGameover(true)
            }
            const endGameTimer = setTimeout(() => {
                setShowCongrats(false)
                if (!showCongrats) setShowGameover(false)
                resetGame()
            }, 3000);
            return () => clearTimeout(endGameTimer)
        }


        return () => clearTimeout(timerSet)

    }, [matches, timer])

    useEffect(() => {

        const matchCards = () => {
            const [first, second] = flipped

            if(cards[first] === cards[second]) {
                setMatches([...matches, ...flipped])
            }
            setFlipped([])
        }

        if(flipped.length === 2) {
            setTimeout(() => {
                matchCards()
            }, 500);
        }

    }, [cards, flipped, matches])

    const handleClick = (index) => {

        if(!flipped.includes(index) && flipped.length < 2) {
            setFlipped([...flipped, index])
        }

    }

    const resetGame = () => {

        setSortedCards(generateCards())
        setFlipped([])
        setMatches([])
        setTimer(50)

    }

    return (
    <main className="game-pg relative pb-8 h-[100vh]">
        <div className='bg-[#461e04] text-[#fefcf9] text-lg font-bold text-center py-2'>Timer: {timer}</div>
        <h2 className="text-center text-2xl font-bold text-[#461e04] mt-8 tracking-wider uppercase" onClick={() => console.log(cards)}>Memory Game</h2>
        {showCongrats && <h2 className='absolute w-full h-full top-0 left-0 bg-[#461e0494] text-[#ffd554] flex justify-center items-center text-4xl font-bold z-50 uppercase text-center'>You Won!<br/>Congratulations</h2>}
        {showGameover && <h2 className='absolute w-full h-full top-0 left-0 bg-[#bfbfbf94] text-red-600 flex justify-center items-center text-4xl font-bold z-50 uppercase'>Game Over</h2>}
        <div className='w-fit mx-auto grid grid-cols-5 gap-1 md:gap-3 p-2.5 md:p-10 '>
            {cards && cards.map((card, index) => (
                <div className={`bg-[#ffd554] cursor-pointer transform transition-transform duration-300 max-w-full w-18 md:w-22 h-18 md:h-22 flex justify-center items-center ${flipped.includes(index) || matches.includes(index) ? 'rotate-180' : ''}`} key={index}
                onClick={() => handleClick(index)}>
                    {flipped.includes(index) || matches.includes(index) ? (
                        <img src={card} className='p-2 rotate-180' alt='Card Image'/>
                    ) : (
                        <img src='/assets/imgs/logo.webp' className='w-1/2 opacity-50' alt='ElShamadan Logo'/>
                    )}
                </div>
            ))}
        </div>
        <div className='w-[70%] mt-8 mx-auto flex justify-center items-center flex-col md:flex-row gap-2.5'>
            <button aria-label='Reset Game' className='btn shadow-sm px-8 border-none font-semibold rounded-3xl transition-all duration-700 bg-yellow-300 hover:bg-[#461e04] text-[#461e04] hover:text-[#fefcf9]'
            onClick={resetGame}>Reset Game</button>
            <Link href='/' aria-label='Go To Home Page' className='btn shadow-sm px-8 border-none font-semibold rounded-3xl transition-all duration-700 bg-[#461e04] hover:bg-yellow-300 text-[#fefcf9] hover:text-[#461e04]'>Back Home</Link>
        </div>
    </main>
    )
}
