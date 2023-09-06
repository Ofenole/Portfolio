
import github from "../assets/Github-icon.png"
import facebook from "../assets/facebook.png"
import twitter from "../assets/twitter_PNG6.png"
import youtube from "../assets/youtube.png"



const Footer = () => {
  return (
    <> 
    <div className="icons">
    <a href="https://github.com/Ofenole"target="blank"><img src={github} alt="GitHub"/></a>
    <a href="https://www.facebook.com/olaf.dutschmann"target="blank"><img src={facebook} alt="GitHub"/></a>
    <a href="https://www.twitter.com"target="blank"><img src={twitter} alt="GitHub"/></a>
    <a href="https://www.youtube.com"target="blank"><img src={youtube} alt="GitHub"/></a>
    </div>
    </>
  )
}

export default Footer