import React, { useState } from 'react';
import dare from './data';
import List from './List';


function App () {
  const [people,setPeople] = useState(dare);
  const showList = () =>{
     setPeople(dare);
     document.getElementById('button1').style.display = 'block'
     document.getElementById('button2').style.display = 'none'
      document.getElementById('count1').style.display = "none";
     document.getElementById('count').style.display = "block";
      
  }
  const clicking =()=>{
    setPeople([]);
  
     document.getElementById('button1').style.display = 'none'
     document.getElementById('button2').style.display = 'block'
     document.getElementById('count1').style.display = "block";
     document.getElementById('count').style.display = "none";

    

  }
  return(
    <main>
      <section id='23' className="container">
       <h3 id='count' >{people.length} birthdays today</h3>
       <h3 id='count1' >Show birthdays </h3>
       <List people={people} />
       <button className='btn1' id='button1'
         onClick={clicking}  >Clear all</button>
         <button className='btn2' id='button2' onClick={showList} >Show All</button>
        
      </section>
    </main>
  );
}

export default App;
