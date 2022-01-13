import './App.css';
import { useEffect } from 'react'
import { Outlet, useNavigate} from 'react-router-dom'
import * as api from './backend/Backend'


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
		const init = async() => {
			await api.discover()			
			if (api.user.bridge === undefined) 
				navigate('/auth')
   			else navigate('/home')
		}
		init()
		
	}, [api.user.bridge]) 

	
	return (
		<div className="App">
			<Outlet/>
    	</div>
	);

}

export default App;
