import React from 'react'
import PropTypes from 'prop-types'
import '../../assets/styles/components/card.sass'

const CardBody = ({children}) => {
    return(
        <div className={`card-body`}>
            {children}
        </div>
    )
}

CardBody.propTypes = {
    children: PropTypes.node.isRequired
}

export default CardBody