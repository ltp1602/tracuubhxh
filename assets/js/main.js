$(document).ready(function() {
    $('#customRange1').on('input', function() {
        var value = $(this).val();
        $('#rangeValue').text(formatNumber(value)+'đ/tháng.');
    });
    $('#genderToggle').click(function() {
        var isChecked = $(this).attr('data-checked') === 'true';
        $(this).attr('data-checked', !isChecked);
        $(this).attr('aria-checked', !isChecked);
    });
});

function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
