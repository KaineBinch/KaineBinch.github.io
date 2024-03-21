import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InfoRow = ({ text, icon, title, isHeader = false }) => {
  if (!Array.isArray(text)) text = [text];
  return (
    <div className="flex flex-row items-center pt-[25px] place-content-between w-full">
      <div>
        {icon ? (
          <FontAwesomeIcon className="w-[25px] h-[25px]" icon={icon} />
        ) : (
          <p className={`text-start ${isHeader ? "font-bold" : ""}`}>{title}</p>
        )}
      </div>
      <div>
        {text.map((t, i) => (
          <p
            key={i}
            className={`text-end ${!isHeader && !icon ? "font-bold" : ""}`}
          >
            {t}
          </p>
        ))}
      </div>
    </div>
  );
};
export default InfoRow;
