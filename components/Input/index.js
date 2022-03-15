const Input = ({ id, label, icon, className, ...props }) => {
  return (
    <div>
      <label className="block" htmlFor={id}>
        {label}*
      </label>
      <input
        id={id}
        {...props}
        className={`outline-none w-full pr-1 pt-2 pb-2 mt-2 mb-2 border-2 border-sand-200 rounded  focus:border-2 focus:border-orange-400 className"${className}`}
      />
    </div>
  );
};

export default Input;
