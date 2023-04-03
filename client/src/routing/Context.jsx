import { createContext, useState, useEffect } from "react";

const GlobalContext = createContext(null);

export const GlobalProvider = ({ children }) => {

  // useState for all variables
  const [auth, setAuth] = useState({loggedIn:false})
  const [users, setUsers] = useState([])
  const [filtered, setFiltered] = useState([])
  const [concerts, setConcerts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectItem,setSelectItem]=useState(" ")


    // useEffect to run methods upon load
  useEffect(() => {
    void checkAuth()
    void loadConcerts()
    void loadUsers()
    setFiltered( concerts )
  }, []);

  // methods, could be for on load, or just called from elsewhere

  const checkAuth = async () => {
    setIsLoading(true)
    const response = await fetch("/rest/login")
    const result = await response.json()
    setAuth(result)
    setIsLoading(false)
  }

  const submitSignup = async (email, password) => {
    setIsLoading(true)
    const response = await fetch("/rest/users", {
        method: "post",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({email, password})
    })
    const result = await response.json()
    setIsLoading(false)
  }

  const submitLogin = async (email, password) => {
    setIsLoading(true)
    const response = await fetch("/rest/login", {
        method: "post",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({email, password})
    })
    const result = await response.json()
    setIsLoading(false)
    void checkAuth()
  }

  const logout = async () => {
    setIsLoading(true)
    const response = await fetch("/rest/login", {
        method: "delete"
    })
    const result = await response.json()
    setIsLoading(false)
    setAuth({loggedIn:false})
  }

  const loadUsers = async () => {
    setIsLoading(true)
    const response = await fetch("/rest/users")
    const result = await response.json()
    setUsers(result)
    setIsLoading(false)
  }

  const loadConcerts = async () => {
    setIsLoading(true)
    const response = await fetch("/rest/concerts")
    const result = await response.json()
    setConcerts(result)
    setFiltered(result)
    setIsLoading(false)
  }

  return (
    <GlobalContext.Provider
      value={{
        auth,
        users,
        filtered,
        setFiltered,
        concerts,
        isLoading,
        submitSignup,
        submitLogin,
        logout,
        selectItem,
        setSelectItem
    }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;