import OIP from './assets/OIP.jpeg'

function Card(){
    return(
        <div className="card">
            <img className="card-image" src={OIP} alt="profile picture"></img>
            <h2 className='card-title'>Jake</h2>
            <p className='card-text'>I'm studying React</p>

        </div>
    )
}
export default Card