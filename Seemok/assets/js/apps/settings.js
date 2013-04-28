var vm = {};

$(function () {
    $('#btnSave').click(function () {
        $.update('/mst-settings/save', vm);
    });

    $('#btnDetail').click(function () {
        $.warning('detail button clicked');
    });

    read();
})();

function read() {
    $.read('/mst-settings/getrecord', null, function (result) {
        if (result.success) {
            vm = result.data;
            $.applyBindings(vm);
        }
    });
}