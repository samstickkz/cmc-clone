import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <h1>
          Larget <br /> Crypto Market place
        </h1>
        <p>
          {" "}
          welcome to the worlds larher crypto market place. sign up to expliore
          more bout crypto
        </p>
        <form>
          <input type="text" placeholder="search" />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="crypto-table">
        <div className="table-layout">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p>24H Change</p>
          <p>Market Cap</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
