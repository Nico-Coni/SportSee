import yogaIcon from '../assets/yoga-icon.svg'
import swimmingIcon from '../assets/swimming-icon.svg'
import cyclingIcon from '../assets/cycling-icon.svg'
import dumbbelIcon from '../assets/dumbbell-icon.svg'
import '../styles/Aside.scss'

export function Aside() {
    return (
        <div className='aside'>
            <ul className="asideIcons">
                <li className="asideIcon"><img src={yogaIcon} alt="Yoga Icon"></img></li>
                <li className="asideIcon"><img src={swimmingIcon} alt="Swimming Icon"></img></li>
                <li className="asideIcon"><img src={cyclingIcon} alt="Cycling Icon"></img></li>
                <li className="asideIcon"><img src={dumbbelIcon} alt="Dumbbell Icon"></img></li>
            </ul>
            <p className='copyright'>Copyright, SportSee 2020</p>
        </div>
    )
}