const InfoRow = ({
  text,
  link,
  icon: Icon,
  iconOverride,
  title,
  isHeader = false,
}) => {
  if (!Array.isArray(text)) text = [text];
  return (
    <a className="w-full" href={link} target="_blank" rel="noreferrer">
      <div className="flex flex-row items-center pt-[25px] place-content-between w-full">
        <div>
          {Icon ? (
            <Icon className="w-[25px] h-[25px]" size={25} />
          ) : iconOverride ? (
            <img src={iconOverride} className="h-[21.5px]" />
          ) : (
            <p className={`text-start ${isHeader ? "font-bold pr-5" : ""}`}>
              {title}
            </p>
          )}
        </div>
        <div>
          {text.map((t, i) => (
            <p
              key={i}
              className={`text-end ${
                !isHeader && !Icon && !iconOverride ? "font-bold" : ""
              }`}
            >
              {t}
            </p>
          ))}
        </div>
      </div>
    </a>
  );
};
export default InfoRow;
