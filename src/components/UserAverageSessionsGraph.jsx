import { mockUserAverageSessions } from '../mocks/mockedData.js'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export function UserAverageSessions({ id }) {
    const userAverageSessions = mockUserAverageSessions.find((u) => u.userId === Number(id))
    const dayLabels = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
    const formattedSessions = userAverageSessions.sessions.map((session) => ({
        ...session,
        day: dayLabels[session.day - 1],
    }))

    const CustomTick = ({ x, y, payload }) => {
        return (
            <text
                x={x}
                y={y + 10}
                textAnchor="middle"
                fill="#FFFFFF"
                fontSize={12}
                style={{ letterSpacing: '-1px' }}
            >
                {payload.value}
            </text>
        );
    };

    return (
        <div style={{ width: 258, height: 263, background: '#FF0000', borderRadius: 10, padding: 0 }}>
            <h3 style={{ color: 'white', opacity: 0.5, margin: 0, fontSize: 15, paddingTop: 20, paddingLeft: 20 }}>Durée moyenne des sessions</h3>
            <ResponsiveContainer width="100%" height="80%">
                <LineChart data={formattedSessions} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                    <XAxis dataKey="day" stroke="#FFFFFF" opacity={0.6} tickLine={false} axisLine={false} tick={<CustomTick />} interval="preserveStartEnd" />
                    <YAxis hide domain={['dataMin - 10', 'dataMax + 10']} />
                    <Tooltip
                        contentStyle={{ backgroundColor: 'white', border: 'none' }}
                        itemStyle={{ color: '#000000' }}
                        labelStyle={{ display: 'none' }}
                        formatter={(value) => [`${value} min`]}
                    />
                    <Line
                        type="monotone"
                        dataKey="sessionLength"
                        stroke="#FFFFFF"
                        strokeWidth={2}
                        dot={false}
                        activeDot={{ r: 5, stroke: 'rgba(255,255,255,0.5)', strokeWidth: 10 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
