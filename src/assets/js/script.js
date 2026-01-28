(function($) {
    $(document).ready(function() {
        $('#priceRange').each(function() {
            var slidervalue = $(this).attr('data-slider-value');
            var separator = slidervalue.indexOf(',');
            if (separator !== -1) {
                slidervalue = slidervalue.split(',');
                slidervalue.forEach(function(item, i, arr) {
                    arr[i] = parseFloat(item);
                });
            } else {
                slidervalue = parseFloat(slidervalue);
            }


            $(this).slider({
                formatter: function(slidervalue) {
                    return '$' + slidervalue;
                },
                min: parseFloat($(this).attr('data-slider-min')),
                max: parseFloat($(this).attr('data-slider-max')),
                range: $(this).attr('data-slider-range'),
                value: slidervalue,
                tooltip_split: $(this).attr('data-slider-tooltip_split'),
                tooltip: $(this).attr('data-slider-tooltip'),
                tooltip_position: 'bottom'
            });


            $("#priceRange").on('change', function() {
                var maxvalue = $(".tooltip-max .tooltip-inner").text().replace(/\$/g, "");
                maxparse = parseInt(maxvalue);
                minvalue = $(".tooltip-min .tooltip-inner").text().replace(/\$/g, "");
                minparse = parseInt(minvalue);
                switch (true) {
                    case (maxparse < $('#range1').attr('data-range')):
                        $('#range1').prop('checked', true);
                        $('#range2, #range3, #range4, #range5').prop('checked', false);
                        break;
                    case (maxparse < $('#range2').attr('data-range')):
                        $('#range1, #range2').prop('checked', true);
                        $('#range3, #range4, #range5').prop('checked', false);
                        break;
                    case (maxparse < $('#range3').attr('data-range')):
                        $('#range1, #range2, #range3').prop('checked', true);
                        $('#range4, #range5').prop('checked', false);
                        break;
                    case (maxparse < $('#range4').attr('data-range')):
                        $('#range1, #range2, #range3, #range4').prop('checked', true);
                        $('#range5').prop('checked', false);
                        break;
                    case (maxparse == $('#range5').attr('data-range')):
                        $('#range1, #range2, #range3, #range4, #range5').prop('checked', true);
                        break;
                        $('#range1').prop('checked', true);
                }

                if (minparse > $('#range1').attr('data-range')) {
                    $('#range1').prop('checked', false);
                }
                if (minparse >= $('#range2').attr('data-range')) {
                    $('#range1, #range2').prop('checked', false);
                }
                if (minparse >= $('#range3').attr('data-range')) {
                    $('#range1, #range2, #range3').prop('checked', false);
                }
                if (minparse >= $('#range4').attr('data-range')) {
                    $('#range1, #range2, #range3, #range4').prop('checked', false);
                }

            });


            //Onchange function checkbox on/off

        });


        $('.rangeCheck').on('change', function() {

                if ($(".rangeCheck:checked").length == 0) {
                    $('#range1').prop('checked', true);
                    $('.max-slider-handle').css("left", "17.3311%");
                    $('.slider-selection').css("width", "17.3311%");
                    $('.tooltip-max').css("left", "17.3311%");
                    $('.tooltip-max .tooltip-inner').html('$' + $('#range1').attr('data-range'));
                }

                if ($("#range1:checked").length == 1) {
                    $('.max-slider-handle').css("left", "17.3311%");
                    $('.slider-selection').css("width", "17.3311%");
                    $('.tooltip-max').css("left", "17.3311%");
                    $('.tooltip-max .tooltip-inner').html('$' + $('#range1').attr('data-range'));

                }


                if ($("#range1:checked,#range2:checked").length == 2) {
                    $('.max-slider-handle').css("left", "33.3311%");
                    $('.slider-selection').css("width", "33.3311%");
                    $('.tooltip-max').css("left", "33.3311%");
                    $('.tooltip-max .tooltip-inner').html('$' + $('#range2').attr('data-range'));

                } 
                

                if ($("#range1:checked,#range3:checked").length == 2) {
                    $('#range2').prop('checked', true);
                    $('.max-slider-handle').css("left", "66.6622%");
                    $('.slider-selection').css("width", "66.6622%");
                    $('.tooltip-max').css("left", "66.6622%");
                    $('.tooltip-max .tooltip-inner').html('$' + $('#range3').attr('data-range'));

                }
                

                if ($("#range1:checked,#range4:checked").length == 2) {
                    $('#range2, #range3').prop('checked', true);
                    $('.max-slider-handle').css("left", "93.3271%");
                    $('.slider-selection').css("width", "93.3271%");
                    $('.tooltip-max').css("left", "93.3271%");
                    $('.tooltip-max .tooltip-inner').html('$' + $('#range4').attr('data-range'));

                }
                

                if ($("#range1:checked,#range5:checked").length == 2) {
                    $('#range2, #range3, #range4').prop('checked', true);
                    $('.max-slider-handle').css("left", "100%");
                    $('.slider-selection').css("width", "100%");
                    $('.tooltip-max').css("left", "100%");
                    $('.tooltip-max .tooltip-inner').html('$' + $('#range5').attr('data-range'));

                }


                if ($("#range2:checked,#range4:checked").length == 2) {
                    $('#range3').prop('checked', true);
                    $('.max-slider-handle').css("left", "93.3271%");
                    $('.slider-selection').css("width", "93.3271%");
                    $('.tooltip-max').css("left", "93.3271%");
                    $('.tooltip-max .tooltip-inner').html('$' + $('#range4').attr('data-range'));
                }

                if ($("#range2:checked,#range5:checked").length == 2) {
                    $('#range3, #range4').prop('checked', true);
                    $('.max-slider-handle').css("left", "100%");
                    $('.slider-selection').css("width", "100%");
                    $('.tooltip-max').css("left", "100%");
                    $('.tooltip-max .tooltip-inner').html('$' + $('#range5').attr('data-range'));
                }

                if ($("#range3:checked,#range5:checked").length == 2) {
                    $('#range4').prop('checked', true);
                    $('.max-slider-handle').css("left", "100%");
                    $('.slider-selection').css("width", "100%");
                    $('.tooltip-max').css("left", "100%");
                    $('.tooltip-max .tooltip-inner').html('$' + $('#range5').attr('data-range'));

                }

                if($("#range1").is(':checked')){
                    $('.min-slider-handle').css("left", "0%");
                    $('.tooltip-min').css("left", "0%");
                    $('.tooltip-min .tooltip-inner').html('$' + $('#range1').attr('data-range'));
                    
                } else{
                    $('.min-slider-handle').css("left", "17.1429%");
                    $('.tooltip-min').css("left", "17.1429%");
                    $('.tooltip-min .tooltip-inner').html('$' + $('#range1').attr('data-range'));
                    
                }

                

            });


    });



})(jQuery);