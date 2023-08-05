/* eslint-disable react/prop-types */
const SubHeading = (props) => {
  const { accent, children } = props;

  return (
    <p
      className={`mb-3 text-center font-vithquki text-xs md:text-sm lg:text-lg ${
        accent === "pink" ? "text-[#948285]" : "text-black"
      }`}
    >
      {children}
    </p>
  );
};

export default SubHeading;
