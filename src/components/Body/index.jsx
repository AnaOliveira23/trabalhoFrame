import './styles.css'
export const Body = ({odas}) => {

  return( 
    <div className='lsita'>
          <p> {odas.length} odas </p>
        <div className='flex'>
          {odas.map(oda => (
              <div>
                <div className='box' key={oda._id}>
                      <h2>nome: {oda.nome}</h2>
                      <p>usuario: {oda.usuario}</p>
                      <p>descrição: {oda.descricao}</p>
                      <p>data_inclusão: {oda.data_inclusao}</p>
                      <p>palavras_chave: {oda.palavras_chave}</p>
                </div>
              </div>
          ))}
        </div>
    </div> 
  )    
}