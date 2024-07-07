import React, { useEffect, useState } from 'react'

export  function App() {

  const[block,setBlock]= useState([])

 

   useEffect(()=>{
     const newBlock=[];
     for(let i = 0; i < 9 ; i++){
      newBlock.push(<div key={i} className='block'></div>)
     }

     setBlock(newBlock);
   },[])

   var hod = 0;
   
   function handleClick(event){
    if (event.target.className == "block") {
      if (hod % 2 == 0) {
          event.target.innerHTML = "x";
      }
      else {
          event.target.innerHTML = "0";
      }
      hod++;
      winner()
   }
  }

  function winner(){
    var allblock = document.getElementsByClassName("block");
    if(allblock[0].innerHTML == "x" && allblock[1].innerHTML == "x" && allblock[2].innerHTML == "x" )alert("winner X");
    if(allblock[3].innerHTML == "x" && allblock[4].innerHTML == "x" && allblock[5].innerHTML == "x" )alert("winner X");
    if(allblock[6].innerHTML == "x" && allblock[7].innerHTML == "x" && allblock[8].innerHTML == "x" )alert("winner X");
    if(allblock[0].innerHTML == "x" && allblock[3].innerHTML == "x" && allblock[6].innerHTML == "x" )alert("winner X");
    if(allblock[1].innerHTML == "x" && allblock[4].innerHTML == "x" && allblock[7].innerHTML == "x" )alert("winner X");
    if(allblock[2].innerHTML == "x" && allblock[5].innerHTML == "x" && allblock[8].innerHTML == "x" )alert("winner X");
    if(allblock[0].innerHTML == "x" && allblock[4].innerHTML == "x" && allblock[8].innerHTML == "x" )alert("winner X");
    if(allblock[2].innerHTML == "x" && allblock[4].innerHTML == "x" && allblock[6].innerHTML == "x" )alert("winner X");

    if(allblock[0].innerHTML == "0" && allblock[1].innerHTML == "0" && allblock[2].innerHTML == "0" )alert("winner 0");
    if(allblock[3].innerHTML == "0" && allblock[4].innerHTML == "0" && allblock[5].innerHTML == "0" )alert("winner 0");
    if(allblock[6].innerHTML == "0" && allblock[7].innerHTML == "0" && allblock[8].innerHTML == "0" )alert("winner 0");
    if(allblock[0].innerHTML == "0" && allblock[3].innerHTML == "0" && allblock[6].innerHTML == "0" )alert("winner 0");
    if(allblock[1].innerHTML == "0" && allblock[4].innerHTML == "0" && allblock[7].innerHTML == "0" )alert("winner 0");
    if(allblock[2].innerHTML == "0" && allblock[5].innerHTML == "0" && allblock[8].innerHTML == "0" )alert("winner 0");
    if(allblock[0].innerHTML == "0" && allblock[4].innerHTML == "0" && allblock[8].innerHTML == "0" )alert("winner 0");
    if(allblock[2].innerHTML == "0" && allblock[4].innerHTML == "0" && allblock[6].innerHTML == "0" )alert("winner 0");
  } 
    


  return (
    <div className='App'>
        <div id='game' onClick={handleClick}>{block}</div>
    </div>
  )
}
