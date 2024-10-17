// eslint-disable-next-line no-unused-vars
export default function Images({ petImages }) {
  return petImages.map((img, index) => (
    <img
      key={index}
      src={img}
      className="rounded-xl w-full h-28 object-cover"
      alt=""
    />
  ));
}
