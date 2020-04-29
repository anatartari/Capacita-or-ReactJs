import React, { useState, useEffect } from 'react'

//Usando a api do git
//Apartir do momento que eu uso uma função eu nao posso mais declarar coisas como satate = { }, nao tem propriedades proprias 
//Hooks sao identificados por causa do prefixo use na frente como o useState e useEffect
export default function Hooks() {

    //Contador simples
    const [cont, setCont] = useState(0)
    const onClickCont = () => {
        setCont(cont + 1)
    }

    //Map com nomes e com botao de adicionar 
    const [nomes, setnomes] = useState([
        { id: 1, name: 'brabinha' },
        { id: 2, name: 'brabo' },
        { id: 3, name: 'bribo' },
        { id: 4, name: 'repolho' },
    ])

    const handleAddNomes = () => {
        //...repositorio carrega todos os valores que ja estao nessa variavel
        setnomes([...nomes, { id: Math.random(), name: "Oi Sou novo aqui" }])
    }




    // O Effect Hook (Hook de Efeito) te permite executar efeitos colaterais em componentes funcionais
    // Pode ter quantos Effects voce quiser (é ate uma boa pratica)
    const [repo, setRepo] = useState([])
    useEffect(async () => {
        const response = await fetch('https://api.github.com/users/Le4o/repos')
        const data = await response.json()

        setRepo(data)
    }, []) //Quando essa função vai ser executada? Quando vazio ele nao depende de nada para executar


    //Quero marcar repositorios como favoritos, Nao criar outra "useState" para os favoritos (duplicar dados)
    const handleFavorito = id => {
        //Percorre todos os repositorios e verifica se  o id do repositorio que estou pecorrendo no memento corresponde ao id que eu passei como "parametro"
        const novoRepos = repo.map(re => {
            return re.id == id ? { ...re, favorito: !re.favorito} : re // Para so marcar { ...re, favorito: true}
        })
        setRepo(novoRepos)
    }

    useEffect(() => {
        const numFav = repo.filter(r => r.favorito); // Filter retorna um frue ou false e favorito é um boll (PERFEITO)

        document.title = `Você tem ${numFav.length} favoritos`
    }, [repo])

    return (
        <>

        {/* Repositorios */}
            <ul>
                {repo.map(p => (
                    <li key={p.id}>{p.name}
                        <button onClick={() => handleFavorito(p.id)}>Favoritar</button>
                        {p.favorito && <span>(Favorito!)</span>}
                    </li>
                ))}
            </ul>

            {/* lista de nomes com botao de adicionar */}
            <button onClick={handleAddNomes}>Adicionar nome</button>
            <ul>
                {nomes.map(na => (
                    <li key={na.id}>{na.name}</li>
                ))}

            {/* Contador simples */}
            </ul>
            <h3>Você clicou {cont} vezes</h3>
            <button onClick={onClickCont}>Clique em mim!</button>
        </>
    );
}