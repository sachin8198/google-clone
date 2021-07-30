function Avatar({ url }) {
  return (
    <img
      loading="lazy"
      className="rounded-full h-10 cursor-pointer transition duration-150 transform hover:scale-110"
      src={url}
      alt="profile pic"
    />
  );
}

export default Avatar;
