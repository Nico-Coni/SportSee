import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, CartesianGrid, Tooltip, Legend, ReferenceLine } from 'recharts'
import { mockUserActivity } from '../mocks/mockedData';

export function UserActivityGraph({ id }) {

    const userActivity = mockUserActivity.find((u) => u.userId === Number(id))
    const formattedSessions = userActivity.sessions.map((session, index) => ({
        ...session,
        day: index + 1,
    }));

    const renderCustomLegend = ({ payload }) => (
        <ul style={{
            display: "flex",
            justifyContent: "end",
            listStyle: "none",
            gap: "10px",
            margin: 0,
            padding: 0
        }}>
            {payload.map((entry, index) => (
                <li key={index} style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                    <span style={{
                        display: "inline-block",
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        backgroundColor: entry.color
                    }} />
                    <span style={{ fontSize: 14, color: "#74798C" }}>{entry.value}</span>
                </li>
            ))}
        </ul>
    );

    function CustomTooltip({ payload }) {
        return (
            <div style={{
                backgroundColor: '#E60000',
                color: '#FFFFFF',
                padding: '5px 10px',
                fontSize: '12px',
                lineHeight: '3',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
            }}>
                {payload.map((item, index) => (
                    <div key={index}>
                        {item.dataKey === 'kilogram' && `${item.value}kg`}
                        {item.dataKey === 'calories' && `${item.value}kcal`}
                    </div>
                ))}
            </div>
        )
    }
    return (
        <div className="activity-graph" style={{ width: "85%", height: 250, backgroundColor: "#FBFBFB", borderRadius: 10 }}>
            <ResponsiveContainer>
                <BarChart data={formattedSessions} margin={{ top: 20, right: 10, left: 10, bottom: 5 }}>
                    <text
                        x="2%"
                        y={31}
                        textAnchor="start"
                        dominantBaseline="middle"
                        style={{ fontSize: 16, fill: "#20253A", fontWeight: 700 }}
                    >
                        Activité quotidienne
                    </text>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="day" tickLine={false} />
                    <YAxis yAxisId="right" orientation="right" dataKey="calories" domain={[0, 400]} hide />
                    <YAxis yAxisId="left" orientation="left" dataKey="kilogram" hide />
                    <YAxis yAxisId="right" orientation="right" dataKey="calories" hide />
                    <ReferenceLine y={200} yAxisId="right" stroke="#DEDEDE" strokeDasharray="3 3" label={{ value: '', position: 'right', fill: '#DEDEDE' }} />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend verticalAlign="top" align="right" content={renderCustomLegend} />
                    <Bar yAxisId="left" dataKey="kilogram" fill="#2b3235ff" name="Poids (kg)" barSize={6} radius={[5, 5, 0, 0]} />
                    <Bar yAxisId="right" dataKey="calories" fill="#E60000" name="Calories brûlées (kcal)" barSize={6} radius={[5, 5, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}