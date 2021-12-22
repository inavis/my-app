
import './App.css';

function App() {
  const plans = [
    {
      name:"FREE",
      rate:0,
    features:[{ft:"Single User",avail:true,bold:false},
              {ft:"5GB Storage",avail:true,bold:false},
              {ft:"Unlimited Public Projects",avail:true,bold:false},
              {ft:"Community Access",avail:true,bold:false},
              {ft:"Unlimited Private Projects",avail:false,bold:false},
              {ft:"Dedicated Phone Support",avail:false,bold:false},
              {ft:"Free Subdomain",avail:false,bold:false},
              {ft:"Monthly Status Reports",avail:false,bold:false},
            ]
    },
    {
      name:"PLUS",
      rate:9,
      features:[{ft:"5 Users",avail:true,bold:true},
                {ft:"50GB Storage",avail:true,bold:false},
                {ft:"Unlimited Public Projects",avail:true,bold:false},
                {ft:"Community Access",avail:true,bold:false},
                {ft:"Unlimited Private Projects",avail:true,bold:false},
                {ft:"Dedicated Phone Support",avail:true,bold:false},
                {ft:"Free Subdomain",avail:true,bold:false},
                {ft:"Monthly Status Reports",avail:false,bold:false},
              ]
      },
      {
        name:"PRO",
        rate:49,
        features:[{ft:"Unlimited Users",avail:true,bold:true},
                  {ft:"150GB Storage",avail:true,bold:false},
                  {ft:"Unlimited Public Projects",avail:true,bold:false},
                  {ft:"Community Access",avail:true,bold:false},
                  {ft:"Unlimited Private Projects",avail:true,bold:false},
                  {ft:"Dedicated Phone Support",avail:true,bold:false},
                  {ft:"Unlimited Free Subdomains",avail:true,bold:false},
                  {ft:"Monthly Status Reports",avail:true,bold:false},
                ]
        },
  ];

  return (
    <div className="App" >
    <div ></div>

      <div>
          <div className="content">
          {
         plans.map(({name,rate,features})=>(
           <Plans name={name} rate={rate} features={features}/>
         ))
       }

           
          </div>
      </div>
      <br></br>
      
     
      

    </div>
  );
}

export default App;

function Plans({name,rate,features }) {

  return (
    <div className="card">
     <div className="title">
        <div className="planname">{name}</div>
        <br></br>
        <div className="planrate"><span className="rate">${rate}</span><span className="month">/month</span></div>
     </div>
     <hr></hr>
    <div className="features">
      
      {
        features.filter(({ft,avail}) =>(
          avail===true
        )).map(({ft})=><Available content={ft}/>)
      }
       {
        features.filter(({ft,avail}) =>(
          avail===false
        )).map(({ft})=><Notavailable content={ft}/>)
      }
    </div>
    <div className="button">

    </div>

    </div>
  );
}

function Available({content}){
  console.log(content);
  return (
    <div className="feature-avail"><i class="fas fa-check"></i>            {content}</div>
  );
}
function Notavailable({content}){
  console.log(content)
  return (
    <div className="feature-notavail"><i class="fas fa-times"></i>              {content}</div>
  );
}
