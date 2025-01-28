import { Titulo } from '../Titulo'
import CardRecomenda from '../CardRecomenda'
import imagemLivro from '../../imagens/livro2.png' 
import imagemGenerica from '../../imagens/livro.png'
import styled from 'styled-components'
import { useState } from 'react'
import { useEffect } from 'react'
import { getLivros } from '../../servicos/livros'

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    display: flex;
    gap: 16px;
    max-width: 1200px;
    width: 100%;
    justify-content: center;
    cursor: pointer;
    margin: 30px auto 0 auto;
    flex-wrap: wrap;

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;

        p {
            text-align: center;
        }
    }
`

function UltimosLancamentos() {
    const [livros, setLivros] = useState([])

    useEffect(() => {
        fetchLivros()
    }, [])

    async function fetchLivros() {
        const livrosDaAPI = await getLivros()
        setLivros(livrosDaAPI)
    }

    return (
        <UltimosLancamentosContainer>
            <Titulo
                cor="#EB9B00"
                tamanhoFonte="36px"
            >
                ÚLTIMOS LANÇAMENTOS
            </Titulo>
            <NovosLivrosContainer>
                {livros.map( livro => (
                    <div>
                        <img src={imagemGenerica} alt='Capa do livro'/>
                        <p>{livro.nome}</p>
                    </div>
                ))}
            </NovosLivrosContainer>
            <CardRecomenda
                titulo="Talvez você se interesse por"
                subtitulo="Angular 11"
                descricao="Construindo uma aplicação com a plataforma Google"
                img={imagemLivro}
            />
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos