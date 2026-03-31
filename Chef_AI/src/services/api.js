import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL

console.log("API_URL:", API_URL)

const axiosInstance = axios.create({
  baseURL: API_URL
})

export const api = async (pergunta) => {
    try {
        const response = await axiosInstance.post('/receitas/perguntar', {
            pergunta
        });

        return response.data.resposta;
    } catch (error) {
        console.error("Erro ao buscar resposta no servidor ", error);
        throw error;
    }
}