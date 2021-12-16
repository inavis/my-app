
import { useState } from 'react';
import './App.css';
// let movielist1=[]

function App() {
  

  const [name,setname] = useState("");
  const [poster,setposter] = useState("");
  const [year,setyear] = useState("");
  const [genre,setgenre] = useState("");
  const [summary,setsummary] = useState("");
  const [imdb,setimdb] = useState("");

  const [movielist ,setmovielist]=useState([])

  const [show,setshow] = useState(false);
  const formstyle = {display:show?"block":"none"}



  return (
    <div className="App" >
      <button className='showformbtn btn btn-secondary' onClick={()=>{setshow(!show)}}>ADD MOVIE <i class="fas fa-chevron-down"></i> </button>
    <div >

    <div>
      <div className='form bg-light' style={formstyle}>
      <div>
          <label>Name : </label> <br></br>
          <input placeholder="Enter movie name" className='textbox'  onChange={(event)=>setname(event.target.value)}/>
      </div>
      <div>
          <label>Poster url:  </label>  <br></br>
          <input placeholder="Enter poster url" className='textbox' onChange={(event)=>setposter(event.target.value)}/>
      </div>
      <div>
          <label>Release year : </label>  <br></br>
         <input placeholder="Enter movie'srelease year" className='textbox ' onChange={(event)=>setyear(event.target.value)}/>
      </div>
      <div>
          <label>Genre : </label>  <br></br>
          <input placeholder="Enter movie's genre" className='textbox' onChange={(event)=>setgenre(event.target.value)}/>
      </div>
      <div>
         <label>IMDB rating : </label> <br></br>
         <input placeholder="Enter movie's imdb rating" className='textbox' onChange={(event)=>setimdb(event.target.value)}/>
      </div>
      <div>
          <label>Summary : </label>  <br></br>
          <input placeholder="Enter movie's summary/description" className='textbox' onChange={(event)=>setsummary(event.target.value)}/>
      </div>
      <div>
        <button className='btn btn-primary' onClick={()=>
        { 
          // movielist1 =  [...movielist,{name:name,poster:poster,year:year,genre:genre,summary:summary,imdb:imdb}];
          setmovielist([...movielist,{name:name,poster:poster,year:year,genre:genre,summary:summary,imdb:imdb}])}
  
        }
         >ADD MOVIE</button>
      </div>
      {
      console.log(movielist)
    }
    </div>


    <div class="content">
  {
     movielist.map(({ name, poster, summary, year, genre, imdb })=>(
      <Movie
      
      name={name}
      poster={poster}
      summary={summary}
      year={year}
      genre={genre}
      imdb={imdb}
    />
     ))

   }


  </div>

     
    </div>

    </div>
    </div>
  );
}

export default App;


function Movie({ name, poster, summary, year, genre, imdb }) {
  console.log({name},{poster},{summary},{year},{genre},{imdb})
  const style = (imdb>8)?{color:"rgb(116, 9, 9)"}:{color:"white"};
  return (
    <div className="card" id={name}>
      <button className='remove-btn' id={name}  onClick={(e)=>{
        console.log(e.target.id);
        // movielist1= movielist1.filter((movie)=>e.target.id!=movie.name)
        // console.log(movielist1)
        
      }}>X</button>
     <h2> {name}</h2>
     

     <div className="details">
        <div className="detail">{year}</div>
        <div className="detail">{genre}</div>
        <div className="detail" style={style}>⭐{imdb}</div>
      </div>

      <img src={poster} className="avatar" alt={name} />

      <p className="summary">{summary}</p>


    </div>
  );
}

function updatemovielist(){

}



