import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from "../images/paramlogo.png";

import ListItemIcon from '@mui/material/ListItemIcon';

import transparentBack from "../images/transparent-back-1.png";
import transparentBack2 from "../images/transparent-back-2.svg";
import paramArrowRight from "../images/param-arrow-right.png";
import paramArrowLeft from "../images/param-arrow-left.png";
import people1 from "../images/people-1.png";
import people3 from "../images/people-3.svg";
import people2 from "../images/people-2.png";
import partners from "../images/partners.svg";
import mtn from "../images/mtn.svg";
import discovery from "../images/discovery.svg";
import stb from "../images/stb.svg";
import rad from "../images/rad.svg";
import vodacom from "../images/vodacom.svg";
import logowhite from "../images/paramlogo_white.svg";


import map from "../images/map.svg";

import techStack from "../images/tech-stack.svg";

import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Carousel from 'react-material-ui-carousel';



interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ['About', 'Services', 'Teams', 'Devs','Blog', 'Augmentation', 'Contact'];
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#F7F7F7',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
    
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item}>
            <ListItemButton sx={{ textAlign: 'left' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

function SliderItem(props:any)
{
    return (
      <Grid container item xs={12} style={{ padding:"15px"}}>
      <Grid style={{ padding:"15px", borderRadius:"25px"}} item xs={4}>
        <Item style={{ padding:"20%"}}>
            
            <h2> YOUR GROUP, YOUR LAWS</h2>
            {/* <p>{props.item.description}</p> */}

            <p >Our applicants will fit in with your team, follow your rules, and adapt to your company's culture and management style. You will have complete control over all team members.
            </p>
        </Item>
      </Grid>
      <Grid style={{ padding:"15px"}} item xs={4}>
      <Item style={{ padding:"20%"}}>
            
            <h2>  REDUCE THE COST OF HIRING</h2>
            {/* <p>{props.item.description}</p> */}

            <p  >
          

Hiring employees can come with a lot of expenses. With our resource augmentation services, you can reduce costs for hiring, infrastructure, and more. We take care of payroll and HR tasks, so you don't have to. It's hassle-free!  </p>
        </Item>
      </Grid>
      <Grid style={{ padding:"15px"}} item xs={4}>
      <Item style={{ padding:"20%"}}>
            
            <h2>EXPAND YOUR TALENT POOL</h2>
            {/* <p>{props.item.description}</p> */}

            <p  >
            

Struggling to find developers locally? We remove distance as an obstacle. We connect you with the best talent from around the world, so you can collaborate with brilliant individuals no matter where you are.</p>
        </Item>
      </Grid>
      
    </Grid>
    );
}

function SliderImageItem(props:any)
{
    return (
      <Grid container item xs={12}>
      <Grid item xs={2}>  
        <Item style={{ paddingTop: "25%", paddingBottom: "25%"}}>
        <img  src={mtn} style={{ height: "150px"}}   alt="Image" />
        </Item>
      </Grid>
      <Grid item xs={2}>
        <Item style={{ paddingTop: "25%", paddingBottom: "25%"}}>
        <img src={stb} style={{ height: "150px"}}  alt="Image" />
        </Item>
      </Grid>
      <Grid item xs={2}>
        <Item style={{ paddingTop: "25%", paddingBottom: "25%"}}>
            <img src={vodacom} style={{ height: "150px"}}  alt="Image" />
        </Item>
      </Grid>
      <Grid  item xs={2}>
        <Item style={{ paddingTop: "25%", paddingBottom: "25%"}}>
            <img src={discovery}  style={{ height: "150px"}}  alt="Image" />
        </Item>
      </Grid>
      <Grid item xs={2}>
        <Item style={{ paddingTop: "25%", paddingBottom: "25%"}}>
            <img src={rad}  style={{ height: "150px"}}  alt="Image" />
        </Item>
      </Grid>
      <Grid item xs={2}>
        <Item style={{ paddingTop: "25%", paddingBottom: "25%"}}>
            <img src={partners} style={{ height: "150px"}}  alt="Image" />
        </Item>
      </Grid>
      
    </Grid>
    );
}

var items = [
  {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!"
  },
  {
      name: "Random Name #2",
      description: "Hello World!"
  }
];


  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar style={{ background: '#F7F7F7' }} component="nav">
      <Toolbar style={{ padding:" 55px" }} >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
          
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <img   style={{ float: "left", maxHeight:"40px" }}src={logo} alt="Image" />
          </Typography>
          <Box style={{textAlign:"left",width:"75%"}} sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: 'darkgreen', paddingRight:"3%", paddingLeft:"5%" }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography>
         
          <Grid style={{ background: '#F7F7F7' }} container spacing={2}>
              
              {/* BANNER */}
            <Grid className="top-meun" item xs={12}>
            
                <div  style={{ backgroundImage: `url(${transparentBack})`, backgroundSize: "50% 100%", backgroundRepeat:"no-repeat" }}>
                    <h2  style={{ paddingRight: "15%",  paddingTop: "150px",  paddingBottom: "0px", fontSize: "40pt",  paddingLeft: "15%"
                    }}>
                    Connecting <span style={{color:"purple"}}>Great Organizations </span> With    <br/>
                     Great Solutions 
                   
                    <span style={{color:"purple"}}>Through Collaboration.</span>

                    </h2>
                    <p style={{  paddingRight: "25%",  paddingTop: "0px",  paddingBottom: "150px", fontSize: "15pt",  paddingLeft: "25%"
                    }}>Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Umy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea ct nullalla facilisi.</p>
                </div>
      
            </Grid>
              {/* BANNER */}

            {/* BANNER BOX */}

            <Grid item xs={6}>
                <Box style={{ paddingLeft:"20%", backgroundImage: `url(${paramArrowRight})`, backgroundSize: "40% 100%", backgroundRepeat:"no-repeat", backgroundPosition:"30%, 0" }}>
                    <img style={{ maxHeight:"450px"}} src={people1} alt="Image" />
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box  style={{ paddingRight:"20%" }} >
                    <Typography style={{ padding:"20%" }} >
                        <h3>AGILE TEAM</h3>
                        Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    </Typography>
                </Box>
            </Grid>

            <Grid item xs={6}>
                <Box  style={{ paddingLeft:"20%" }} >
                    <Typography style={{ padding:"20%" }} >
                        <h3>AGILE TEAM</h3>
                        Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box style={{ backgroundImage: `url(${paramArrowLeft})`, backgroundSize: "40% 100%", backgroundRepeat:"no-repeat", backgroundPosition:"30%, 0" }}>
                    <img style={{ maxHeight:"450px"}} src={people2} alt="Image" />
                </Box>
            </Grid>
            {/* BANNER BOX */}

            {/* OFFERING BOX*/}
            <Grid container spacing={2} style={{marginTop:"5%", backgroundColor:"#E9EBE9"}}>
                <Grid item xs={3}>
                    <h3 style={{paddingTop:"15%",fontSize: "3em", fontWeight: "100"}}>How Our Services will Benefit You</h3>
                </Grid>
               
                <Grid item xs={9}>
                    <Carousel>
                      {
                          items.map( (item, i) => <SliderItem key={i} item={item} /> )
                      }
                  </Carousel>
              </Grid>
             
            </Grid>
             {/* OFFERING BOX */}


            {/* PARTNER NETWORK BOX */}
            <Grid container style={{paddingTop:"5%", paddingBottom:"5%", backgroundColor:"#D8D8D8"}} item xs={12}>
                <Grid item xs={4}>
                  
               <h3 style={{paddingTop:"15%",fontSize: "3em", fontWeight: "100"}}>Partner Ecosystem</h3>
                        <Typography style={{ paddingTop:"10%", textAlign:"left", marginLeft:"25%" }} >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            <br/>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        </Typography>
               
                </Grid>
                <Grid item xs={8}>
                <img style={{ maxHeight:"550px"}} src={partners} alt="Image" />
                </Grid>
            </Grid> 
              {/* PARTNER NETWORK BOX */}

              {/* SKILLS BOX */}
            <Grid container style={{  backgroundColor:"#F7F7F7"}} item xs={12}>
                <Grid style={{ paddingTop:"3%"}} item xs={5}>
                        <h1 style={{textAlign:"left", marginLeft:"15%",fontWeight:"100", fontSize:"3em" }}>Skills We <br/>Have Available</h1>
                        <Typography style={{minHeight:"100%", backgroundRepeat:"no-repeat", backgroundPositionY:"-30%", marginLeft:"35%", textAlign:"left", width:"60%", backgroundImage: `url(${transparentBack2})`}} >
                   
                      <List style={{ paddingTop:"3%"}}  >
                        
                          <ListItem style={{fontWeight: "600", fontSize: "1.3em"}}>
                            {/* <ListItemIcon>
                            
                            </ListItemIcon> */}
                            Business Analysts
                            
                          </ListItem>
                      </List>
                      <List >
                        
                        <ListItem  style={{fontWeight: "600", fontSize: "1.3em"}}>
                          {/* <ListItemIcon>
                          
                          </ListItemIcon> */}
                         Software Developers
                        </ListItem>
                    </List>
                    <List >
                        
                    <ListItem  style={{fontWeight: "600", fontSize: "1.3em"}}>
                          {/* <ListItemIcon>
                          
                          </ListItemIcon> */}
                         Project Managers
                        </ListItem>
                    </List>
                    <List >
                        
                    <ListItem  style={{fontWeight: "600", fontSize: "1.3em"}}>
                          {/* <ListItemIcon>
                          
                          </ListItemIcon> */}
                         DevOps Engineers
                        </ListItem>
                    </List>
                    <List >
                        
                    <ListItem  style={{fontWeight: "600", fontSize: "1.3em"}}>
                          {/* <ListItemIcon>
                          
                          </ListItemIcon> */}
                          QA Engineers
                        </ListItem>
                    </List>


                        </Typography>
                        {/* <img style={{ marginLeft:"20%", paddingTop:"3%",width:"60%", height:"70%"}} src={transparentBack2} alt="Image" /> */}
                </Grid>
                <Grid item xs={7}>
                <img style={{ paddingTop:"10%",width:"50%"}} src={people3} alt="Image" />
                </Grid>
                
              
            </Grid> 
       
            <Grid container item xs={12}>
                    <Grid item xs={12} style={{marginBottom: "2%"}}>
                        <h1 style={{fontWeight:100,  fontSize:"3em"}}>Companies we worked with</h1>
                    </Grid>
                    <Grid item xs={12}>
                    <Carousel>
                      {
                          items.map( (item, i) => <SliderImageItem key={i} item={item} /> )
                      }
                  </Carousel>
                  </Grid>

                </Grid>
                {/* SKILLS BOX */}
                {/* RELATED SERVICES */}
                <Grid container style={{backgroundColor:"#263F22", marginTop: "5%"}} item xs={12 }>
                    <Grid item xs={12}>
                        <h1 style={{color:"white", fontWeight:"100"}}>Related Services</h1>
                    </Grid>
                    <Grid item xs={4} style={{padding: "5%"}}>
                          <Item>
                              <h4>REDUCE THE COST OF HIRING</h4>
                              <Typography style={{ padding:"10%" }} >
                                  Hiring employees can come with a lot of expenses. With our resource augmentation services, you can reduce costs for hiring, infrastructure, and more. We take care of payroll and HR tasks, so you don't have to. It's hassle-free!   
                              </Typography>
                          </Item>
                    </Grid>
                    <Grid item xs={4} style={{padding: "5%"}}>
                      <Item>
                          <h4>REDUCE THE COST OF HIRING</h4>
                          <Typography style={{ padding:"10%" }} >
                              Hiring employees can come with a lot of expenses. With our resource augmentation services, you can reduce costs for hiring, infrastructure, and more. We take care of payroll and HR tasks, so you don't have to. It's hassle-free!   
                          </Typography>
                      </Item>
                    </Grid>
                    <Grid item xs={4} style={{padding: "5%"}}>
                      <Item>
                          <h4>REDUCE THE COST OF HIRING</h4>
                          <Typography style={{ padding:"10%" }} >
                              Hiring employees can come with a lot of expenses. With our resource augmentation services, you can reduce costs for hiring, infrastructure, and more. We take care of payroll and HR tasks, so you don't have to. It's hassle-free!   
                          </Typography>
                      </Item>
                    </Grid>
                        {/* <img style={{ marginLeft:"20%", paddingTop:"3%",width:"60%", height:"70%"}} src={transparentBack2} alt="Image" /> */}
                </Grid>
                  {/* RELATED SERVICES */}

                  <Grid container style={{ padding:"5%" }}  item xs={12  }>
               
                    <Grid item xs={5}>
                          {/* <Item> */}
                              <h2>Technologies we use</h2>
                              <Typography style={{ padding:"20%" }} >
                                  Hiring employees can come with a lot of expenses. With our resource augmentation services, you can reduce costs for hiring, infrastructure, and more. We take care of payroll and HR tasks, so you don't have to. It's hassle-free!   
                              </Typography>
                          {/* </Item> */}
                    </Grid>
                    <Grid item xs={7}>
                      <img src={techStack} alt="Image" />
                    </Grid>
                  
                </Grid>

                
                <Grid container style={{maxHeight:"600px"}} item xs={12}>
                    <Grid item xs={4}>
                          <Item style={{ marginLeft:"30%",color:"white", backgroundColor:"#263F22"}}>
                              {/* <h4>REDUCE THE COST OF HIRING</h4> */}
                              <h1>Where we operate</h1>

                              {/* <Typography style={{ backgroundColor:"#263F22"}} > */}
                              
                              <ul style={{ textAlign:"left", listStyleType:"none"}}>

                                <li>Ethiopia</li>
                                <li>Angola</li>
                                <li>Egypt</li>
                                <li>South Africa</li>
                                <li>Rwanda</li>
                                <li>Nigeria</li>
                                <li>Kenya</li>
                                <li>Mauritius</li>
                                    
                                </ul>
                               
                                <ul style={{textAlign:"left", listStyleType:"none"}}>
                                  <li>South Africa</li>
                                  <li>Kenya</li>
                                  <li>South Africa</li>
                                  <li>South Africa</li>
                                  <li>South Africa</li>

                                </ul> 
                              {/* </Typography> */}
                          </Item>
                    </Grid>
                    <Grid item xs={8}>
                      <img style={{ maxHeight:"60%"}}  src={map} alt="Image" />
                    </Grid>
                </Grid>
           
                <Grid container item xs={12} style={{backgroundColor:"#F0ECEC",padding: "5%"}}>
                    <Grid item xs={12}>
                        <h1>Advantages of Using Param Solutions</h1>
                    </Grid>
                    <Grid item xs={3} style={{ padding: "15px"}}>
                          <Item>
                              <h4>REDUCE THE COST OF HIRING</h4>
                              <Typography style={{ padding:"10%" }} >
                                  Hiring employees can come with a lot of expenses. With our resource augmentation services, you can reduce costs for hiring, infrastructure, and more. We take care of payroll and HR tasks, so you don't have to. It's hassle-free!   
                              </Typography>
                          </Item>
                    </Grid>
                    <Grid item xs={3}  style={{ padding: "15px"}}>
                      <Item>
                          <h4>REDUCE THE COST OF HIRING</h4>
                          <Typography style={{ padding:"10%" }} >
                              Hiring employees can come with a lot of expenses. With our resource augmentation services, you can reduce costs for hiring, infrastructure, and more. We take care of payroll and HR tasks, so you don't have to. It's hassle-free!   
                          </Typography>
                      </Item>
                    </Grid>
                    <Grid item xs={3}  style={{ padding: "15px"}}>
                      <Item>
                          <h4>REDUCE THE COST OF HIRING</h4>
                          <Typography style={{ padding:"10%" }} >
                              Hiring employees can come with a lot of expenses. With our resource augmentation services, you can reduce costs for hiring, infrastructure, and more. We take care of payroll and HR tasks, so you don't have to. It's hassle-free!   
                          </Typography>
                      </Item>
                    </Grid>
                    <Grid item xs={3}  style={{ padding: "15px"}}>
                      <Item>
                          <h4>REDUCE THE COST OF HIRING</h4>
                          <Typography style={{ padding:"10%" }} >
                              Hiring employees can come with a lot of expenses. With our resource augmentation services, you can reduce costs for hiring, infrastructure, and more. We take care of payroll and HR tasks, so you don't have to. It's hassle-free!   
                          </Typography>
                      </Item>
                    </Grid>
                        {/* <img style={{ marginLeft:"20%", paddingTop:"3%",width:"60%", height:"70%"}} src={transparentBack2} alt="Image" /> */}
                </Grid>

                    
                <Grid container item xs={12}>
                    <Grid item xs={12}>
                        <h1>Our Results Speak For Us</h1>
                    </Grid>
                    <Grid item xs={12}>
                        <h3 style={{
                          fontSize: "2.5em",
                          paddingLeft: "20%",
                          paddingRight: "20%",
                          fontWeight: "100",
                      }}

                        >Summary of the Findings of Gig Economy IT Projects on a Platform vs. Traditional IT Projects</h3>
                    </Grid>
                    <Grid item xs={4}>
                          {/* <Item> */}
                              <h4 style={{fontSize: "6em",margin: "0px"}}>30%</h4>
                              <h4>
                              More Efficient Staffing

                              </h4>
                          {/* </Item> */}
                    </Grid>
                    <Grid item xs={4}>
                      {/* <Item> */}
                      <h4 style={{fontSize: "6em",margin: "0px"}}>30%</h4>
                              <h4>
                              More Efficient Staffing

                              </h4>
                          
                      {/* </Item> */}
                    </Grid>
                    <Grid item xs={4}>
                      {/* <Item> */}
                              <h4 style={{fontSize: "6em", margin: "0px"}}>30%</h4>
                              <h4>
                              More Efficient Staffing

                              </h4>
                      {/* </Item> */}
                    </Grid>
                   
                        
                    <Grid item xs={6} style={{textAlign: "right",padding: "3%"}}>
                   
                      <Button style={{padding: "3%", width: "25%"}} variant="outlined">Hire Developer</Button>
                    </Grid>

                    <Grid item xs={6} style={{textAlign: "left",padding: "3%"}}>
                      <Button style={{padding: "3%", width: "25%"}} variant="outlined">Hire Team</Button>
                    </Grid>

                </Grid>

                <Grid container item xs={12}>
                    <Grid item xs={12}>
                        <h1>Recent Articles</h1>
                    </Grid>
                    
                    <Grid item xs={4}>
                          {/* <Item> */}
                              <h4>REDUCE THE COST OF HIRING</h4>
                              <img style={{ paddingTop:"10%",width:"60%"}} src={people3} alt="Image" />
                              <Typography style={{ padding:"20%" }} >
                                  Hiring employees can come with a lot of expenses. With our resource augmentation services, you can reduce costs for hiring, infrastructure, and more. We take care of payroll and HR tasks, so you don't have to. It's hassle-free!   
                              </Typography>
                          {/* </Item> */}
                    </Grid>
                    <Grid item xs={4}>
                      {/* <Item> */}
                          <h4>REDUCE THE COST OF HIRING</h4>
                          <img style={{ paddingTop:"10%",width:"60%"}} src={people3} alt="Image" />
                          <Typography style={{ padding:"20%" }} >
                              Hiring employees can come with a lot of expenses. With our resource augmentation services, you can reduce costs for hiring, infrastructure, and more. We take care of payroll and HR tasks, so you don't have to. It's hassle-free!   
                          </Typography>
                      {/* </Item> */}
                    </Grid>
                    <Grid item xs={4}>
                      {/* <Item> */}
                          <h4>REDUCE THE COST OF HIRING</h4>
                          <img style={{ paddingTop:"10%",width:"60%"}} src={people3} alt="Image" />
                          <Typography style={{ padding:"20%" }} >
                              Hiring employees can come with a lot of expenses. With our resource augmentation services, you can reduce costs for hiring, infrastructure, and more. We take care of payroll and HR tasks, so you don't have to. It's hassle-free!   
                          </Typography>
                      {/* </Item> */}
                    </Grid>                   
                </Grid>

            <Grid container item xs={12} style={{padding:"5%",}}>
            <Grid item xs={2}>
              </Grid>
              <Grid item xs={8}>
              <Item style={{ backgroundColor:"#263F22", color: "white", borderRadius:"75px"}}>
                <h1 style={{padding:"4%"}}>Work with The World’s Top Talent </h1>
                <h4 style={{
                    paddingLeft: "10%",
                    fontSize:" 1.5em",
                    fontWeight:" 100",
                    paddingRight: "10%",
              }}>Gigster’s global team of experts and growing partner network provide the knowledge, tools, and p rocesses for a fully-managed software product build.</h4>
                  <Button style={{padding: "2%", marginBottom: "8%", width: "35%", fontSize:"1.5em", color: "white", backgroundColor: "rgba(96,96,96,0.2)"}} variant="text">Schedule a session</Button>
              </Item>
              </Grid>
              <Grid item xs={2}>
              </Grid>
            </Grid>

            <Grid container item xs={12}  style={{ backgroundColor:"#263F22"}}>

                    <Grid item xs={3}>
                          {/* <Item> */}
                             
                              <img style={{ paddingTop:"10%",width:"60%"}} src={logowhite} alt="Image" />
                              <img style={{ paddingTop:"5%",width:"100%", marginLeft:"20%"}} src={transparentBack} alt="Image" />
                              
                          {/* </Item> */}
                    </Grid>                    
                    <Grid style={{ paddingTop:"7%", color:"white"}}  item xs={3}>
                         <ul style={{textAlign:"left", listStyleType:"none"}}>
                          <li style={{fontWeight:"bold", marginBottom:"15px"}}> USEFUL LINKS </li>
                         
                          <li>Home </li>
                          <li>About us </li>
                          <li>Teams Page  </li>
                          <li>Devs </li>
                          <li>Augmentation </li>
                          <li>Blog </li>
                          <li>Terms of service </li>
                          <li>Privacy policy </li>
                         </ul>
                    </Grid>
                    <Grid style={{ paddingTop:"7%", color:"white"}}  item xs={3}>
                    <ul style={{textAlign:"left", listStyleType:"none"}}>
                    <li style={{fontWeight:"bold", marginBottom:"15px"}}> OUR SERVICES</li>
                    Our Services
                          <li>ERP </li>
                          <li>RPA </li>
                          <li>Cloud Migration </li>
                          <li>Blockchain </li>
                          <li>Machine Learning</li>
                          <li>Software Development </li>
                         </ul>
                    </Grid>
                    <Grid style={{ paddingTop:"7%", color:"white"}}  item xs={3}>
                    <ul style={{textAlign:"left", listStyleType:"none"}}>
                    <li style={{fontWeight:"bold", marginBottom:"15px"}}> CONTACT US</li>



                          <li>14 Commerce Crescent </li>
                          <li>Sandton, 2057 </li>
                          <li>South Africa </li>
                          <br/>
                          <li>Phone: 067 224 8032 </li>
                          <li>Email: John.kitenge@webparam.org </li>
                         </ul>
                    </Grid>     
                </Grid>

        </Grid>
        </Typography>
      </Box>
    </Box>
  );
}