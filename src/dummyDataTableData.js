export const userColumns=[
    {
        field: "id",
        headerName:"ID",
        width:100
    },
    {
        field:"user",
        headerName: "User",
        width:400,

        renderCell:(param)=>{
            return(
                <div className={"cellWithImg"}>
                    <img className={"cellImg"} src={param.row.img} alt={"avatar"}/>
                    {param.row.username}
                </div>
            )
        }
    },
    {
        field:"email",
        headerName: "Email",
        width:250,
    },
    {
        field:"age",
        headerName: "Age",
        width:100,
    },
    {
        field:"status",
        headerName: "Status",
        width:160,

        renderCell:(param)=>{
            return (
                <div className={`cellWithStatus ${param.row.status}`}>
                    {param.row.status}
                </div>
            )
        }
    }
]

export const usersRow =[
    {
        id:1,
        username: "Victor",
        img:"https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=2000",
        status:"online",
        email:"amavictor@gmail.com",
        age:24
    },
    {
        id:2,
        username: "Ben",
        img:"https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=2000",
        status:"offline",
        email:"amavictor@gmail.com",
        age:56
    },
    {
        id:3,
        username: "Grace",
        img:"https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=2000",
        status:"online",
        email:"amavictor@gmail.com",
        age:23
    },
    {
        id:4,
        username: "Lucas",
        img:"https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=2000",
        status:"online",
        email:"amavictor@gmail.com",
        age:24
    },
    {
        id:5,
        username: "Victor",
        img:"https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=2000",
        status:"active",
        email:"amavictor@gmail.com",
        age:24
    },
    {
        id:6,
        username: "Victor",
        img:"https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=2000",
        status:"active",
        email:"amavictor@gmail.com",
        age:24
    },{
        id:7,
        username: "Victor",
        img:"https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=2000",
        status:"active",
        email:"amavictor@gmail.com",
        age:24
    },
    {
        id:8,
        username: "Lucas",
        img:"https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=2000",
        status:"online",
        email:"amavictor@gmail.com",
        age:24
    },
    {
        id:9,
        username: "Victor",
        img:"https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=2000",
        status:"active",
        email:"amavictor@gmail.com",
        age:24
    },
    {
        id:10,
        username: "Victor",
        img:"https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=2000",
        status:"active",
        email:"amavictor@gmail.com",
        age:24
    },{
        id:11,
        username: "Victor",
        img:"https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=2000",
        status:"active",
        email:"amavictor@gmail.com",
        age:24
    },

]