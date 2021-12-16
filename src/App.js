
import { useState } from 'react';
import './App.css';


function App() {
  

  const [name,setname] = useState("");
  const [poster,setposter] = useState("");
  const [year,setyear] = useState("");
  const [genre,setgenre] = useState("");
  const [summary,setsummary] = useState("");
  const [imdb,setimdb] = useState("");

  const [movielist ,setmovielist]=useState([ {
      name: "O kadhal Kanmani",
      poster:
        "https://www.filmibeat.com/ph-big/2015/02/ok-kanmani-first-look_142424557800.jpg",
      summary:
        "It is love at first sight for a young couple repelled by concept of marriage, but their view shifts when they meet their older-couple neightbors",
      year: "2015",
      genre:["Romance", "tamil"],
      imdb: "7.4",

    },
    {
      name:"Soorarai Pottru ",
      poster:"https://moviegalleri.net/wp-content/gallery/soorarai-pottru-movie-stills-hd/suriya-soorarai-pottru-movie-stills-hd-3ca12e5.jpg",
      summary:"Nedumaaran Rajangam 'Maara' sets out to make the common man fly and in the process takes on the world's most capital intensive industry and several enemies who stand in his way.",
      year:"2020",
      genre:["Drama", "tamil"],
      imdb:"9.1",
  
    },
    {
      name:"Doctor ",
      poster:"https://moviegalleri.net/wp-content/uploads/2020/02/Sivakarthikeyan-Doctor-Movie-First-Look-Poster-HD.jpg",
      summary:"When his fiancee's niece is kidnapped, a stoic army doctor and his motley team launch a rescue operation in which they need both wit and their wits.r",
      year:"2021",
      genre:["Drama/Action", "tamil"],
      imdb:"7.7",
  
    },
    {
      name:"Kuruthi",
      poster:"https://m.media-amazon.com/images/M/MV5BNDlmZmM5N2MtNGUyMC00YmU2LWFmYzMtYWVlZDlhMmEwMmU3XkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_.jpg",
      summary:"Conflicts started to happen in Moosa Khader's home after the entry of a police officer and a murder convict.",
      year:"2021",
      genre:["survival-thriller", "malayalam"],
      imdb:"7.7",
    },
  ])

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
      movielist = {movielist}
      setmovie={setmovielist}
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


function Movie({ name, poster, summary, year, genre, imdb ,movielist,setmovie}) {
  console.log("movielist",movielist)
  const style = (imdb>8)?{color:"rgb(116, 9, 9)"}:{color:"white"};
  return (
    <div className="card" id={name}>
      <button className='remove-btn' id={name}  onClick={(e)=>{
        console.log(e.target.id);
        setmovie(movielist.filter(({name})=>e.target.id!=name))
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



