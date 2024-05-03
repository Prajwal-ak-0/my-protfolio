import React from 'react'
import FeatureCard from './FeatureCard'
import { FaCode, FaMobileAlt, FaServer, FaBrain, FaSpider, FaLanguage } from 'react-icons/fa';

const Features = () => {

    const features = [
        {
            title: 'Web Development',
            description: ' Crafting modern and engaging websites using React, Next.js, and Tailwind CSS.',
            icon: FaCode
        },
        {
            title: 'App Development',
            description: 'Building versatile and responsive applications with React Native, allowing for cross-platform compatibility across iOS and Android devices.',
            icon: FaMobileAlt
        },
        {
            title: 'Full Stack Expertise',
            description: 'With expertise in backend technologies like Node.js and Express.js, paired with frontend frameworks like React and Next.js, I bring projects to life with seamless integration and functionality.',
            icon: FaServer
        },
        {
            title: 'AI & ML',
            description: 'Utilizing advanced techniques such as Neural Networking(NN) I develop and train machine learning models. From predictive analytics to computer vision tasks, I leverage AI and ML to solve complex problems.',
            icon: FaBrain
        },
        {
            title: 'Data Scraping:',
            description: 'Extracting valuable insights from various sources on the web, I proficiently scrape data using tools like Python BeautifulSoup and Scrapy.',
            icon: FaSpider
        },
        {
            title: 'NLP & Language Models',
            description: 'I develop and fine-tune Large Language Models (LLMs) for tasks such as document abalysis, and legal chatbots by making use of framework like langchain.',
            icon: FaLanguage
        },
    ]

  return (
    <div className='md:px-20 px-4 py-16'>
        <p className='text-[#FF014F] font-light tracking-widest py-2'>
            FEATURES
        </p>
        <h1 className='py-6 text-6xl font-bold'>
            What I Do
        </h1>
        <div className='grid md:grid-cols-3 gap-8'>
            {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
            ))}
        </div>
    </div>
  )
}

export default Features