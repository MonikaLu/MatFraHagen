interface ButtonProps {
  type?: "submit" | "reset" | "button" | undefined;
  btnText: string;
  onClick?: () => void;
}

const Button = ({ type, btnText, onClick }: ButtonProps) => {
  return (
    <div className="w-full">
      <button
        className="text-buttonText bg-button focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type={type}
        onClick={onClick}
      >
        {btnText}
      </button>
    </div>
  );
};

export default Button;
