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
            
//     )
// }
// useState//
export default function Counter(){
    let count=0;
    function inCount(){
        count=count+1;
        console.log(count);
    }
    return(
        <>
        <h3>Count is {count}</h3>
        <button className="p-[5px_10px] text-black border-[1px] border-black" onClick={inCount}>click me</button>
        </>
    )

}
 