import { Carousel } from "antd";

const Slider = () => (
  <Carousel autoplay className="box-border">
    <div>
      <h3>
        <img
          src="https://images.pexels.com/photos/380782/pexels-photo-380782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="h-[600px] w-full object-cover object-left"
        />
      </h3>
    </div>
    <div>
      <h3>
        <img
          src="https://images.pexels.com/photos/9996288/pexels-photo-9996288.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          className="h-[600px] w-full object-cover"
        />
      </h3>
    </div>
    <div>
      <h3>
        <img
          src="https://images.pexels.com/photos/1697218/pexels-photo-1697218.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="h-[600px] w-full object-cover"
        />
      </h3>
    </div>
  </Carousel>
);
export default Slider;
