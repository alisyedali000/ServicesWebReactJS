import { useParams } from 'react-router-dom';
import { content } from './data';
import Detail from '../../Components/Detail/Detail';
import "./index.css"
const Service = () => {
  const { id } = useParams();
  const [data] = content.filter((c) => c.link = id)
  // Fetch or use the id to display relevant data
  // For example, you can filter the itemsData array to get the specific item

  //   const item = itemsData.find(item => item.id === id);

  //   if (!item) {
  //     return <div>Service not found</div>;
  //   }
  console.log(id, data)
  return (

    <div>
      <div className="container mt-5 pt-5" >
        <div className="row">
          <div className=" col-sm-8 col-12 d-flex align-items-center">
            <div className="py-4">
              <img src={'http://localhost:3000' + data.mainImg} alt="AC" style={{ width: "10rem" }} />

              <h1 className='inter fw-light heading' style={{ fontSize: "4.375rem" }}>{data.title}</h1>
              <p className='lato text_yellow' style={{ fontSize: "1.7rem" }}>{data.subtitle}</p>
              <p className='poppin text-dynamic my-5 gray' style={{ fontSize: "1.4rem" }}>{data.description}</p>
            </div>
          </div>
          <div className="col-sm-4 d-none d-md-block">
            <img src={'http://localhost:3000' + data.img} alt="AC" style={{ width: "-webkit-fill-available" }} />
          </div>
        </div>
      </div>
      <Detail data={data.services} />
      <div className='container poppin gray py-5 my-sm-5' style={{ fontSize: "1.4rem" }}><p>{data.footer}</p></div>
      <div style={{ background: "#EF960B", padding: "50px 0" }}>
        <div className='container'>
          <div className='row d-sm-flex align-items-sm-center justify-content-sm-between text-center text-sm-start'>
            <div className='col-sm-4 col-12'>
              <p className='inter' style={{ fontSize: "3.5rem", lineHeight:"normal" }}>{data.bookTitle}</p>
            </div>
            <div className='col-sm-5 col-12 poppin'>
              <p className="gray" style={{ fontSize: "1.3rem" }}>{data.bookDescription}</p>
            </div>
            <div className='col-sm-3 col-12 text-sm-end poppin '>
              <button className='btn btn-white border-0 bg-white px-4 py-2' style={{ borderRadius: "1.3rem", fontSize: "1.3rem" }}>
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
