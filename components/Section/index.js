const Section = ({ padding, children, className, ...props }) => {
  return (
    <section className={className} {...props}>
      <div
        className={
          padding && 'max-w-7xl mr-auto ml-auto pr-4 pl-4 sm:pr-8 sm:pl-8'
        }
      >
        {children}
      </div>
    </section>
  );
};

export default Section;
