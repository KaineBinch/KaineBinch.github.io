const SplitText = (text, classes) => {
  return (
    <>
      {text.split("").map((char, i) => {
        return (
          <div
            key={i}
            className={`char whitespace-pre inline-block ${classes}`}
          >
            {char}
          </div>
        );
      })}
    </>
  );
};

export default SplitText;
