/* eslint-disable react/prop-types */
const Input = ({ label, id, ...props }) => {
    return (
        <div className='control'>
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                name={id}
                required
                {...props}
            />
        </div>
    );
};

export default Input;
