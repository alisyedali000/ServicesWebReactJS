import { useParams } from "react-router-dom";
import { content } from "./data";
import Detail from "../../Components/Detail/Detail";
import "./index.css";
const Service = () => {
  const { id } = useParams();
  const data = content.find((c) => c.link === id);
  const path = window.location.origin;
  return (
    <div className="">
      <div className="container mt-5 pt-5 px-3 px-sm-0">
        <div className="row">
          <div
            className=" col-sm-8 col-12 d-flex align-items-center"
            style={{ paddingBottom: "10rem" }}
          >
            <div className="">
              <img
                src={path + data.mainImg}
                alt="AC"
                style={
                  data.title === "Landscaping"
                    ? { width: 350, marginTop: -60 }
                    : data.title === "Civil Works"
                    ? {
                        marginLeft: -60,
                        width: 420,
                        marginTop: -140,
                        marginBottom: -85,
                      }
                    : { width: "13.25rem" }
                }
              />
              <h1
                className="quitos fw-light heading pt-4"
                style={{ fontSize: "4.375rem" }}
              >
                {data.title}
              </h1>
              <p className="lato text_yellow" style={{ fontSize: "1.68rem" }}>
                {data.subtitle}
              </p>
              <p
                className="poppin text-dynamic gray"
                style={{ fontSize: "1.56rem", paddingTop: "2.7rem" }}
              >
                {data.description}
              </p>
            </div>
          </div>
          <div className="col-sm-4 d-none d-md-block">
            {data?.img && (
              <img
                src={path + data.img}
                alt="AC"
                style={{ width: "-webkit-fill-available" }}
              />
            )}
          </div>
        </div>
      </div>
      <Detail data={data.services} />
      <div
        className="px-3 px-sm-0 container poppin gray py-5 my-sm-5"
        style={{ fontSize: "1.56rem" }}
      >
        <p>{data.footer}</p>
      </div>
      <div style={{ background: "#EF960B", padding: "50px 0" }}>
        <div className="container">
          <div className="row d-sm-flex align-items-sm-center justify-content-sm-between text-center text-sm-start">
            <div className="col-sm-6 col-12">
              <p
                className="quitos fw-light"
                style={{ fontSize: "3.5rem", lineHeight: "revert-layer" }}
              >
                {data.bookTitle}
              </p>
            </div>
            <div className="col-sm-4 col-12 poppin">
              <p className="gray" style={{ fontSize: "1.56rem" }}>
                {data.bookDescription}
              </p>
            </div>
            <div className="col-sm-2 col-12 text-sm-end poppin ">
              <button
                className="btn btn-white border-0 bg-white px-4 py-2"
                style={{
                  borderRadius: "1.56rem",
                  fontSize: "1.3rem",
                  width: "12.94",
                }}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
