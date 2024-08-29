interface ButtonProps {
  type: "submit" | "reset" | "button";
  btnText: string;
}

const Button = ({ type, btnText }: ButtonProps) => {
  return (
    <div className="w-full">
      <button
        className="text-buttonText bg-button focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type={type}
      >
        {btnText}
      </button>
    </div>
  );
};

export default Button;
