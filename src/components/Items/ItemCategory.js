import './Item.css'


const ItemCategory = ({ data }) => {
    return (
        <div className="cards">
            <div className="container">
                <div className="card">
                    <img src={data?.img} className="card-img-top" alt="..." id="Img" />
                    <div className="card-body">
                        <h5 className="card-title">{data?.item?.name}</h5>
                        <p className="card-text">{data?.item?.des}</p>
                        <a href="#" id='bottun' className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ItemCategory