// const Card = (robots) =>{
const Card = ({id,name,email}) =>{
    return(
        <div className="bg-green dib br3 pa1  mv1 mh2 grow cli tc bw2 shadow-5">
            <img src={`https://robohash.org/${id}`} alt="robo"/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}
export default Card; 
