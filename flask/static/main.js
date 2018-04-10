var data = [
    {'location_name': 'Tower 49', 'sku': '3-6'},
    {'location_name': 'X', 'sku': 'Y'}
]


}

d = d3.json('http://127.0.0.1:5000/other_page', function(error, data) {

    // data = {
    //      {'location_name': 'Tower 49', 'sku': 5-6 desks', ...}}
    // }
    // make pretty and useful viz
    console.log(data)
//    var page_data = []
//    for (i=0; i < data.length; i++) {
//        if data[i] == d3.select('object').text {
//            page_data.append(data[i])
//        }
//    }


    })
