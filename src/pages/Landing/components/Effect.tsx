import { effect } from "../../../assets"

const Effect = () => {
    return (
        <div 
        id="effect"
        className="w-full flex justify-center mt-8">
            <img
                src={effect} // Update with your image path
                alt="Hero Effect"
                className="w-full" // Responsive image styling
            />
        </div>
    )
}

export default Effect