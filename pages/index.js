function GlobalStyle() {
    return (
      <style global jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          list-style: none;
        }
        body {
          font-family: 'Open Sans', sans-serif;
        }
        /* App fit Height */ 
        html, body, #__next {
          min-height: 100vh;
          display: flex;
          flex: 1;
        }
        #__next {
          flex: 1;
        }
        #__next > * {
          flex: 1;
        }
        /* ./App fit Height */ 
      `}</style>
    );
  }

function Titulo(props){
    const Tag = props.tag
    return(
        <>
            <Tag>{props.children}</Tag>
            <style jsx>{`
                h1{
                    color: red;
                }

            `}</style>
        </>   
    )
}


function HomePage() {
    return( 
        <div>
            <GlobalStyle/>
            <Titulo tag="h1">Bem Vindo de Volta!</Titulo>
            <h2>Discord AluraMatrix</h2>
          
        </div>

    )
  }
  
  export default HomePage