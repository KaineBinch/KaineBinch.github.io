import { wipPercentage } from "../constants/constants";

const Wip = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    >
      <div className="hero-overlay bg-opacity-80 backdrop-blur-[7px]"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <div
            className="radial-progress mb-4"
            style={{ "--value": wipPercentage }}
            role="progressbar"
          >
            {wipPercentage}%
          </div>
          <h1 className="mb-5 text-5xl font-bold">Oh No!</h1>
          <p className="mb-5">
            This page is currently under construction, Please check back later.
          </p>
          <a href="/" className="btn btn-primary">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
};

export default Wip;
