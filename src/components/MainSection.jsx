import '../styles/MainSection.scss'
import { useParams } from 'react-router-dom'
import { mockUserData } from '../mocks/mockedData'
import { UserActivityGraph } from './UserActivityGraph'
import { UserAverageSessions } from './UserAverageSessionsGraph'
import { UserPerformanceChart } from './UserPerformanceGraph'
import { UserObjectifGraph } from './UserObjectifGraph'
import { UserKeyNumbers } from './UserKeyNumbers'

export function MainSection() {
    const { id } = useParams()
    const user = mockUserData.find((u) => u.id === Number(id))

    return (
        <div className="main-section">
            <h1>Bonjour <span className='user-name'>{user.userInfos.firstName}</span></h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏 !</p>
            <div className="user-infos">
                <div className="graphs">
                    <UserActivityGraph id={id} />
                    <UserAverageSessions id={id} />
                    <UserPerformanceChart id={id} />
                    <UserObjectifGraph id={id} />
                </div>
                <UserKeyNumbers id={id} />
            </div>
        </div>
    )
}