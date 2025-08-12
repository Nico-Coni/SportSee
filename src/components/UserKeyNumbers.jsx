import caloriesIcon from '../assets/calories-icon.svg'
import carbsIcon from '../assets/carbs-icon.svg'
import fatIcon from '../assets/fat-icon.svg'
import proteinIcon from '../assets/protein-icon.svg'
import { mockUserData } from '../mocks/mockedData'
import '../styles/NutritionCard.scss'

export function UserKeyNumbers({ id }) {
    const user = mockUserData.find((u) => u.id === Number(id))
    const userKeyNumbers = user.keyData
    const nutritionData = [
        {
            label: 'Calories',
            value: userKeyNumbers.calorieCount,
            icon: caloriesIcon,
            unit: 'kCal'
        },
        {
            label: 'Proteines',
            value: userKeyNumbers.proteinCount,
            icon: proteinIcon,
            unit: 'g'
        },
        {
            label: 'Glucides',
            value: userKeyNumbers.carbohydrateCount,
            icon: carbsIcon,
            unit: 'g'
        },
        {
            label: 'Lipides',
            value: userKeyNumbers.lipidCount,
            icon: fatIcon,
            unit: 'g'
        }
    ];
    return (
        <div className='nutritions'>
            {nutritionData.map((item, index) => (
                <div key={index} className='nutrition-card'>
                    <img src={item.icon} alt={item.label} />
                    <div>
                        <p><strong>{item.value}{item.unit}</strong></p>
                        <p className='label'>{item.label}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}