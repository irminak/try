/* eslint-disable react/prop-types */
const Button = ({ text, className, ...props }) => {
    const cssClasses = className ? className : '';

    return (
        <button
            className={cssClasses}
            {...props}
        >
            {text}
        </button>
    );
};

export default Button;
