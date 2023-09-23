import { useState } from "react"

const Announcement = () => {
    const styleOpened={
        display:"flex",
        background:"#efd4d2",
        padding:"10px 20px",
        display:"flex",
        justifyContent:"space-between"
    }
    const styleClosed={
        display:"none"
    }
    const [getIsClosed,setIsClosed]=useState(false)
    const isClosed=()=>{
        setIsClosed(!getIsClosed);
    }
  return (
    <div className="container" style={!getIsClosed?styleOpened:styleClosed}>
        <p>Pay over 3, 6, or 12 months starting at 0% APR.</p>
        {!getIsClosed&&
        <button onClick={isClosed} style={{background:"none",color:"red",border:"none",cursor:"pointer"}}>X</button>
        }
    </div>
  )
}

export default Announcement
