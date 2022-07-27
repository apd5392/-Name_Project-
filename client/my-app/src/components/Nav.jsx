import {Link} from 'react-router-dom'
const Nav = () => {
    return(
        <div>
            <Link to = '/'>Home</Link>
            <Link to ='/animes'>Animes</Link>
            <Link to ='/heroes'>Heroes</Link>
            <Link to = '/villains'>Villains</Link>
            <Link to ='/organizations'>Organizations</Link>
        </div>
    )
}
export default Nav