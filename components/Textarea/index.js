const Textarea = ({ id, label, icon, className, ...props }) => {
  return (
    <div className="h-full">
      <label className="block" htmlFor={id}>
        {label}*
      </label>
      <textarea
        id={id}
        {...props}
        className={`resize-none outline-none w-full pr-1  mt-2 border-2 border-sand-200 rounded  focus:border-2 focus:border-orange-400 h-full ${className}`}
      />
    </div>
  );
};

export default Textarea;
