
import { createContext } from "react";

const StateContext = createContext({})

export const ContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({});
    const [userToken, _setUserToken] = useState(localStorage.getItem('TOKEN') || '');
    const [questionTypes] = useState(['text', "select", "radio", "checkbox", "textarea"])
    const [toast, setToast] = useState({message: '', show: false})
  
    const setUserToken = (token) => {
      if (token) {
        localStorage.setItem('TOKEN', token)
      } else {
        localStorage.removeItem('TOKEN')
      }
      _setUserToken(token);
    }
  
    const showToast = (message) => {
      setToast({ message, show: true })
      setTimeout(() => {
        setToast({message: '', show: false})
      }, 5000)
    }
  
    return (
      <StateContext.Provider
        value={{
          currentUser,
          setCurrentUser,
          userToken,
          setUserToken,
          surveys,
          questionTypes,
          toast,
          showToast
        }}
      >
        {children}
      </StateContext.Provider>
    );
  };

export const userStateContext = () => useContext (StateContext)