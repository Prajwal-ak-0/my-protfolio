import { IconType } from "react-icons";

interface FeatureCardProps {
    feature: {
        title: string
        description: string
        icon: IconType
    }
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
    return (
        <div className='bg-gradient-to-br from-[#1E2024] to-[#23272B] p-4 rounded-lg shadow-lg hover:gradient-to-br hover:from-[#23272B] hover:to-[#1E2024] transition-all duration-300 ease-in-out transform cursor-pointer'>
            <div className='flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-[#FF014F] transition-all duration-300 ease-in-out transform hover:rotate-45'>
                <i className={`fas fa-${feature.icon} text-2xl`}>
                    <feature.icon/>
                </i>
            </div>
            <h1 className='text-xl font-semibold mt-4 transition-all duration-300 ease-in-out transform hover:translate-y-1'>{feature.title}</h1>
            <p className='text-gray-500 mt-2 transition-all duration-300 ease-in-out transform hover:translate-y-1'>{feature.description}</p>
        </div>
    )
}

export default FeatureCard