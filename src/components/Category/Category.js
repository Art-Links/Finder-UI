import { Link } from "react-router-dom"
import './Category.css'



const Category = ({ data }) => {
    return (
        <>
            <div className="cat">
                <Link className="at" to={'/items'}>
                    <img src={data?.icon} id="img" />
                    <h5 id="names">{data?.name}</h5>
                </Link>
            </div>
        </>
    )
}

export default Category