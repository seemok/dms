(function ($) {
    $.fn.ajaxEdit = function (options, callback) {
        var defaults = { url: '', target: '.s-body', title: '', selected: '' };
        var opts = $.extend(defaults, options);
        $(opts.target).append('<div id="detail"/>').fadeOut('fast', function () {
            $('#detail').load(opts.url, function () {
                $('#detail .screen-name .title').text(opts.title);
                $(opts.target).fadeIn('fast');
                if (opts.selected.length > 0) {
                    $(opts.selected).focus();
                }
            });
        });
    };
    $.fn.ajaxSave = function (options, callback) {
        var defaults = { url: '', form: 'form', grid: '#TGrid' };
        var opts = $.extend(defaults, options);
        var data = $(opts.form).serialize();
        if ($(opts.form).valid()) {
            $.post(opts.url, data, function (result) {
                if (result.success) {
                    $.fn.ajaxCancel({ grid: opts.grid });
                    $.pnotify({
                        //title: 'success',
                        text: 'Data Saved!',
                        type: 'success',
                        animation: 'show',
                        delay: 2500
                    });
                }
                else {
                    console.log(JSON.stringify(result));
                    $.pnotify({
                        //title: 'error',
                        text: result.message,
                        type: 'error',
                        animation: 'show'
                    });
                }
            });
        };
    };
    $.fn.ajaxDelete = function (options, callback) {
        if (confirm("Are you sure that you want to delete this data?")) {
            var defaults = { url: '', data: {}, grid: '#TGrid' };
            var opts = $.extend(defaults, options);
            $.post(opts.url, opts.data, function (result) {
                if (result.success) {
                    $(opts.grid).data("tGrid").ajaxRequest();
                    $.pnotify({
                        //title: 'success',
                        text: 'Delete data success!',
                        type: 'success',
                        animation: 'show',
                        delay: 2500
                    });
                }
                else {
                    console.log(JSON.stringify(result));
                    $.pnotify({
                        //title: 'error',
                        text: result.message,
                        type: 'error',
                        animation: 'show'
                    });
                }
            });
        };
    };
    $.fn.ajaxCancel = function (options, callback) {
        var defaults = { grid: '#TGrid' };
        var opts = $.extend(defaults, options);
        $('#detail').fadeOut(function () {
            $(opts.grid).data("tGrid").ajaxRequest();
            $('#detail').remove();
            $('.s-body').fadeIn();
        });
    };
    $(function () {
        $.fn.cascade = function (options, callback) {
            var defaults = {};
            var opts = $.extend(defaults, options);

            return this.each(function () {
                $(this).change(function () {
                    var selectedValue = $(this).val();
                    var params = {};
                    params[opts.paramName] = selectedValue;
                    $.getJSON(opts.url, params, function (items) {
                        opts.childSelect.empty();
                        $.each(items, function (index, item) {
                            opts.childSelect.append($('<option/>').attr('value', item.Value).text(item.Text));
                        });
                    });
                });
            });
        };
    });
}(jQuery));
