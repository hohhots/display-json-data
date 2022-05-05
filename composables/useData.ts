export const useData = async () => {
    try{
        const { data }  = await useFetch("/api/dirs");
        return data;
        //return {days:{"2022-02-20": ["12-01","12-31"], "2022-02-51": ["13-21","13-50"], "2022-02-22": ["14-00","14-29","15-19"]}};    
    } catch(e){
        console.error('fetch data file error.' + e);
    }
}