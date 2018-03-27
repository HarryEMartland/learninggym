$(function () {

    $('select').material_select();
    $(".button-collapse").sideNav();


    $('.form-to-github-issue').on('submit', function (e) {
        e.preventDefault();
        var form = $(e.target);

        var title = form.find('.github-title').val();
        var labels = '';
        form.find('.github-label').each(function (i, e) {
            labels = $(e).val() + ',';
        });

        var body = '';
        form.find('.github-field').each(function (i, e) {
            var input = $(e);
            var name = input.attr('name');
            var value = input.val();
            if (name && value && value !== '') {
                body = body + name + ': ' + value + "%0A";
            }
        });

        var url = 'https://github.com/HarryEMartland/learninggym/issues/new?' +
            'title=' + title +
            '&body=' + body +
            '&labels=' + labels;

        window.open(url, '_blank');
    })
});