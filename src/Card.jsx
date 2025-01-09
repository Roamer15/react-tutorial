import profilePic from '../public/vite.svg';

function Card() {
    return (
        <div className="card">
            <img className="card-image" src={profilePic} alt="random-image" />
            <h2 className="card-title">Ian</h2>
            <p className="card-description">I am a student at rebase and i love video games</p>
        </div>
    )
}

export default Card;