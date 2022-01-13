import * as api from '../../logic/Backend'

export const HomePage = (props) => {

    return (
        <h1>{JSON.stringify(api.data.user.credentials.username)}</h1>
    );

}
export default HomePage;