import React from 'react'
import '../../assets/styles/components/card.sass'
import '../../assets/styles_utils.sass'

const Card = ({ children }) => (
    <div className={`card-container elevation`}>
        {children}
    </div>
)

export default Card