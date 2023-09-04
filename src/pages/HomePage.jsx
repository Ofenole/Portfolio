
import profilbild from "../assets/profilbild.jpg"

const HomePage = () => {
const imageSrc = {image:profilbild,name:"Olaf"};

  
  return (
    <div>
      
        <img src={imageSrc.image} alt={imageSrc.name} />
      
<h1>Hallo Wilkommen auf der Home-Page von: </h1>
<h2>Olaf Dutschmann</h2>

    </div>
  )
}

export default HomePage