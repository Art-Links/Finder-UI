import { Link } from "react-router-dom"
import './Category.css'



const Category = ({ data }) => {
    return (
        <>
            <div className="cat">
                <Link to={'/items'}>
                    <img src={data?.icon} id="img" />
                    <h4 id="names">{data?.name}</h4>
                </Link>
            </div>
        </>
    )
}

export default Category