
import PropTypes from "prop-types";
import { ButtonsCard } from "../ui/tailwindcss-buttons";
import { RevealOnScroll } from "./RevealOnScroll";

export default function CustomButton({ text, onClick, className }) {
  return (
    <RevealOnScroll>
    <ButtonsCard className={className} onClick={onClick}>
      <span className="text-lg font-bold">{text}</span>
      </ButtonsCard>
      </RevealOnScroll>
  );
}

// ✅ Add PropTypes for type validation
CustomButton.propTypes = {
  text: PropTypes.string.isRequired, // Ensure 'text' is a required string
  onClick: PropTypes.func, // onClick function (optional)
  className: PropTypes.string, // Optional extra styling
};

// ✅ Default Props (if no props are passed)
CustomButton.defaultProps = {
  onClick: () => console.log("Button clicked!"), // Default behavior if no onClick is provided
  className: "p-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700", // Default styling
};
