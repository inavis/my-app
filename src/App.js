
import { useState } from 'react';
import './App.css';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import ClearIcon from '@mui/icons-material/Clear';
import Chip from '@mui/material/Chip';

import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import { styled } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Badge from '@mui/material/Badge';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


import Tooltip from '@mui/material/Tooltip';
import Fade from '@mui/material/Fade';

import TextField from '@mui/material/TextField';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';



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
      genre:["Romance"],
      imdb: "7.4",

    },
    {
      name:"Soorarai Pottru ",
      poster:"https://moviegalleri.net/wp-content/gallery/soorarai-pottru-movie-stills-hd/suriya-soorarai-pottru-movie-stills-hd-3ca12e5.jpg",
      summary:"Nedumaaran Rajangam 'Maara' sets out to make the common man fly and in the process takes on the world's most capital intensive industry and several enemies who stand in his way.",
      year:"2020",
      genre:["Drama"],
      imdb:"9.1",
  
    },
    {
      name:"Doctor ",
      poster:"https://moviegalleri.net/wp-content/uploads/2020/02/Sivakarthikeyan-Doctor-Movie-First-Look-Poster-HD.jpg",
      summary:"When his fiancee's niece is kidnapped, a stoic army doctor and his motley team launch a rescue operation in which they need both wit and their wits.r",
      year:"2021",
      genre:["Drama/Action"],
      imdb:"7.7",
  
    },
    {
      name:"Kuruthi",
      poster:"https://m.media-amazon.com/images/M/MV5BNDlmZmM5N2MtNGUyMC00YmU2LWFmYzMtYWVlZDlhMmEwMmU3XkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_.jpg",
      summary:"Conflicts started to happen in Moosa Khader's home after the entry of a police officer and a murder convict.",
      year:"2021",
      genre:["survival-thriller"],
      imdb:"7.7",
    },
  ])

  const [show,setshow] = useState(false);
  const formstyle = {display:show?"block":"none"}



  return (
    
    <div className="App" >
     <br></br>
    <div className='bar'>
    <Button variant="contained" className='showformbtn' color="primary" onClick={()=>{setshow(!show)}}>ADD MOVIE <i class="fas fa-chevron-down"></i> </Button>
      {/* <button className='showformbtn btn btn-secondary' onClick={()=>{setshow(!show)}}>ADD MOVIE <i class="fas fa-chevron-down"></i> </button> */}
    </div>
   
    <div >

    <div>
      <div  style={formstyle} className='form'>
      <br></br>
      <div className='formhead text-primary'>ADD MOVIE DETAILS</div>
        <div>
        <TextField id="filled-basic"  className="textbox" label="Movie Name" variant="filled" onChange={(event)=>setname(event.target.value)} />
        </div>
        <br></br>
        <div>
        <TextField id="filled-basic"  className="textbox" label="Poster URL" variant="filled"  onChange={(event)=>setposter(event.target.value)}/>
        </div>
        <br></br>
        <div> 
        <TextField id="filled-basic"    className="textbox" label="Release year" variant="filled"  onChange={(event)=>setyear(event.target.value)} />
        </div>
        <br></br>
        <div>
        <TextField id="filled-basic"    className="textbox"  label="Genre" variant="filled" onChange={(event)=>setgenre(event.target.value)} />
        </div>
        <br></br>
        <div>
        <TextField id="filled-basic"    className="textbox" label="IMDB rating" variant="filled" onChange={(event)=>setimdb(event.target.value)} />
        </div>
        <br></br>
        <div>
        <TextField id="filled-basic"   className="textbox" label="Movie Summary" variant="filled"  onChange={(event)=>setsummary(event.target.value)}/>
        <br></br>
        </div>
        
      {/* <div>
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
      </div> */}
      <div>
        <br></br>
      <Button variant="contained"  onClick={()=>
        { 
          
          setmovielist([...movielist,{name:name,poster:poster,year:year,genre:genre,summary:summary,imdb:imdb}])}
  
        }>ADD MOVIE</Button>
        <br></br>
        {/* <button className='btn btn-primary' onClick={()=>
        { 
          
          setmovielist([...movielist,{name:name,poster:poster,year:year,genre:genre,summary:summary,imdb:imdb}])}
  
        }
         >ADD MOVIE</button> */}
      </div>
      {
      console.log(movielist)
    }
    </div>
    <br></br>

{/* 
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
 // console.log("movielist",movielist)
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
} */}





<div class="content">
  {/* {
    
     movielist.map(({ name, poster, summary, year, genre, imdb },index)=>(
       
      <Movie
      //Passing JSX along with other details

      // deletebutton= {<button className='remove-btn' id={name}  onClick={(e)=>{
      //   setmovielist(movielist.filter(({name})=>e.target.id!==name))
      // }}>X</button>}


      //Removing based on index
      //Map,filter has 2nd argument index
      //so allow all movies expect for the movie with index at map
      // deletebutton= {<button className='remove-btn'   onClick={()=>{
      //   const deleteindex=index;
      //   setmovielist(movielist.filter((mv,ind)=>ind!==deleteindex))
      // }}>X</button>}

      //USING mateial design
      deletebutton = {
        <Fab color="primary" aria-label="add" onClick={()=>{
          const deleteindex=index;
          setmovielist(movielist.filter((mv,ind)=>ind!==deleteindex))
        }}>
                <ClearIcon/>
        </Fab>
      }

      name={name}

      poster={poster}

      summary={summary}

      year={year}

      genre={genre}

      imdb={imdb}

     
    />
     ))

   } */}

  {

movielist.map(({ name, poster, summary, year, genre, imdb },index)=>(
       
  <RecipeReviewCard
  
  //USING mateial design
  deletebutton = {
    <Fab color="error" aria-label="add" onClick={()=>{
      const deleteindex=index;
      setmovielist(movielist.filter((mv,ind)=>ind!==deleteindex))
    }}>
            <ClearIcon/>
    </Fab>
  }

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



function Movie({deletebutton, name, poster, summary, year, genre, imdb}) {
 // console.log("movielist",movielist)
  const style = (imdb>8)?{color:"rgb(116, 9, 9)"}:{color:"white"};
  return (
    <div className="card">
      {deletebutton}
     <h2> {name}</h2>
     

     <div className="details">
        {/* <div className="detail">{year}</div>
        <div className="detail">{genre}</div>
        <div className="detail" style={style}>⭐{imdb}</div> */}

        {/* using material design */}
        <Stack direction="row" spacing={1}>
          <Chip label={year} color="primary" variant="outlined" />
          <Chip label={genre[0]} color="primary" variant="outlined" />
          <Chip label={"⭐"+imdb} color="success" variant="outlined" />
        </Stack>
      </div>

      <img src={poster} className="avatar" alt={name} />

      <p className="summary">{summary}</p>


    </div>
  );
}






export function RecipeReviewCard({deletebutton, name, poster, summary, year, genre, imdb}) {
  console.log({deletebutton, name, poster, summary, year, genre, imdb})

  //style for summary display:none/block
  const [show,setshow] = useState(false);
  const summarystyle = {display:show?"block":"none"}

  //variable for likes
  const [likes,setlikes] = useState(0);


  return (
    <Card sx={{ width: 285 ,backgroundColor:"black" ,color:"white"}}>
      <CardContent>
        <Typography style={{textAlign:"center"}}>
          {<h3>{name}</h3>}
        </Typography>
      </CardContent>

      {/* uses chip to display year,genre,imdb */}
      <CardContent>
      <Stack direction="row" spacing={1}>
          <Chip label={year} color="primary" variant="outlined" />
          <Chip label={genre} color="primary" variant="outlined" />
          <Chip label={"⭐"+imdb} color="success" variant="outlined" />
        </Stack>
      </CardContent>
      
      {/* display the movie poster using CardMedia */}
      <CardMedia
        component="img"
        height="320"
        image={poster}
        alt={name}
      />
    
        {/* Display summary when button is clicked */}
        <CardContent>
          {/* <Typography paragraph onClick={()=>{setshow(!show);}}>Summary <ExpandMoreIcon/></Typography> */}
         <div style={{textAlign:"center"}}>
         <Button variant="outlined" onClick={()=>{setshow(!show);}}>Summary <ExpandMoreIcon/> </Button>
         </div>
           <br></br>
          <Typography paragraph style={summarystyle}>
            {summary} 
          </Typography>
          
        </CardContent>
    
  
        {/* //have 2 buttons-delete(movie gets deleted) and like(shows count with bagde) with tooltip */}
  <CardContent>
  <div className='material-head'>
            <div>
            <Tooltip title="delete movie" TransitionComponent={Fade} TransitionProps={{ timeout: 600 }}>
                {deletebutton }
            </Tooltip>
            </div>
            <div>
            <Tooltip title="Like Movie">
              <Fab color="error" aria-label="like"  onClick={()=>setlikes(likes+1)} >
                  <Badge color="primary" badgeContent={likes} max={30}>
                      <FavoriteBorderIcon/>
                  </Badge>      
                </Fab>
            </Tooltip>
            
            </div>
          </div>
  </CardContent>
       
    </Card>
  );
}

