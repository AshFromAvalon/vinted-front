const Avatar = ({ imageUrl, size }) => {
  const style =
    size === "medium"
      ? { height: "45px", width: "45px", borderRadius: "50%" }
      : { height: "25px", width: "25px", borderRadius: "50%" };

  const className = `avatar-${size}`;

  return imageUrl ? (
    <img style={style} src={imageUrl} alt="avatar" />
  ) : (
    <div className={className}>A</div>
  );
};

export default Avatar;
