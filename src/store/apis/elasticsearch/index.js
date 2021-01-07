import { expressURL, elastic } from '../express'

export const fetchResults = async (params) => {
    try {
        let response = await expressURL.get(elastic.resources, { params })

        return response
    } catch (error) {
        console.log('An error occured fetching data from Elasticsearch', error)

        if (error.response) {
            return error.response
        } else if (error.request) {
            return error.request
        } else {
            return error.message
        }
    }
}

export const fetchDetails = async (id) => {
    try {
        let response = await expressURL.get(
            `${elastic.resources}/${id}?include_data=true`
        )

        return response
    } catch (error) {
        console.log('An error occured fetching data from Elasticsearch', error)

        if (error.response) {
            return error.response
        } else if (error.request) {
            return error.request
        } else {
            return error.message
        }
    }
}
