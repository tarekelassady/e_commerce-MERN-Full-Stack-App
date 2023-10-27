import { colors } from "./colors";

const ColorPicker = ({setColor,setColorPickerVisible}) => {
  const style={
    container:{
      position:"absolute",
      display:"flex",
      flexWrap:"wrap",
      width:"200%",
      top:25,
      left:0,
      zIndex:"999",
      background:"white",
      boxShadow:"0px 1px 2px var(--first-color)",
    },
    color:{
      width:"24px",
      height:"24px",
      cursor:"pointer"
    }
  }
  return (
    <div>

        <div className="color-picker-container" style={style.container}>
            {colors.map(color=>(
                <div className="color" title={color} onClick={(e)=>{setColor(e.target.title);setColorPickerVisible(false);}}
                style={{background:color,...style.color}}/>

            ))}
        </div>


    </div>
  )
}

export default ColorPicker
