import {getMarketData,formatToCompact} from "../services/getMarketData"

export default function Stats () {
    // USING THE CUSTOM HOOK TO FETCH MARKET DATA
    const {data,error,isLoading}=getMarketData()

    // THIS IS RETURNED WHEN THE DATA IS STILL LOADING
    if(isLoading) {
        return(
            <div className='stats-container' >
                <div className='stat'>
                    <p>Loading!!!</p>
                </div>
            </div>
        )
    }

    // THIS IS RETURNED WHEN THE DATA IS AVAILABLE
    if(data){
        // FORMATING TO COMPACT INTEGERS
        const { totalMarketCap,totalMarketVolume }=formatToCompact(data)

        // FIXING STATS DATA TO AN ARRAY TO ENABLE TEMPLATE RENDERING
        const stats = [
            {title:'Market Cap',key:0,value:totalMarketCap},
            {title:'All Coins',key:1,value:data.data.totalCoins.toLocaleString('en-US')},
            {title:'Market Volume',key:2,value:totalMarketVolume},
            {title:'BTC Dominance',key:3,value:data.data.btcDominance.toFixed(2)+' %'}
        ]
        
        //RETURNS THE STATS
        return (
            <div className='stats-container'>
                {stats.map((stat)=>(
                    <div className='stat' key={stat.key} >
                        <p>{stat.title}</p>
                        {data?stat.title === 'All Coins'||stat.title==='BTC Dominance'? <p>{stat.value}</p> :<p>{'$ '+stat.value}</p>: <p>loading</p>}
                    </div>
                ))}
            </div>
        );
    }
    // RETURNS IF THERE IS AN ERROR
    return(
        <dir className='stats-container' >
            <div className='stat'>
                <p>Connect to the internet and try again</p>
            </div>
        </dir>
    );
}
