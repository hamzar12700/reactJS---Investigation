import React from 'react'

function Hello() {
    const isLogged = true
    const hasMessage = true

const isDark = false
    const stock = 8
    return (
        <div className={isDark ? 'black': 'white'}>
            <h1 className={`${hasMessage ? 'visible': 'unvisible'}`} 
            style={{backgroundColor : stock > 5 ?"purple" :"red"}}>{stock > 5 ? 'Stock Avaible': "Out of stock"}</h1>
            {hasMessage && <h1>Message aa chuka hai........</h1>}
            {/* {isLogged ? <h1>User LoggedIn</h1> : <h1>User Not Found</h1> } */}
        </div>
    )


    //     let message;
    //  if (isLogged) {
    //      message = <h1>Hello world</h1>
    //  }else{
    //      message = <h1>user not found</h1>
    //  }

    //  return message
}

export default Hello