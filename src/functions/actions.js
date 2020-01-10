import client from './contentful-client'

export const ADD_TAGS = 'ADD_TAGS'
const addTags = tags => ({
    type: ADD_TAGS,
    payload: tags
})

const normalize = res => {
    return res.items.map(item => {
        const id = item.sys.id
        const value = item.fields.tag

        return {id, value}
    })
}

export const fetchTags = () => dispatch => {
    client.getTags().then(res => {
        console.log(res)
        dispatch(addTags(normalize(res)))
    } )
}


