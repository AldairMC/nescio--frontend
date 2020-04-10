import React from 'react'
import PropTypes from "prop-types"
import '../../assets/styles/components/card.sass'
import CardHeader from './CardHeader'
import CardBody from './CardBody'
import CardFooter from './CardFooter'

const Card = ({ children }) => {

    return (
        <div className={`card-container`}>
            <CardHeader />
        </div>
    )
}

Card.propTypes = {
    children(props, propName, componentName) {
        let prop = props[propName]
        let types = [CardHeader, CardBody, CardFooter]
        let error;

        React.Children.forEach(prop, (el) => {
            if (types.indexOf(el.type) === -1) {
                error = new Error(`${componentName} should have childs of the following types: ${types.join('`, `')}`)
            }
        })
        return error;
    }
}

export default Card