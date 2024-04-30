"use client"

import Image from 'next/image';
import React, { useState, useEffect, useMemo } from 'react';

const Hero: React.FC = () => {
    const myRole = useMemo(() => ['Web Developer.', 'AI & ML Enthusiast.'], []);
    const [isCursorVisible, setIsCursorVisible] = useState(true);

    const typingDelay = 30;
    const erasingDelay = 30;
    const newTextDelay = 2000; 
    const [text, setText] = useState("");
    const [isTyping, setIsTyping] = useState(true);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(typingDelay);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        const handleTyping = () => {
            setText(currentText => myRole[loopNum].substring(0, currentText.length + 1));
            setTypingSpeed(typingDelay);
        }

        const handleErasing = () => {
            setText(currentText => myRole[loopNum].substring(0, currentText.length - 1));
            setTypingSpeed(erasingDelay);
        }

        if (isTyping) {
            timer = setTimeout(handleTyping, typingSpeed);
        } else {
            timer = setTimeout(handleErasing, typingSpeed);
        }

        return () => clearTimeout(timer);
    }, [text, isTyping, loopNum, typingSpeed, myRole]);

    useEffect(() => {
        const handleSwitch = () => {
            setIsTyping(true);
            setLoopNum(prevLoopNum => (prevLoopNum + 1) % myRole.length);
        };

        if (!isTyping && text === "") {
            setTimeout(handleSwitch, newTextDelay);
        } else if (isTyping && text === myRole[loopNum]) {
            setTimeout(() => setIsTyping(false), newTextDelay);
        }

        const interval = setInterval(() => {
            setIsCursorVisible(prevIsCursorVisible => !prevIsCursorVisible);
        }, 500);
        return () => clearInterval(interval);

    }, [isTyping, text, loopNum, newTextDelay, myRole]);

    return (
        <div className='w-full flex px-8'>
            <div className='w-[60%] px-20 py-16'>
                <p className='tracking-widest py-4 text-[#C4CFDE]'>
                    WELCOME TO MY WORLD
                </p>
                <h1 className='text-6xl font-bold py-4'>
                    Hi, I&apos;m <span className='text-[#FF014F]'>Prajwal A K</span><br/> 
                    <p className='text-5xl py-4 font-bold'>a {text}
                        <span className={isCursorVisible ? 'inline font-light' : 'hidden'} style={{ color: '#C4CFDE' }}>|</span>
                    </p>                
                </h1>
                <p className='leading-loose text-[#C4CFDE]'>
                I&apos;m a tech enthusiast and AI/ML developer currently studying at MS Ramaiah and interning at Productdev Edge. I have built projects in AI and ML, and I&apos;m confident in my ability to build and train models. I have experience with AWS and working with LLM&apos;s, and I&apos;m passionate about creating digital solutions that push the boundaries of innovation.
                </p>
                <div>
                    <button className='bg-[#FF014F] text-white px-6 py-2 mt-8 rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-md hover:shadow-[#FF014F]'>
                        Get In Touch
                    </button>

                    <button className='bg-[#1E2024] text-[#FF014F] px-6 py-2 mt-8 ml-4 rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-md  hover:shadow-[#1a1c20]'>
                        Resume
                    </button>
                </div>
            </div>
            <div className="">
                <div className='bg-gradient-to-br from-[#1E2024] to-[#23272B] rounded-md px-6 py-12 shadow-lg shadow-[#16171b] hover:cursor-pointer hover-bg-gradient-to-r hover:from-[#23272B] hover:to-[#1E2024]'>
                <Image
                    src="/hero-5.png"
                    alt='Hero'
                    width={500}
                    height={400}
                />
                </div>
            </div>
        </div>
    );
};

export default Hero;