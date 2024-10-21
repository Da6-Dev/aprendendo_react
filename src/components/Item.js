import PropTypes from 'prop-types'

function Item({comida, dataValidade}){
    return (
        <>
            <li>{comida} - {dataValidade}</li>
        </>
    )
}

Item.propTypes = {
    comida: PropTypes.string.isRequired,
    dataValidade: PropTypes.string.isRequired
}

Item.defautProps = {
    comida : "Sem Comida",
    dataValidade: "0000-00-00"
}

export default Item;