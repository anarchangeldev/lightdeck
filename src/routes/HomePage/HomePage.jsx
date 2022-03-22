import * as api from '../../logic/Backend'

export const HomePage = (props) => {

    return (
        <div>
            <h1>{JSON.stringify(api.data.user.credentials.username)}</h1>
            <button onClick={()=>{api.light.switchState(api.data, 1)}}>SWITCH</button>
			<button onClick={()=>{api.light.rainbow(api.data)}}>rainbow</button>
        </div>
        
    );

}
export default HomePage;