import axios from "axios"

const livrosAPI = axios.create({baseURL: "https://alura-books-server.onrender.com/livros"})

async function getLivros() {
    const response = await livrosAPI.get('/')

    return response.data
}

export {
    getLivros
}