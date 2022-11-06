
const Card = ({children}) => {
    return <div className="bg-dark-secondary text-white rounded p-6 flex justify-center flex-col">
        {children}
    </div>
}

export default Card;