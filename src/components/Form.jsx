import { useState } from "react"

const inistialArtray= [{ desc:"momo",title:"n",amount:"7" },{ desc:"kk",title:"npop",amount:"8" }]

const Form = () => {
    const [desc,setDesc]=useState("")
    const [title,SetTitle]=useState("")
    const [amount,setAmount]=useState(1)
     
    const [items,setItems]=useState(inistialArtray)


// having a prepared function to add item and with the help 
//of setItems it will put the new created  to current state 
// but I add the curret state
    const onAddItems=(item)=> { 
        setItems((items) => [...items, item]);


     } 
    const handrlAdd=(e)=>{ 
        e.preventDefault()

        const newItem={ desc,title,amount
        } 
        onAddItems(newItem)


     } 
 
  return (
    <>
    <div>
        <form onSubmit={handrlAdd}>
            <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} />
            <input type="text" value={title} onChange={(e)=>SetTitle(e.target.value)} />
            <select   value={amount} onChange={(e)=>setAmount(e.target.value)}   id="">
                <option value={2}   >
                    2

                </option>
                <option value={3}   >
                    3

                </option>

            </select>


        <button  type="submit">add</button>
        </form>
        { items.map((it)=>(
            <div className="card" key={it.title}>
                <p> desc:{it.desc} </p>
                <p>title:{it.title} </p>
                <p>amount:{it.amount} </p>
 
            </div>
        )) } 
        
    </div>
    <button onClick={()=>setItems([])}>deleetAll</button>
        </>
  )
}

export default Form