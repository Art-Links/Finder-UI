import Navbar from '../Navbar';
import './Item.css'


const Item = ({ data }) => {
    return (
        <div className="cards">
            {/* <div className="item">
                <Link to={'/'}>
                    <img src={data?.Category?.icon} id="imgIcon" />
                    <h4 id="categoryname">{data?.Category?.name}</h4>
                    <img src={data?.img} id="imgs" />
                    <h4 id="name">{data?.name}</h4>
                    <p id="lat">{data?.latX}</p>
                    <p id="lon">{data?.longY}</p>
                    <p id="des">{data?.des}</p>
                    <h3 id="userName">{data?.User?.userName}</h3>
                    <h5 id="email">{data?.User?.email}</h5>
                </Link>
            </div> */}
            <div className="container">
                <div className="card">
                    <img src={data?.img} className="card-img-top" alt="..." id="Img" />
                    <div className="card-body">
                        <h5 className="card-title">{data?.name}</h5>
                        <p className="card-text">{data?.des}</p>
                        {/* <p className="card-text">{data?.latX}</p>
                    <p className="card-text">{data?.longY}</p> */}
                        <h3 id="userName">{data?.User?.userName}</h3>
                        <h5 id="email">{data?.User?.email}</h5>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Item