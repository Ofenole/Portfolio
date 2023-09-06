
import profilbild from "../assets/profilbild.jpg"

const HomePage = () => {
const imageSrc = {image:profilbild,name:"Olaf"};

  
  return (
    <div>
      
        <img src={imageSrc.image} alt={imageSrc.name} />
      
<h1>Hallo Wilkommen auf der Home-Page von: </h1>
<h2>Olaf Dutschmann</h2>
<h3 className="text">Ich bin derzeit Student beim <a className="text1" href="https://digitalcareerinstitute.org/de/">DCI</a> und lerne Web-Dev in Frontend und Backend.</h3>
    </div>
  )
}

export default HomePage