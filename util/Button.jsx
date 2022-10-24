
const Button = ({children, onClick}) => {
    return (
      <button
        onClick={onClick}
        className="flex items-center bg-primary-color p-3 rounded"
      >
        {children}
      </button>
    );
}

export default Button