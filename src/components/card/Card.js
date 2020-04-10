import React from 'react'
import PropTypes from "prop-types"
import '../../assets/styles/components/card.sass'
import '../../assets/styles/_utils.sass'

const Card = ({ children }) => {

    return (
        <div className={`card-container elevation`}>
            {children}
        </div>
    )
}

Card.propTypes = {
    elevation: PropTypes.number.isRequired
}

Card.defaultProps = {
    elevation: 3
}

export default Card