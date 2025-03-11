function Profile(){
    const imageUrl='./src/assets/OIP.jpeg';
    const handleClick=(e) => e.target.style.display ="none";

    return (<img onClick={(e) => handleClick(e)} src={imageUrl}></img>)
}
export default Profile