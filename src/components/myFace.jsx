import headImage from "../assets/kaineHead.jpg";

const MyFace = ({ size = 140 }) => {
  return (
    <div className="avatar">
      <div className="rounded-full ring ring-neutral ring-offset-neutral-100 ring-offset-2 ring-opacity-20" style={{ width: size }}>
        <img src={headImage} />
      </div>
    </div>
  );
};

export default MyFace;
