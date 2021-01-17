import React from 'react';
import './home.css';
import imagens from  '../imagens/aya2.jpg';
import imagem from '../imagens/aya1.jpg'

export default function Home(){
  return(
   <>
   <header><h1>Kunoichi</h1></header><br/><br/>


      <img className={"imagem1"} alt="aya1" src={imagem} width="220px" height="220px"/>

       <p className={"p1"}>Diretamente da vila da folha (não disse qual, rs),<br/>
         Kunoichi é um projeto sonoro e performático, nascido da pesquisa e das inquietações de Ayanami Yuri.<br/>
          Multiartista, iniciou seus trabalhos em teatro e danças urbanas, em específico, o voguing.<br/> Onde, desde 2015 pesquisa sobre ballroom no coletivo chamado Vogue 4 Recife e, criou a House of Kunoichis junto com suas filhas. <br/>
        </p>
        <br/><br/><br/><br/>
                
        <img className={"imagem2"} alt="aya2" src={imagens} width="220px" height="220px"/>
  
        <p className={"p2"}>
          Através do voguing e da inserção de suas performances nos clubes noturnos<br/>
          descobriu sua paixão pela música eletrônica e a mixagem. <br/>
            Em 2018, começou suas primeiras experimentações com o house music e o techno e,<br/>
             com o tempo, passou a acrescentar mais sonoridades afrolatinas, como o ballroom beat, o funk carioca,<br/>
             o rave e o brega funk.
          </p>
          <br/><br/><br/><br/>

             <h2>  <a className={"aqui"} href="https://soundcloud.com/xxkun01ch1xx">SoundCloud</a></h2>
             <h2>  <a className={"aqui"} href="https://www.mixcloud.com/xxkunoichixx/">MixCloud</a></h2>
             <h2>  <a className={"aqui"} href="https://www.instagram.com/ku.no_ichi/">Instagram</a></h2>
             <h2>  <a className={"aqui"} href="https://twitter.com/ayanami_3000">Twitter</a></h2>

                            <br/><br/><br/><br/>


                            


       <footer>Copyright © Ayanami Yuri - Todos os direitos reservados.<br/>
                       Feito por Ayanami Yuri ♥.</footer>

     
   </>
  );



}