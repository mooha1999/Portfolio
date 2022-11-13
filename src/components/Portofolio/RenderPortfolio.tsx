import portfolioData from "../../data/portfolio.json";

const RenderPortfolio = () => {
  const { portfolio } = portfolioData;
  return (
    <div className="images-container">
      {portfolio.map((val) => (
        <div className="image-box" key={Math.random()}>
          <img
            src={val.cover}
            className='portfolio-image'
            alt={val.title}
            />
          <div className="content">
            <p className="title">{val.title}</p>
            <h4 className="description">{val.description}</h4>
            <a target='_blank' href={val.url} className="btn">VIEW</a>
          </div>
        </div>
      ))}
      {/* <h1 color="white">a</h1> */}
    </div>
  );
};

export default RenderPortfolio;