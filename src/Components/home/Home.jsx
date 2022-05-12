import { Container } from '@mui/material';
import React from 'react';
import Video from '../assets/homeimage/vid2.mp4';
import './Home.css';



  const Home = () => {
  return (
    
    
 


<>
 

      <div className="container">
        <div className="parallax">
          <div className="parallax_body">
            <div className="parallax_header">
              <h1 className="text">Будем знакомы!</h1>
              <p className="text_p">
                Кни́га — один из видов печатной продукции: непериодическое
                издание, состоящее из сброшюрованных или отдельных бумажных
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="advertising">
        <div className="advertising_left">
         <Container>
          <video autoPlay loop muted ><source src={Video} type='video/mp4' /></video> 
        </Container>
        </div>
        <div className="home_advertising_rigth">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            excepturi ea minus sit rerum quis debitis facere laborum eum dicta
            cumque hic culpa ut, earum, unde eaque iure est adipisci id voluptas
            nihil porro repellat consectetur? Minus animi odit laudantium
            molestiae voluptate modi numquam nemo obcaecati dolore, ullam saepe
            quos pariatur tempora ducimus iste error totam sequi! Corrupti,
            doloribus. Quae doloribus atque tenetur inventore ipsam explicabo
            animi. Beatae animi et aliquam nobis, ratione alias omnis ipsum
            repellat distinctio nisi delectus iusto. Nobis similique enim eius
            fuga commodi, animi non, rem laborum, voluptatibus aspernatur
            aliquid officiis perferendis modi magnam quia ad ut sapiente ea
            maiores error beatae eveniet. Saepe in velit expedita ut sequi amet
            ipsa. Ipsa repudiandae quia iusto suscipit!
          </p>
        </div>
        </div>
    </>
  );
};








  export default Home;






  










































