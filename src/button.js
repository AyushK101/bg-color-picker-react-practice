
export default function Button({setColor,color}) {
    
    return (
        <button className="border border-black rounded-lg px-4 py-2 "
          style={{backgroundColor: color }} onClick={ (e) => setColor(`${e.target.innerText}`)} >{color}</button>
    )
}


