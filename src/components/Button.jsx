/* eslint-disable react/prop-types */
const Button = (props) => {
  const { children } = props;

  return (
    <button className="rounded-full border border-black bg-transparent px-5 py-2 font-poppins text-xs text-black lg:text-sm">
      {children}
    </button>
  );
};

export default Button;
