import "./chart.scss"

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'January',
        earned: 4000,
        spent: 2000,
        saved: 2000,
    },
    {
        name: 'February',
        earned: 3000,
        spent: 1398,
        saved: 1602,
    },
    {
        name: 'March',
        earned: 2000,
        spent: 800,
        saved: 1200,
    },
    {
        name: 'April',
        earned: 10000,
        spent: 2000,
        saved: 8000,
    },
    {
        name: 'May',
        earned: 3000,
        spent: 1398,
        saved: 1602,
    },
    {
        name: 'June',
        earned: 2390,
        spent: 390,
        saved: 2000,
    },
];
const Chart =({aspect, title})=>{
    return(
        <>
            <div className={"chart"}>
                <div className={"title"}>{title}</div>
                <ResponsiveContainer width="100%" aspect={aspect}>
                    <AreaChart
                        width={500}
                        height={400}
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <XAxis dataKey="name" stroke={"var(--gray)"} />
                        <Tooltip />
                        <Area type="monotone" dataKey="earned" stackId="1" stroke="#8884d8" fill="#8884d8" />
                        <Area type="monotone" dataKey="spent" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                        <Area type="monotone" dataKey="saved" stackId="1" stroke="#ffc658" fill="#ffc658" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </>
    )
}
export {Chart}