function getUniquePropertyNames(rows){
    let keys = [];
    for(let row of rows){
        for(let key of row.cells.keys()){
            if (!keys.includes(key)) {
                keys.push(key);
            }
        }
    }
    return keys;
}


function createHeaderRowForTable(table, data) {
    let keys = getUniquePropertyNames(data);
    let headerRow = document.createElement("tr");
    for (let key of keys) {
        let headerCell = document.createElement("th");
        headerCell.textContent = key.toUpperCase();
        headerRow.appendChild(headerCell);
    }
    table.appendChild(headerRow);
}

function createDataRows(table, data, tableValueRenderer){    
    let keys = getUniquePropertyNames(data);
    for (let row of data) {
        let dataRow = document.createElement("tr");
        dataRow.className = row.rowClass;
        for (let key of keys) {
            let dataCell = document.createElement("td");
            dataCell.className = "td-" + key;
            tableValueRenderer(key, row.cells.get(key), dataCell, row.cells);
            dataRow.appendChild(dataCell);
        }
        table.appendChild(dataRow);
    }
}

const TableBuilder = {

    build: function(data, tableValueRenderer = (key, value, cell)=>{cell.textContent = value}){
        const table = document.createElement("table");
        createHeaderRowForTable(table, data);
        createDataRows(table, data, tableValueRenderer);
        return table;
    },
};	