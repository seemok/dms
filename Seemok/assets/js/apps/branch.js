var vm = {};

$(function () {
    $('#btnAdd').click(function () {
        $.showDetail();
    });

    $('#btnEdit').click(function () {
        var row = $.selectedRow();
        if (row != null) {
            $.showDetail();
            read(row.BranID);
        }
    });

    $('#TGrid').dblclick(function () {
        $('#btnEdit').click();
    });

    $('#btnDelete').click(function () {
        var row = $.selectedRow();
        if (row != null) {
            $.remove('/mst-cabang/remove', { id: row.BranID });
        }
    });

    $('#btnUpdate').click(function () {
        $.update('/mst-cabang/save', vm, function (result) {
            if (result.success) {
                $.showList();
                var row = $.selectedRow();
            }
        });
    });

    $('#btnCancel').click(function () {
        $.showList();
    });
})();

function read(id) {
    $.read('/mst-cabang/getrecord', { id: id }, function (result) {
        if (result.success) {
            vm = result.data;
            $.applyBindings(vm);
        }
    });
}
