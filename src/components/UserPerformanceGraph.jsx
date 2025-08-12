import { mockUserPerformance } from '../mocks/mockedData.js'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

export function UserPerformanceChart({ id }) {
    const { data, kind } = mockUserPerformance.find((u) => u.userId === Number(id))

    const formatRadarData = (data, kind) => {
        return data.map((item) => ({
            subject: kind[item.kind],
            value: item.value
        })).reverse();
    };
    const radarData = formatRadarData(data, kind);
    return (
        <div style={{
            width: 258,
            height: 263,
            backgroundColor: '#282D30',
            borderRadius: 10,
            padding: 0
        }}>
            <ResponsiveContainer width="95%" height="100%">
                <RadarChart
                    cx="50%"
                    cy="50%"
                    outerRadius="72%"
                    data={radarData}
                >
                    <PolarGrid radialLines={false} stroke='#ffffff' />
                    <PolarAngleAxis dataKey="subject" stroke='#ffffff' tickLine={false} style={{ fontSize: 12 }} />
                    <PolarRadiusAxis tick={false} axisLine={false} />
                    <Radar name={`User ${id}`} dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
};
