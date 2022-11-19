import { Link } from "react-router-dom"
import './Item.css'


const Item = ({ data }) => {
    return (
        <div className="cards">
            <div className="item">
                <Link to={'/'}>
                    <img src={data?.img} id="imgs" />
                    <h4 id="name">{data?.name}</h4>
                    <p id="lat">{data?.latX}</p>
                    <p id="lon">{data?.longY}</p>
                    <p id="des">{data?.des}</p>
                    <img src={data?.Category?.icon} id="imgIcon" />
                    <h4 id="categoryname">{data?.Category?.name}</h4>
                    <h3 id="userName">{data?.User?.userName}</h3>
                    <h5 id="email">{data?.User?.email}</h5>
                </Link>
            </div>
        </div>
    )
};

export default Item