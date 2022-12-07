const RequestApi = () => {


  const fetchData = async () => {
    try {  
        const response = await fetch('https://api.github.com/users/soladragon/repos?sort=updated&direction=desc&fork=false');
        const json = await response.json();
        setData(json);
    } catch (error) {
        console.error(error);
    }
    }
    useEffect(() => {
        setTimeout(function () {
            // code to be executed after 3 seconds
            fetchData()
        }, 0);
    }, []);

    

  return { data, loading, error };
}
export {RequestApi}