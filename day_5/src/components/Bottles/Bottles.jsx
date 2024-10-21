import { useEffect, useState } from "react";
import Bottle from "./Bottle";
import PropTypes from "prop-types";

const Bottles = ({ handelCount, handelImg }) => {
  const [bottle, setBottle] = useState([]);

  handelCount(bottle.length);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("bottles.json");
      const data = await res.json();
      setBottle(data);
    };
    getData();
  }, []);
  return (
    <div className="grid grid-cols-4  gap-4">
      {bottle.map((bottle) => (
        <Bottle bottle={bottle} key={bottle.id} handelImg={handelImg} />
      ))}
    </div>
  );
};

Bottles.propTypes = {
  handelCount: PropTypes.func.isRequired,
  handelImg: PropTypes.func.isRequired,
};

export default Bottles;
