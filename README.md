* Steps


` const [menus, setMenus] = useState([]);
  
  useEffect(()=>{
    fetch("menus.json")
    .then(res => res.json())
    .then(data => setMenus(data))
  },[])
  
`
`
 {
        menus.map(m => <p>{m.name}</p>)
      }`