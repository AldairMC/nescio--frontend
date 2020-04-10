import React from 'react'
import PropTypes from 'prop-types'
import '../../assets/styles/components/card.sass'

const CardFooter = ({children}) => {
    return(
        <div className={`card-footer`}>
            {children}
        </div>
    )
}

CardFooter.propTypes = {
    children: PropTypes.node.isRequired
}

export default CardFooter