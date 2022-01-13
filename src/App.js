import './App.css';
import { useEffect } from 'react'
import { Outlet, useNavigate} from 'react-router-dom'
import * as api from './logic/Backend'


/*
  ? Figma
  ? picture provider (unsplash)[unsplash.com] if needed
  ? animace Framer library
  ? bridge emulator: [http://steveyo.github.io/Hue-Emulator/] 
  ? RGB to CIE (x, y): [https://github.com/Shnoo/js-CIE-1931-rgb-color-converter]
  ! JSHUE [https://github.com/blargoner/jshue/releases] //developed on 2.1.1
  ! USE MUI - Material UI [https://mui.com] 

  TODO: Persistent bridge login
  TODO: light on/off & basic color change

*/
export let navigate
function App() {
	navigate = useNavigate()
	useEffect(() => {
		//api.removeCookies('lightdeck')
		
		api.updateUser()
		api.light.rainbow(api.data.user.bridge.ip, api.data.user.credentials.username)

		const init = async() => {
			
			await api.discover()			
			navigate('/auth')
		}

		if(api.data.user === undefined || api.data.user.bridge === null || api.data.user.bridge === undefined) init()
		else {
			if(api.data.user.credentials.username === null || api.data.user.credentials.username === undefined) {
				
				api.auth(api.data.user.bridge)
			} else if (!api.testUser()) {init()} else {navigate('/home')} 
		}

		
	}, []) 

	
	return (
		<div className="App">
			<Outlet/>
			<button onClick={()=>{api.removeCookies('lightdeck')}}>Delete Cookies (bridge ip, username)</button>
    	</div>
	);

}

export default App;
