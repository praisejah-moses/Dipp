import {getCryptos,formatToCompact} from "../services/getMarketData"

export default function Cryptos () {
    const {dataFormat}=formatToCompact
    const {data,error,isLoading}=getCryptos()
    
    if(data){
    return (
        <div className="prices-container">
            <h1>Today's Cryptocurrency Prices</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th id="large">Market Cap</th>
                            <th>Daily Change</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        data.data.coins.map((data)=>(    
                            <tr key={data.uuid} >
                                <td width={100}><div><img src={data.iconUrl} alt="" /> <div className="cryptoName"><span>{data.name}</span> <span>{data.symbol}</span> </div></div></td>
                                <td>{'$ '+parseFloat(data.price).toFixed(3)}</td>
                                <td id="large">{'$ '+ dataFormat.format(parseInt(data.marketCap))}</td>
                                <td width={30}>{data.change + '%'}</td>
                            </tr>
                        ))}   
                    </tbody>
                </table>    
            </div>
        </div>
    )}
};

 