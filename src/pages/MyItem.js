import { useEffect, useState } from 'react'

const Menue = () => {
    const [categories, setCategories] = useState()
    useEffect(() => {
        const getCategories = async () => {
            const Category = await fetch('http://localhost:3000/category', {
                method: 'Get',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            const json = await Category.json()
            console.log(json)
            // window.alert(json.messages)
            if (json?.success) {
                setCategories(json?.data)
            }
        }
        getCategories()
    }, [])
    console.log(categories)
    return (
        <>
        </>
    )
}

export default Menue;