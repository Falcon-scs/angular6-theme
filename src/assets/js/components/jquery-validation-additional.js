$(function(e) {
    $("#datePickerInput").datepicker({
        format: "mm-dd-yyyy",
        autoclose: true,
        orientation: "bottom",
        templates: {
            leftArrow: '<i class="icon dripicons-chevron-left"></i>',
            rightArrow: '<i class="icon dripicons-chevron-right"></i>'
        }
    });
});