// function ClickMe(){
//     console.log("button clicked")
// }
// function Mouseover(){
//     console.log("mouse over")
// }
// function dblClick(){
//     console.log("double clicked")
// }
// export default  function Button(){
//     return(
//         <div>
//             <button onClick={ClickMe}>click me</button>
//             <p onMouseOver={Mouseover}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, vel saepe velit quis quisquam nam iusto nemo enim odit officia dignissimos, ea nesciunt architecto illo obcaecati. Dolor ad nam veniam!</p>
//            <button onDoubleClick={dblClick}>double click</button>
//             </div>

// import { useState } from "react";

            
// //     )
// // }
// // useState//
// export default function Counter(){
//     let [count,setCount]=useState(0);
//     // let count=0;
    
//       let inCount = () =>{
//         setCount(count+1);
//       }
        
    
    
//     return(
//         <>
//         <h3>Count is {count}</h3>
//         <button className="p-[5px_10px] text-black border-[1px] border-black" onClick={inCount}>click me</button>
//         </>
//     )

// }
import { useState } from "react";
// export default function Like(){
//   let [isLiked,setisLiked]=useState(false);
//   let [count,setcount]=useState(0);
//   let toggleLiked= ()=>{
//     setisLiked(!isLiked);
//     setcount(count+1);

//   };
// return(
//   <>
//   <h1>Heart Show red when you click on it</h1>
//   <p>click={count}</p>
// <p onClick={toggleLiked}>
//   { isLiked?(<i className="fa-solid fa-heart text-red-500"></i>):( <i className="fa-regular fa-heart"></i>)}
// </p>
//   </>
// )
// }

export default function Counter(){
    let [count,setCount]= useState(0);
   
    
      let inCount = () =>{
        setCount((CurCount) =>{
          return CurCount+1;
        }) ;
        setCount((CurCount) =>{
          return CurCount+1;
        }) ;
      }
        
    
    
    return(
        <>
        <h3>Count is {count}</h3>
        <button className="p-[5px_10px] text-black border-[1px] border-black" onClick={inCount}>click me</button>
        </>
    )

}




 