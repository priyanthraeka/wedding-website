/* eslint-disable react/prop-types */
const Heading = (props) => {
  const { accent, children } = props;

  return (
    <h1
      className={`mb-5 text-center font-meath text-5xl md:text-6xl lg:text-7xl ${
        accent === "pink" ? "text-[#948285]" : "text-white"
      }`}
    >
      {children}
    </h1>
  );
};

export default Heading;
