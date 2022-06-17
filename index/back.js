let tabela, index;

function inserir(item, descricao, quantidade, valor) {
    tabela = document.getElementById("tabela");
    var qtdlLinhas = tabela.rows.length;
    var linha = tabela.insertRow(qtdlLinhas);
    var linhaParam;


    var cellItem = linha.insertCell(0);
    var cellDesc = linha.insertCell(1);
    var cellQuantidade = linha.insertCell(2);
    var cellValor = linha.insertCell(3);

    cellItem.innerHTML = item;
    cellDesc.innerHTML = descricao;
    cellQuantidade.innerHTML = quantidade;
    cellValor.innerHTML = valor;

    preencheCamposForm();

}

function preencheCamposForm() {

    for (var i = 0; i < tabela.rows.length; i++) {
        tabela.rows[i].onclick = function () {
            index = this.rowIndex;
            document.getElementById("txtItem").value = tabela.rows[index].cells[0].innerText;
            document.getElementById("txtDesc").value = tabela.rows[index].cells[1].innerText;
            document.getElementById("txtQuantidade").value = tabela.rows[index].cells[2].innerText;
            document.getElementById("txtValor").value = tabela.rows[index].cells[3].innerText;
        }
    }
}

function delRegistro() {


    for (var i = 0; i < tabela.rows.length; i++) {
        if (index == i) {
            tabela.deleteRow(index);
            return;
        }
    }
}


// DAQUI PRA BAIXO É CÓDIGO TESTE

