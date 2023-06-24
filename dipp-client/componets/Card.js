import {getMarketData} from "../services/getMarketData"

export default function Card () {
    const {data,error,isLoading}=getMarketData()

    if(data){
        // ASSIGNING QUERIED DATA TO AN ARRAY TO ENABLE TEMPLATE RENDERING
        const newcoinData = [
            {img:data.data.newestCoins[0].iconUrl,name:data.data.newestCoins[0].name,short:data.data.newestCoins[0].symbol,price:'$2,751,027.04',key:0},
            {img:data.data.newestCoins[1].iconUrl,name:data.data.newestCoins[1].name,short:data.data.newestCoins[1].symbol,price:'$0.000',key:1},
            {img:data.data.newestCoins[2].iconUrl,name:data.data.newestCoins[2].name,short:data.data.newestCoins[2].symbol,price:'$0.000',key:2}
        ]

        let trendingcoinData = [
            {img:data.data.bestCoins[0].iconUrl,name:data.data.bestCoins[0].name,short:data.data.bestCoins[0].symbol,price:'$0.3725',key:0},
            {img:data.data.bestCoins[1].iconUrl,name:data.data.bestCoins[1].name,short:data.data.bestCoins[1].symbol,price:'$5.185',key:1},
            {img:data.data.bestCoins[2].iconUrl,name:data.data.bestCoins[2].name,short:data.data.bestCoins[2].symbol,price:'$0.3335',key:2}
        ]
        // RENDERS WHEN DATA IS AVAILABLE
        return (
            <div className="card-container" >    
                <div className="card">
                        <div className="card-header">
                            <div className="card-title">
                                <span>{'New Coin'}</span>
                            </div>
                            <a id="link" href='#'> More... </a>
                        </div>
                        {newcoinData.map( (data)=> 
                            <div className="coin-list" key={data.key}>
                                <img src={data.img} alt="img" />
                                <p>{data.name} <span>{data.short}</span> </p>
                                <span>{data.price}</span>
                            </div>
                        )}
                </div>

                <div className="card">
                        <div className="card-header">
                            <div className="card-title">
                                <span>{'Trending'}</span>
                            </div>
                            <a id="link" href='#'> More... </a>
                        </div>
                        {trendingcoinData.map( (data)=> 
                            <div className="coin-list" key={data.key}>
                                <img src={data.img} alt="img" />
                                <p>{data.name} <span>{data.short}</span> </p>
                                <span>{data.price}</span>
                            </div>
                        )}
                </div>
            </div>
        )
    };
    //RETURNS A LOADER IF THERE IS AN ERROR OR IS LOADING 
        return(
            <div className="loader"></div>
        )
};
  
