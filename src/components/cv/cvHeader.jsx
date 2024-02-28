import image from "../assets/cvHeadPicture.jpg";

const cvHeader = () => {
  return (
    <>
      <div className="flex">
        <img src={image} />
      </div>
    </>
  );
};

export default cvHeader;
