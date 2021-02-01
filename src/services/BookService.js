import axios from 'axios'
import { baseApiUrl } from '@/config/constants.js'

export default {
    async getBooks() {
        const response = await axios.get(`${baseApiUrl}/books`)
        return response.data.data
    },
    async getBookById(bookId) {
        const response = await axios.get(`${baseApiUrl}/books/${bookId}`)
        return response.data.data
    },
    async getRecommendationsByBookId(bookId) {
        const response = await axios.get(`${baseApiUrl}/books/${bookId}/recommendations`)
        return response.data.data
    }
}