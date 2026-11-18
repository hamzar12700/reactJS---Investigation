// import  { useState } from 'react'


// function App() {

//   // console.log(useState()[0]);

//   const [count , setCount] = useState(10);

//   // console.log(count);
//   // console.log(setCount("hellp"));
  
  


//   const rest = [
//     { itemName: "Biryani", price: 5000, category: "chicken" },
//     { itemName: "Korma", price: 5000, category: "chicken" },
//     { itemName: "BBQ", price: 5000, category: "chicken" },
//     { itemName: "Kheer", price: 5000, category: "meetha" },
//   ]

//   const friends =
//   return (
//     <div>

//       <Navbar  />
//       <div className='container'>

//         {rest.map((items, index) => {
//           return <Cards name={items} />

//         })}
//       </div>
//       <Button />
//       <Counter />
//     </div>
//   )
// }


// const btn = {
//   backgroundColor: "red",
//   color: "white",
//   padding: "5px 15px",
//   borderRadius: "10px",
//   border: "none"
// }

// export default App



// function Cards({ name }) {
//   // console.log(name);

//   function btnHandler() {
//     // console.log("btn clicked...............");

//   }

//   const { itemName, price, category } = name
//   // console.log(itemName);
//   // console.log(price);
//   // console.log(category);

//   return (


//     <div className='cards'>
//       <h1>{itemName}</h1>
//       <h1>{price}</h1>
//       <h1>{category}</h1>
//       <button onClick={btnHandler} style={btn} >Buy Now</button>

//     </ div>
//   )
// }


// function Navbar() {
//   return (
//     <div className='navbar' >
//       <h1>Hamza Raza</h1>
//       <ul>
//         <li>Home</li>
//         <li>About</li>
//         <li>Contact Us</li>
//         <li>Services</li>
//       </ul>
//     </div>
//   )
// }

// function Button() {
//   return (
//     <div>Button</div>
//   )
// }


// function Counter() {

//   const [counter, setCounter] = useState(0);
//   const [themeToggle, setThemeToggle] = useState(false);

// console.log(themeToggle);



//   // console.log(counter);
//   // console.log(setCounter);

// function incrementHandler() {
//   if (counter < 20 ) {
//     setCounter(counter+1);
    
//   }
//   // setCounter(counter+1);
// }
// function decrementHandler() {
//   if (counter > 0 ) {
//     setCounter(counter-1);
    
//   }
// }

// function theme() {
//   console.log("theme fn");

//   if (themeToggle == false) {
//     document.body.style.backgroundColor = "white"
//     document.body.style.color = "black"
//     setThemeToggle(true)
//   }else{
//     document.body.style.backgroundColor = "black"
//     document.body.style.color = "white"
//     setThemeToggle(false)
//   }
  
// }


//   return (
//     <div>

//       <button onClick={incrementHandler}>+</button>
//       <h1>{counter}</h1>

//       <button onClick={decrementHandler}>-</button>

// <br /><br />
//       <button onClick={theme} className={themeToggle ? "black" : "white"}>{themeToggle ? "Dark" : "Light"}</button>
//       <br />
//       <br />
//     </div>
//   )
// }



import React, { useState } from 'react'

function App() {
 

  const [dark , setDark] = useState(false);


  if (dark) {
    document.querySelector("body").style.backgroundColor = 'black'
    document.querySelector("body").style.color = 'white'
  }else{
    
    document.querySelector("body").style.backgroundColor = 'white'
    document.querySelector("body").style.color = 'black'
  }


  const resturant = [
    { title: 'Biryani', price: 1200, category: 'Lunch' },
    { title: 'Korma', price: 1200, category: 'Dinner' },
    { title: 'Mandi', price: 1200, category: 'Breakfast' },
  ]

  const [foods, setFoods] = useState(resturant)

  const [input, setInput] = useState('')

 

  
  function handleBtn(items) {
    // setFoods(resturant);

    if (items == 'All') {
      setFoods(resturant)
    }else{ 
      let filteredData = resturant.filter((itms , index)=>{
        return itms.category ==items
      })
      setFoods(filteredData)
    }

    // console.log(filteredData);

    

    console.log('hello world......',items);
    
  }

  var btn = ['All' ,'Breakfast','Lunch','Dinner'];


  function searchBtn() {
    console.log(input);

    const searchData = foods.filter((itm ,index)=>{
      return itm.title == input
    })

    setFoods(searchData);
    
  }


  // function darkTheme() {
  //   setDark()
  // }
  return (
    <div className={dark ? 'dark' : 'light'} >


<button onClick={()=>setDark(!dark)} >{dark ? "Light" : "Dark" }</button>
<br />
<br />
<br />
<br />


{btn.map((items , index)=>{
  return <button key={index} onClick={()=>handleBtn(items)}>{items}</button>
})}

      {/* <button>Breakfast</button>
      <button>Lunch</button>
      <button>Dinner</button> */}
<br />
<br />
<input value={input} type="text" onChange={(e)=>setInput(e.target.value)} />

<button onClick={searchBtn} >Search</button>

      <div>
        {foods.length > 0 ? foods.map((items , index)=>{
          return <div key={index}>
            <h1  >{items.title}</h1>
            <h2>{items.price}</h2>
            <h2>{items.category}</h2>
          </div>
        }) : <h1>No Data Found</h1> }
      </div>
    </div>
  )
}

export default App