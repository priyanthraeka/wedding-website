const Card = (props) => {
  const { id, background, children } = props;

  return (
    <section id={id}>
      <div
        className={
          background + " flex w-full flex-col items-center justify-center p-10"
        }
      >
        <div className="min-w-[320px]">{children}</div>
      </div>
    </section>
  );
};

export default Card;
