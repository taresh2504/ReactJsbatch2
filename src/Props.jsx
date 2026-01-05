import Child from "./Child"
import img1 from './assets/react.svg'


let Props=()=>{
    return(
        <>
        <h2>This is props page</h2>
        {/* <Child myname='Taresh' age={20} city='raisen'/> */}
        <div style={{display:"flex",gap:20}}>
        <Child myimg='/vite.svg' mydes='Vite-logo' myprice='499' />
        <Child myimg={img1} mydes='React-logo' myprice='100' />
        </div>
        </>
    )
}

export default Props

