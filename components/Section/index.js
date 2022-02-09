const Section = ({ padding, children, className, ...props }) => {
  return (
    <section
      className={`${padding && 'pr-4 pl-4 sm:pr-8 sm:pl-8'} ${className}`}
      {...props}
    >
      {children}
    </section>
  );
};

export default Section;
