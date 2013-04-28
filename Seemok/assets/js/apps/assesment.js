﻿var vm = {};

$(function () {
    $('#btnEdit').click(function () {
        var row = $.selectedRow();
        if (row != null) {
            $.showDetail();
            read(row.AsfID);
        }
    });

    $('#TGrid').dblclick(function () {
        $('#btnEdit').click();
    });

    $('#btnUpdate').click(function () {
        $.update('/mst-assessfactor/save', vm, function (result) {
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
    $.read('/mst-assessfactor/getrecord', { id: id }, function (result) {
        if (result.success) {
            console.log(result.data);
            vm = result.data;
            $.applyBindings(vm);
        }
    });
}
