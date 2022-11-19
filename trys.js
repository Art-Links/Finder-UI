import { useEffect, useState } from "react";
import SingleBookElement from "./SingleBookElement/SingleBookElement";
import Footer from "../Footer/Footer";
import HeroSection from "../HeroSection/HeroSection";
import Navbar from "../Navbar/Navbar";
import SecondNavbar from "../SecondNavbar/SecondNavbar";
import Sidebar from "../SideBar/SideBar";
import Navbar1 from "../Navbar/Navbar1";
// import '../../assets/css/demo/demo25/demo25.css'
// import '../../assets/css/demo25.min.css'

const Books = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        const getBooks = async () => {
            const booksList = await fetch(`${process.env.REACT_APP_API_URL}/books/all`, {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            const json = await booksList.json()
            console.log(json)
            if (json?.success) {
                setBooks(json?.data)
            }
        }
        getBooks()
    }, [])
    // console.log("books",books)
    return(
        <>
            {/* <body className="boxed"> */}
                <div className="page-wrapper">
                    <Navbar1/>
                    <HeroSection />
                    <SecondNavbar/>
                    <main className="main">
                        <div className="bg-white">
                            <div className="container">
                                <div className="row main-content">
                                    <Sidebar books={books} />
                                    <div className="col-lg-9">
                                        <div className="row">
                                            {
                                                books.map((book, i) => {
                                                    return <SingleBookElement book={book} key={i} />
                                                })
                                            }
                                        </div>
                                    </div>  
                                </div>
                            </div>
                        </div>
                    </main>
                    <Footer />
                </div>
            {/* </body> */}
        </>
    )
}
export default Books;