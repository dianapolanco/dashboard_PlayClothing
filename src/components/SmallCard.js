import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function SmallCard(props) {
    return (
        <div className="col-md-3 mb-3">
            <div className={`card border-left shadow h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={`text-xs font-weight-bold text text-uppercase mb-1`}> {props.nombre}</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{props.total}</div>
                        </div>
                        <div className="col-auto">
                        <FontAwesomeIcon icon={props.icon} className="fa-2x text-gray-630"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

/* DEFINICIÓN DE PROPIEDADES POR DEFAULT */

SmallCard.defaultProps = {
    title: 'No Title',
    color: 'success',
    cuantity: 'No cuatity',
    icon: 'fa-clipboard-list'
}

/* PROPTYPES */

SmallCard.propTypes = {
    atritutes: PropTypes.shape({
        title: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        cuantity: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]).isRequired,
        icon: PropTypes.string.isRequired
    })
}



export default SmallCard;