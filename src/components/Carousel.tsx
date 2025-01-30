import food1 from "../image/food1.jpg";
import food2 from "../image/food2.jpg";
import food3 from "../image/food3.avif";
import food4 from "../image/food4.jpg";

const Carousel = () => {
  return (
    <div id="carouselExampleInterval" className="carousel slide w-[50vw] tablet:w-[80vw] mx-auto rounded-[2vw] phone:w-full *" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img src={food1} className="block w-[100%] " alt="Food 1" />
        </div>  
        <div className="carousel-item" data-bs-interval="10000">
          <img src={food2} className="block w-[100%] " alt="Food 2" />
        </div>
        <div className="carousel-item" data-bs-interval="10000">
          <img src={food3} className="block w-[100%] " alt="Food 3" />
        </div>
        <div className="carousel-item" data-bs-interval="10000">
          <img src={food4} className="block w-[100%] " alt="Food 4" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span className="carousel-control-prev-icon bg-[black] p-[1.5vw] w-[1vw] h-[1vw] rounded " aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span className="carousel-control-next-icon bg-[black] p-[1.5vw] w-[1vw] h-[1vw] rounded " aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
