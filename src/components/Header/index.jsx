import './styles.css';
export const Header = ({busca, buscaODA}) => {
    return (
        <div className="menu">
         
        <div className="bocaweb">
            <p>BocaWeb</p>
            <img src="/images/logo.png" alt="Logo do Bocaweb - Uma boca de cor laranja, de onde sai uma figura na cor preta, que simboliza ondas sonoras. Parte das ondas estão em cor laranja, formando a letra W." width="100" height="auto" className="d-inline-block align-top"></img>
        </div>
        <div className='esquedo'>
            <div className='botao-menu'>
            <ul>
              <li>
                  <a href="localhost:3000" className="link-item">Inicio</a>
              </li>
              <li>
                  <a href="http://www.bocaweb.com.br/contato" className="link-item">Suporte</a>
              </li>
          </ul>
          </div>
          <input
                name='busca'
                type='text'
                value={busca}
                placeholder='Pesquisar ODAS'
                onChange={buscaODA}
            />   
    </div>
  </div>
    )
}