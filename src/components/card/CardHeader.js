import React from 'react'
import PropTypes from 'prop-types'
import '../../assets/styles/components/card.sass'

const CardHeader = ({title, image}) => {
    return (
        <div className={`card-header`}>
            <h1>{title}</h1>
        </div>
    )
}

CardHeader.propTypes = {
    title: PropTypes.string.isRequired
}

CardHeader.defaultProps = {
    title: 'Default Title'
}

export default CardHeader