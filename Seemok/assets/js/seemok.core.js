seemok = {};
seemok.basepage = 'http://117.102.250.189/seemok/rbbr';
seemok.basepage = '';

seemok.vm = {
    menus: ko.observableArray(),
    navlist: ko.observableArray(),
    buttons: ko.observableArray(),
    userlogin: ko.observable('Developer'),
    navclick: function (e) {
        window.location.href = '#' + e.MenuId;
    }
};

seemok.initial = function () {
    $.post(seemok.basepage + '/Layout/MenuList', function (result) {
        if (result.success) {
            $.each(result.data, function (index, menu) {
                menu.MenuUrl = seemok.basepage + menu.MenuUrl;
                seemok.vm.menus.push(menu);
            });
            $('#sgheader .hinfo').show();
            $('#sgheader').addClass('showhinfo');
        }
    });

    $(window).hashChange(function (e) {
        $.loadContent(e);
    })

    ko.applyBindings(seemok.vm);
}

seemok.sidebar = function (id) {
    $.post(seemok.basepage + '/Layout/NavList', { id: id }, function (result) {
        if (result.success) {
            $.each(result.data, function (index, menu) {
                seemok.vm.navlist.push(menu);
            });
        }
    });
}

seemok.initial();

(function ($) {
    $.extend({
        loadContent: function (id) {
            console.log(id);

            $.post(seemok.basepage + '/Layout/GetContent', { id: id }, function (result) {
                if (result.success && result.data.MenuUrl) {
                    var url = seemok.basepage + result.data.MenuUrl;
                    console.log(url);
                    $('#formMain').load(url, function (response, status, xhr) {
                        if (status == 'success') {
                            var self = $('.nav-menu .' + id);
                            self.parent().children().removeClass('active');
                            self.addClass('active');
                        }
                    });
                }
            });
        },
        info: function (message) {
            $('.alert.alert-success').text(message);
            $('.alert.alert-success').fadeIn('slow');
            setTimeout(function () {
                $('.alert.alert-success').fadeOut('slow')
            }, 1000);
        },
        warning: function (message) {
            $('.alert.alert-error').text(message);
            $('.alert.alert-error').fadeIn('slow');
            setTimeout(function () {
                $('.alert.alert-error').fadeOut('slow')
            }, 1000);
        }
    });
})(jQuery);