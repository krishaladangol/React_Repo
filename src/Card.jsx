import picture from './assets/wallpaper.jpg'
function Card(){
return(
    <div className="card">
        <img className="cardimage" src={picture} alt="Image"></img>
        <h2 className="title">Krishala Dangol</h2>
        <p>I am studying BIT in KIST</p>
    </div>
);
}
export default Card;