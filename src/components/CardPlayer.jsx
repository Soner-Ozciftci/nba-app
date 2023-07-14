import { useState } from "react";
import "../CardPlayer.css";
const CardPlayer = ({ name, img, statistics }) => {
  const [visible, setVisible] = useState(true);
  return (
    
      <div
        onClick={(e) => setVisible(!visible)}
        className="card"
        style={{ width: "18rem",height: "24rem" }}
      >
        {visible ? (
          <img src={img} className="card-img-top" style={{ height: "18rem" }} />
        ) : (
          <ul className="m-auto mt-4" style={{ height: "18rem" }}>
            {statistics.map((item, i) => {
              return (
                <li key={i} className="mt-1">
                  🏀{item}
                </li>
              );
            })}
          </ul>
        )}
        <div className="card-body">
          <h5 className="card-title text-center">{name} </h5>
        </div>
      </div>
    
  );
};

export default CardPlayer;
