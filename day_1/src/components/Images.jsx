import { signal } from "@preact/signals-react";

export const setImages = signal([]);

// eslint-disable-next-line no-unused-vars
export default function Images({ img }) {
  console.log();
  return setImages.value.map((img, index) => (
    <img
      key={index}
      src={img}
      className="rounded-xl w-full h-28 object-cover"
      alt=""
    />
  ));
}
