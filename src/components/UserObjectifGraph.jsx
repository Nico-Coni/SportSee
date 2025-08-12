import { mockUserData } from "../mocks/mockedData.js"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export function UserObjectifGraph({ id }) {
    const userData = mockUserData.find((u) => u.id === Number(id))
    const percentage = (userData.todayScore || userData.score) * 100

    const data = [
        { name: 'Score', value: percentage },
        { name: 'Remaining', value: 100 - percentage }
    ];
    const COLORS = ['#FF0000', '#FFFFFF']; // Couleur remplie + fond

    return (
        <div style={{ width: 258, height: 263, backgroundColor: '#FBFBFB', borderRadius: '10px', position: 'relative' }}>
            <p style={{
                position: 'absolute',
                top: '20px',
                left: '20px',
                margin: 0,
                color: '#20253A',
                fontSize: 15,
                fontWeight: 600
            }}>
                Score
            </p>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={200} height={200}>
                    <Pie
                        data={data}
                        startAngle={90}
                        endAngle={450}
                        innerRadius={80}
                        outerRadius={90}
                        paddingAngle={0}
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index]} />
                        ))}
                    </Pie>
                </PieChart>
                <div style={{
                    height: '100px',
                    position: 'absolute',
                    top: '57%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                    color: '#282D30',
                    fontWeight: '700'
                }}>
                    <p style={{ margin: 0, fontSize: 20 }}>{percentage}%</p>
                    <p style={{ margin: 0, fontSize: 12 }}>de votre objectif</p>
                </div>
            </ResponsiveContainer>
        </div>
    )
}