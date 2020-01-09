import React from 'react'
import s from './style.scss'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
    tags: state.tags
})

let Tags  = ({ tags }) => {
    return (
        <ul className={s.tags}>
            {tags.map((tag, i) => (<li key={i}>{tag}</li>) )}
        </ul>
    )
}

Tags = connect(mapStateToProps)(Tags)
export default Tags