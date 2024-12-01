import { FC } from "react";
type WelcomeProp = {
    isLoggedIn: boolean,
    user: {
        name: string,
        type: 'admin' | 'guest' | 'moderate',
    },
}
const Welcome: FC<WelcomeProp> = ({isLoggedIn, user}) => {
    if (user?.type === 'guest') {
        return(
            <>
            <h1>access required</h1>
            </>
        )
    } else if (user?.type === 'moderate') {
        return(
            <>
            <h1>admin aproval required</h1>
            </>
        )
    }
    return(
        <>
        {isLoggedIn && <h1>Welcome {user.name}</h1>}
         {/* {isLoggedIn ? <h1>Welcome {user.name}</h1> : <h1>User not loggedin</h1>} */}
        </>
    )
}
export default Welcome;