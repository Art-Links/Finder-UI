import { Link } from "react-router-dom"
import './Item.css'


const Item = ({ data }) => {
    return (
        <div className="cards">
            <div className="item">
                <Link>
                    <img src={data?.img} id="img" />
                    <h4 id="name">{data?.name}</h4>
                    <p id="lat">{data?.latX}</p>
                    <p id="lon">{data?.longY}</p>
                    <p id="des">{data?.des}</p>
                    <img src={data?.Category?.icon} id="img" />
                    <h4 id="categoryname">{data?.Category?.name}</h4>
                    <h3 id="userName">{data?.User?.userName}</h3>
                    <h5 id="email">{data?.User?.email}</h5>
                </Link>
            </div>
            <div className="card">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h3 className="card-title">Card title</h3>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">An item</li>
                    <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A third item</li>
                </ul>
                <div className="card-body">
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
            </div>
        </div>
    )
};

export default Item