import React from 'react'

export default function Form({val, setVal, search}) {
    return (
        <div className='inputt'>
        <form onSubmit={search}>
         
            <input value={val} onChange={(e)=>{
                setVal(e.target.value)
            }}
         
            />
            <button>Search</button>
        </form>
        </div>
    )
}
