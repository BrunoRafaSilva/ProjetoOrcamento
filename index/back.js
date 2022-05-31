let pessoas, index;

function inserir(item,descricao,quantidade,valor) {
    pessoas = document.getElementById("tabela");
    var qtdlLinhas = pessoas.rows.length;
    var linha = pessoas.insertRow(qtdlLinhas);
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

    for (var i = 0; i < pessoas.rows.length; i++) {
        pessoas.rows[i].onclick = function () {
            index = this.rowIndex;
            document.getElementById("txtItem").value = pessoas.rows[index].cells[0].innerText;
            document.getElementById("txtDesc").value = pessoas.rows[index].cells[1].innerText;
            document.getElementById("txtQuantidade").value = pessoas.rows[index].cells[2].innerText;
            document.getElementById("txtValor").value = pessoas.rows[index].cells[3].innerText;
        }
    }
}

function delRegistro() {

    for (var i = 0; i < pessoas.rows.length; i++) {
        if (index == i) {
            pessoas.deleteRow(index);
            return;
        }
    }
}