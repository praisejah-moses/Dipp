import  useSWR  from "swr"

// CUSTOM HOOK TO GET CYPTO MARKET DATA FROM COINRANKING API
export  function getMarketData() {
    const config = {
        headers: {
            'x-access-token':'coinranking761788278eafec559006e3348aa520cc58359f8feac8d83f'
        }
    };

    // A WRAPPER FOR THE FETCH API
    const fetcher = (...arg) => fetch(...arg,config).then(res=>res.json())

    // USING NEXT useSWr HOOK TO QUERY AN ENDPOINT AND RETURNING THE DATA
    const {data,error, isLoading } = useSWR('https://api.coinranking.com/v2/stats',fetcher)

    return (
        {   data:data,
            error:error,
            isLoading:isLoading
        }
    )
};

// CUSTOM HOOK TO GET CRYPTO CURENCIES DATA FROM COINRANKING API
export  function getCryptos() {
    const config = {
        headers: {
            'x-access-token':'coinranking761788278eafec559006e3348aa520cc58359f8feac8d83f',
        }
    }

    // A WRAPPER FOR THE FETCH API
    const fetcher = (...arg) => fetch(...arg,config).then(res=>res.json())

    // USING NEXT useSWr HOOK TO QUERY AN ENDPOINT AND RETURNING THE DATA
    const {data,error,isLoading} = useSWR('https://api.coinranking.com/v2/coins',fetcher)

    return (
        {   data:data,
            error:error,
            isLoading:isLoading
        }
    )
};

// FUNCTION TO PARSE DATA FROM AN API AS INTEGER AND FORMAT IT AS COMPACT.
export  function formatToCompact (data) {
    const dataFormat = Intl.NumberFormat('en', { notation: 'compact',compactDisplay:'long' })
    
    // CONVERTING THE TOTAL MARKET CAP AND TOTAL MARKET VOLUME GOTTEN FROM COINRANKING API DATA TO INTEGERS
    let totalMarketCap = (parseInt(data.data.totalMarketCap))
    let totalMarketVolume= (parseInt(data.data.total24hVolume))

    // RETURNING THE INTEGERS IN COMPACT FORMAT
    return (
        {
            totalMarketCap:(dataFormat.format(totalMarketCap)),
            totalMarketVolume:(dataFormat.format(totalMarketVolume))
        }
    )
};





