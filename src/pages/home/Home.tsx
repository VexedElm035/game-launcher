import { Navbar, Card } from "../../components"
import './home.css'

const Home = () => {
  return (
    <div className="home_container">
      <Navbar />
      <div className="home_content">
        <div className="home_content-cards">
          {Array.from({ length: 10 }).map((_, i) => (
            <Card key={i} />
          ))}   
        </div>
      </div>
    </div>
  )
}

export default Home