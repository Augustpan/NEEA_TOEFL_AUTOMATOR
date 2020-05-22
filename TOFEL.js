function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

city = document.getElementById("centerProvinceCity")
day = document.getElementById("testDays")
btn_query = document.getElementById("btnQuerySeat")

for (i = 1; i < city.options.length; ++i) {
    city.options[i].selected = true
    //for (j = 1; j < day.options.length; ++j) {
    for (j = 1; j < 18; ++j) {
        day.options[j].selected = true
        btn_query.click()
        
        await sleep(1500)
        tables = document.getElementsByClassName("table table-bordered table-striped")
        if (tables.length == 1) {
            tb = tables[0]
            for (row = 2; row < tb.rows.length; ++row) {
                if (tb.rows[row].cells[3].innerText == "有名额") {
                    console.log(
                        city.options[i].innerText,
                        day.options[j].innerText,
                        tb.rows[row].cells[1].innerText,
                        tb.rows[row].cells[2].innerText,
                        tb.rows[row].cells[3].innerText)
                }
            }
        }
    }
}
