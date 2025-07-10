import "./card.css"

interface CardProps {
  isActive?: boolean
  onHover?: () => void
}

const Card: React.FC<CardProps> = ({ isActive = false, onHover }) => {
  return (
    <div 
      className={`card_container ${isActive ? 'card_active' : ''}`}
      onMouseEnter={onHover}
    >
      <div className="card_content">
        <div className="card_content-img">
          <img src="https://cdn2.steamgriddb.com/thumb/fce5d38526bb9d361c79122e237db4e0.jpg" alt="" />
        </div>
        <div className="card_content-title">
          <p>hola</p>
        </div>
      </div>
    </div>
  )
}

export default Card