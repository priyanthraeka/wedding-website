import img from "../assets/404.jpg";

const Error = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-5">
      <img src={img} alt="Error 404" className="w-8/12 md:w-6/12 lg:w-4/12" />
      <a
        className="text-center font-poppins text-[.8rem] md:text-sm lg:text-base"
        href="https://www.freepik.com/free-vector/error-404-concept-landing-page_4660894.htm#query=404%20not%20found&position=3&from_view=keyword&track=ais"
      >
        Image by pikisuperstar <br /> on Freepik
      </a>
    </div>
  );
};

export default Error;
