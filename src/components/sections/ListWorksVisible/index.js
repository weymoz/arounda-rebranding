import React, { useEffect } from 'react'
import ListWorks from "@sections/ListWorks";
import { connect } from 'react-redux'
import { useLocation } from 'react-router-dom';
import { fetchPosts } from '../../../functions/actions'

const mapStateToProps = ({ posts }) => ({ posts })

const getTagFromLocationSearch = search => search.substring(1).split('=')[1]


let ListWorksVisible = ({ posts, fetchPosts }) => {

    useEffect(fetchPosts, [])
    const location = useLocation();
    const tag = getTagFromLocationSearch(location.search)

    return <ListWorks posts={posts} />
}

ListWorksVisible = connect(mapStateToProps, { fetchPosts })(ListWorksVisible)

export default ListWorksVisible