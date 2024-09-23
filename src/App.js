import { useState } from "react";
import Button from './button';

function App() {
  let [color,setColor] = useState('red');


  return (
   <>
    <div className=" w-screen h-screen duration-500 bg-black flex items-end pb-8"
      style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap py-4 justify-around bg-yellow-50 inset-x-0 h-20 bottom-0 px-3 rounded-sm mx-3 mb-3">
        <div className="flex flex-wrap grow-0  gap-2">
          
          <Button setColor={setColor} color={'red'}/>
          <Button setColor={setColor} color={'green'}/>
          <Button setColor={setColor} color={'lime'}/>
          <Button setColor={setColor} color={'orange'}/>
          <Button setColor={setColor} color={'yellow'}/>
          <Button setColor={setColor} color={'pink'}/>
        </div>
      </div>  
    </div>
   </>
  );
}

export default App;
