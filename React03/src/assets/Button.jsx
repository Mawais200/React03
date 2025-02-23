function ClickMe(e) {
    e.target.style.backgroundColor = "gold";
}
export default  function Button(){
    return(
        <div>
            <button onClick={ClickMe}>click me</button>
            </div>
    )
}
