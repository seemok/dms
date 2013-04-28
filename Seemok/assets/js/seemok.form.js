(function ($) {
    this.tgridRow = {};

    $.extend({
        read: function (url, data, callback) {
            var url = seemok.basepage + url;

            $.post(url, data, function (result) {
                if (result.success) {
                    callback(result);
                }
            });
        },
        update: function (url, data, callback) {
            var url = seemok.basepage + url;

            $.post(url, data, function (result) {
                if (result.success) {
                    $.info('data saved');
                }
                else {
                    $.warning('error found');
                }
                callback(result);
            });
        },
        remove: function (url, data, callback) {
            var url = seemok.basepage + url;

            if (confirm("Are you sure that you want to delete this data?")) {
                $.post(url, data, function (result) {
                    if (result.success) {
                        $.info('data removed');
                        $('#TGrid').data("tGrid").ajaxRequest();
                    }
                    else {
                        $.warning('error found');
                    }
                });
            };
        },
        applyBindings: function (data) {
            ko.applyBindings(data, document.getElementById('formMain'));
        },
        rowChanged: function (e) {
            tgridRow = e.row;
        },
        selectedRow: function () {
            return $('#TGrid').data("tGrid").dataItem(tgridRow);
        },
        showDetail: function () {
            $('.form-list').hide();
            $('.form-detail').show();
        },
        showList: function () {
            $('.form-detail').hide();
            $('.form-list').show();
            $('#TGrid').data("tGrid").ajaxRequest();
        },
    });
})(jQuery);