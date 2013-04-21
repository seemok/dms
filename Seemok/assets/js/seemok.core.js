(function () {
    var namespace = function (name) {
        var namespaces = name.split('.'),
			namespace = window,
			index;
        for (index = 0; index < namespaces.length; index += 1) {
            namespace = namespace[namespaces[index]] = namespace[namespaces[index]] || {};
        }
        return namespace;
    };

    namespace("seemok");
    namespace("seemok.form");
}());

seemok.initial = function () {
    $.post('/Layout/MenuList', function (result) {
        var self = $('#sgheader .hmenu ul');
        $.each(result, function (index, item) {
            var className = '';
            if (window.location.pathname == item.MenuUrl) {
                className = 'active';
            }
            self.append('<li><a href=\'' + item.MenuUrl + '\' class=\'' + className + '\'>' + item.MenuName + '</a></li>');
        });
        $('#sgheader .hinfo').show();
        $('#sgheader').addClass('showhinfo');
    });
}

seemok.initial();
