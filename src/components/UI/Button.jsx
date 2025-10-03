import { Link } from "react-router-dom";
import arrow from "../../assets/arrowRight.svg";
const Button = ({
  children,
  to,
  onClick,
  className = "",
  type = "button",
  disabled = false,
  loading = false,
  ...props
}) => {
  const baseStyles =
    "flex items-center gap-2 px-6 py-2 rounded-full text-white font-semibold text-sm transition-colors duration-300";

  const defaultStyles =
    "bg-gradient-to-t from-[#472799] to-[#7640FF] hover:text-white";

  const disabledStyles =
    "bg-[#D9D9D9] text-gray-500 cursor-not-allowed shadow-none";

  const finalStyles = `${baseStyles} ${
    disabled || loading ? disabledStyles : defaultStyles
  } ${className}`;

  const content = loading ? (
    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin inline-block"></span>
  ) : (
    <>
      {children}
      {/* стрелка 🔥 дефолтно в каждой кнопке */}
      <img src={arrow} alt="arrow" className="w-6 h-6" />
    </>
  );

  if (to) {
    return (
      <Link to={to} className={finalStyles} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={finalStyles}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;
