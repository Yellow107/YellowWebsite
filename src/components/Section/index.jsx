const Section = ({ children, className = "", id }) => {
  return (
    <section id={id} className={`w-full h-full ${className}`}>
      {children}
    </section>
  );
};

export default Section;
