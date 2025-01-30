import { useEffect, useState } from "react"
import $api from "../http/api"

export const useGetAxios = (path: string) => {
    const [data, setData] = useState([])
    const [error, setError] = useState("")

    async function getData() {
        try {
            const { data } = await $api.get(path)
            setData(data)

        } catch (error: any) {
            if (error.response && error.response.data && error.response.data.message) {
                setError(error.response.data.message)
            } else {
                setError("Biror xato yuz berdi.")
            }
        }
    }

    useEffect(() => {
        getData()
    }, [path])

    return { data, error }
}
