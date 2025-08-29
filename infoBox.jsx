import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import "./infoBox.css";


export default function InfoBox({info}){
    const INIT_URL = "https://images.unsplash.com/photo-1599117583064-48d912976a91?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let COLD_URL ="https://images.unsplash.com/photo-1579003593419-98f949b9398f?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let HOT_URL ="https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let RAIN_URL= "https://media.istockphoto.com/id/1322717990/photo/thick-dark-black-heavy-storm-clouds-covered-summer-sunset-sky-horizon-gale-speed-wind-blowing.jpg?s=2048x2048&w=is&k=20&c=mewnYZ8WxMj38N9MqXLhUC-huiT0wkuEXssd0VTYDaU=";
    
    return(
       
        <div className="InfoBox">
      <div className='cardContainer'>
      <Card sx={{ maxWidth: 500 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={info.humidity >80
             ? RAIN_URL : info.temp >15 
             ? HOT_URL: COLD_URL}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
              {info.humidity >80
                ? <ThunderstormIcon/> : info.temp >15 
                ?<WbSunnyIcon/> : < AcUnitIcon  />}
            
            
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary'  }}>
            <p>Temperature = {info.temp}&deg;C</p>
            <p>Humidity = {info.humidity}</p>
            <p>Min Temp = {info.tempMin}&deg;C</p>
            <p>max Temp = {info.tempMax}&deg;C</p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    </div>
    
    );
}