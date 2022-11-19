import { Link } from "react-router-dom"



const Category = ({ data }) => {
    return (
        <div>
            <Link>
                <img src={data?.icon} id="img" />
                <h4 id="name">{data?.name}</h4>
            </Link>
        </div>
    )
}

export default Category