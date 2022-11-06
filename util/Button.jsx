const Button = ({ children, onClick, disabled }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center bg-primary-color p-3 sm:p-1 rounded ${
        disabled ? "cursor-not-allowed" : 'cursor-pointer'
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
