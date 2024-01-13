import headImage from "../assets/kaineHead.jpg";

const MyFace = ({ size = 140 }) => {
  return (
    <div className="avatar">
      <div className="rounded-full" style={{ width: size }}>
        <img src={headImage} />
      </div>
    </div>
  );
};

export default MyFace;
