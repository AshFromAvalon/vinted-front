const Avatar = ({ imageUrl, size }) => {
  const style =
    size === "medium"
      ? { height: "45px", width: "45px", borderRadius: "50%" }
      : { height: "25px", width: "25px", borderRadius: "50%" };

  return <img style={style} src={imageUrl} alt="avatar" />;
};

export default Avatar;
