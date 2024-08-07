import axios from "axios"

const apiUrl = process.env.REACT_APP_API_URL || null

const Api = {

    get : async (url, header) => {
        let result = await axios.get(`${apiUrl}/${url}`,{
            headers: {
                ...header
            }
        })
        return result
    },

    post : async (url,data) => {
        let result = await axios.post(`${apiUrl}/${url}`,data)
        return result
    }
}

export default Api