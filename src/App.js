import Home from './components/View/Home';
import { toggle_theme } from './components/features/ThemeSlice';
import {useSelector,useDispatch} from "react-redux"
function App() {
  // const {theme,toggleTheme}=useContext(themeContext)
  const theme=useSelector(state=>state.theme.mode)
  const dispatch=useDispatch()
  return (
  
   <div className={theme}>
      <div className="h-screen bg-slate-200 text-gray-800 dark:bg-slate-800 dark:text-gray-200 ">
      <Home/>
      <button onClick={()=>dispatch(toggle_theme())}>Change Mode</button>
      </div>
    </div>

  );
}

export default App;
