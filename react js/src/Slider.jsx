import React, { useState } from 'react'
import { GoArrowLeft, GoArrowRight } from 'react-icons/go'


function Slider() {

    const [counter, setCounter] = useState(0)


    const resturant = [
        { title: 'Biryani', price: 1200, category: 'Lunch' },
        { title: 'Korma', price: 1200, category: 'Dinner' },
        { title: 'Mandi', price: 1200, category: 'Breakfast' },
    ]
    // const [foods, setFoods] = useState(resturant)

    // console.log(foods);

    function incremnt() {
        if (counter < resturant.length - 1) {
            setCounter(counter + 1)
            console.log(counter);

        }

    }
    function decrement() {
        if (counter > 0) {
            setCounter(counter - 1)
        }
    }



    return (
        <div>
            <div style={{ display: "flex" }}>
                {counter > 0 ? <GoArrowLeft onClick={decrement}/> : ""} 

                {resturant[counter].title}
                {resturant[counter].price}
                {resturant[counter].category}
                {/* {resturant.map((items, index) => {
                    console.log(items); */}

                {/* return <div  key={index}>
                         <h1  >{items[counter].title}</h1>
                         <h2>{items[counter].price}</h2>
                         <h2>{items[counter].category}</h2>
                     </div> */}
                {/* }) } */}

                {counter < resturant.length - 1 ? <GoArrowRight onClick={incremnt} /> : ""}
            </div>

        </div>
    )
}

export default Slider