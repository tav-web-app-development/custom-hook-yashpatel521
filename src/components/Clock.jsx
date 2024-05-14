import UseTime from "../hooks/UseTime";

const Clock = () => {
  const currentTime = UseTime();

  return (
    <div>
      <span>Current Time : {currentTime}</span>
    </div>
  );
};

export default Clock;
