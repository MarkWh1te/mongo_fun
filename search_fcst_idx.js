var i = 1 
var fields_list = ['trade_date','symbol','mkt_idx.tcap'];
var search_dict = {
        'trade_date':{
         '$gte':ISODate('20070101'),
         '$lte':ISODate('20170728')
    }
}
db.getCollection('Z3_EQUITY_HISTORY').find(
    search_dict,
    {}
).sort({'trade_date':i})
// db.getCollection('Z3_EQUITY_HISTORY').find(
// {
//     // 'symbol':/^3/,
//     'trade_date':{
//          '$gte':ISODate('20070101'),
//          '$lte':ISODate('20170728')
//     }
//     ''
//      },{
//      }
// ).sort({'trade_date':i})

