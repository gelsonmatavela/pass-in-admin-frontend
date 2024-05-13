import grupovVerguiLogo from '../assets/simplicityforstudent.png'
import { NavLink } from './nav-link'

export function Header(){
   return(
    <div className="flex items-center gap-5 py-2">
        <img src={grupovVerguiLogo} className='h-8'/>

        <nav className='flex items-center gap-5'>
            <NavLink href="/eventos">Eventos </NavLink>
            <NavLink  href="/participantes">Participantes </NavLink>
        </nav>
    </div>
    )
}