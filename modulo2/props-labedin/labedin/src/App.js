import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import FotoPessoal from '../src/img/1611580065684.jpg';
import ImgDerbak from '../src/img/derbak.jpg'
import ImgFalaMulher from '../src/img/falamulher.png'
import CardPequeno from './components/CardPequeno/CardPequeno';



function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={FotoPessoal}
          nome="Luiza Cioffi" 
          descricao="Oi, eu sou a Luiza Cioffi. Sou aluna da Labenu. Não entendi completamente JS, mas já estou aqui no react e vamos que vamos!"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />

        <CardPequeno
          imagem="https://thumbs.dreamstime.com/b/email-abrir-%C3%ADcone-novo-bonito-meticulosamente-projetado-aberto-e-mail-vetor-bem-organizado-totalmente-edit%C3%A1vel-158557376.jpg"
          nome="lc@emaildecontato.com" 
          descricao="Rua Sabiá, Bairro Ipuã, Teresa do Sul/SP" 
        />

      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={ImgDerbak}
          nome="Derbak Foods" 
          descricao="Fabricação de produtos alimentícios para venda em supermercados" 
        />
        
        <CardGrande 
          imagem={ImgFalaMulher}
          nome="Associação Fala Mulher" 
          descricao="Empoderando mulheres e fortalecendo famílias" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />
        
      </div>
    </div>
  );
}

export default App;
