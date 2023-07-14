import CardPlayer from "./CardPlayer";

import { data } from "../helper/data";

const CardContainer = ({ search }) => {
  console.log(data);
  return (
    <div className="row justify-content-center mt-4 mx-auto g-2 container">
      {data
        .filter((player) =>
          player.name
            .toLocaleLowerCase()
            .includes(search.trim().toLocaleLowerCase())
        )
        .map((player, i) => {
          return (
            <div className="col-12 col-md-6 col-lg-4 col-xl-3 mx-auto">
               <CardPlayer key={i} {...player} />
            </div>
          )
         
        })}
    </div>
  );
};

export default CardContainer;
