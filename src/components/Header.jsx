import img from "../assets/nba-logo.png";
const Header = ({ setSearch }) => {
  return (
    <div className="text-center">
      <img src={img} alt="" />
      <h1 className="m-3">NBA Legends</h1>
      <input
        className="form-control w-50 mx-auto"
        type="search"
        name="name"
        id="name"
        placeholder="Search Player.."
      onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Header;
