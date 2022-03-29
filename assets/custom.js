// PRELOADER JS
$(window).on('load', function () {
  $('#preloaderInner').fadeOut();
  $('#preloaderMain').delay(350).fadeOut('slow');
});
// PRELOADER JS END

$( document ).ready(function() {
  
	// DETAILS AND SUMMARY TAG JS
      // Fetch all the details element.
    const details = document.querySelectorAll(".product__accordion details");

    // Add the onclick listeners.
    details.forEach((targetDetail) => {
      targetDetail.addEventListener("click", () => {
        // Close all the details that are not targetDetail.
        details.forEach((detail) => {
          if (detail !== targetDetail) {
            detail.removeAttribute("open");
          }
        });
      });
    });
  
	// WINDOW RESIZE JS
  	$(window).on('resize', function(){
        $('.slick-slider').slick('setPosition');
    });
  
  	// ANNOUNCEMENT BAR CLOSE JS
    $( ".bar_close_icon" ).click(function() {
      $("#shopify-section-announcement-bar").slideUp(300, function() {
        $("#shopify-section-announcement-bar").remove();
      });      
    });

	// PRODUCT MOBILE SLIDER
    $('.product_thumbnail_slider').slick({
      dots: true,
      infinite: false,
      arrows:true,
      prevArrow: '<button class="slide-arrow prev-arrow"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
      nextArrow: '<button class="slide-arrow next-arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
      mobileFirst: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [               
        {
          breakpoint: 767,
          settings: 'unslick'
        }        
      ]
    });
  
    // SLICK LOGO SLIDER
    $('.logo_column_row').slick({
      dots: true,
      infinite: true,
      arrows:false,
      speed: 300,
      autoplay:true,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [                
        {
          breakpoint: 767,
          settings: {            
            slidesToShow: 2,            
            slidesToScroll: 1
          }
        }        
      ]
    });
  
  	// KIT SLIDER
    $('.product_kit_row').slick({
      dots: true,
      infinite: true,
      arrows:false,      
      mobileFirst: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [               
        {
          breakpoint: 767,
          settings: 'unslick'
        }        
      ]
    });
  
  	// PRODUCT REVIEW SLIDER
    $('.product_review_row').slick({
      dots: true,
      infinite: true,
      arrows:false,            
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
  	  centerPadding: '20px',
      responsive: [  
        {
          breakpoint: 990,
          settings: {
            infinite: false,
            centerMode: false,            
            slidesToShow: 2.5,            
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,            
            slidesToScroll: 1
          }
        },
        {
            breakpoint: 9999,
            settings: "unslick"
        }    
      ]
    });
  
  // VIDEO SLIDER
  $('.video_slider_row').slick({
      dots: true,
      infinite: true,
      arrows:false,  
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [        
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            rows:2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,            
            slidesToScroll: 1
          }
        }        
      ]
    });
  
  // PRODUCT REVIEW SLIDER
    $('.product_review_slider').slick({
      dots: true,
      infinite: true,
      arrows:false,
      speed: 300,
      autoplay:true,
      centerMode: true,
      centerPadding: '10%',
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [        
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }        
      ]
    });

    // PRODUCT SECTION POSITION JS
	var win = $(this);
    if (win.width() <= 991) {
      $(".product_other_info").insertAfter(".product__info-container");
      $(".cart_items_option").insertAfter(".cart_grid_column.cart_total_column");      
    }
	$(window).on('resize', function (){
        var win = $(this);
        if (win.width() <= 991) {
          $(".product_other_info").insertAfter(".product__info-container");
          $(".cart_items_option").insertAfter(".cart_grid_column.cart_total_column");      
        }
    });

});


// SHIPPING JS

"object" == typeof Countries &&
    (Countries.updateProvinceLabel = function (e, t) {
        if ("string" == typeof e && Countries[e] && Countries[e].provinces) {
            if ("object" != typeof t && ((t = document.getElementById("address_province_label")), null === t)) return;
            t.innerHTML = Countries[e].label;
            var r = jQuery(t).parent();
            r.find("select");
            r.find(".custom-style-select-box-inner").html(Countries[e].provinces[0]);
        }
    }),
    "undefined" == typeof Shopify.Cart && (Shopify.Cart = {}),
    (Shopify.Cart.ShippingCalculator = (function () {
        var _config = { submitButton: "Calculate shipping", submitButtonDisabled: "Calculating...", templateId: "shipping-calculator-response-template", wrapperId: "wrapper-response", customerIsLoggedIn: !1, moneyFormat: "${{amount}}" },
            _render = function (e) {
                var t = jQuery("#" + _config.templateId),
                    r = jQuery("#" + _config.wrapperId);
                if (t.length && r.length) {
                    var templateSettings = { evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g };
                    var n = Handlebars.compile(jQuery.trim(t.text())),
                        a = n(e);
                    if ((jQuery(a).appendTo(r), "undefined" != typeof Currency && "function" == typeof Currency.convertAll)) {
                        var i = "";
                        jQuery("[name=currencies]").size() ? (i = jQuery("[name=currencies]").val()) : jQuery("#currencies span.selected").size() && (i = jQuery("#currencies span.selected").attr("data-currency")),
                            "" !== i && Currency.convertAll(shopCurrency, i, "#wrapper-response span.money, #estimated-shipping span.money");
                    }
                }
            },
            _enableButtons = function () {
                jQuery(".get-rates").removeAttr("disabled").removeClass("disabled").val(_config.submitButton);
            },
            _disableButtons = function () {
                jQuery(".get-rates").val(_config.submitButtonDisabled).attr("disabled", "disabled").addClass("disabled");
            },
            _getCartShippingRatesForDestination = function (e) {
                var t = { type: "POST", url: "/cart/prepare_shipping_rates", data: jQuery.param({ shipping_address: e }), success: _pollForCartShippingRatesForDestination(e), error: _onError };
                jQuery.ajax(t);
            },
            _pollForCartShippingRatesForDestination = function (e) {
                var t = function () {
                    jQuery.ajax("/cart/async_shipping_rates", {
                        dataType: "json",
                        success: function (r, n, a) {
                            200 === a.status ? _onCartShippingRatesUpdate(r.shipping_rates, e) : setTimeout(t, 500);
                        },
                        error: _onError,
                    });
                };
                return t;
            },
            _fullMessagesFromErrors = function (e) {
                var t = [];
                return (
                    jQuery.each(e, function (e, r) {
                        jQuery.each(r, function (r, n) {
                            t.push(e + " " + n);
                        });
                    }),
                    t
                );
            },
            _onError = function (XMLHttpRequest, textStatus) {
                jQuery("#estimated-shipping").hide(), jQuery("#estimated-shipping em").empty(), _enableButtons();
                var feedback = "",
                    data = eval("(" + XMLHttpRequest.responseText + ")");
                (feedback = data.message ? data.message + "(" + data.status + "): " + data.description : "Error : " + _fullMessagesFromErrors(data).join("; ") + "."),
                    "Error : country is not supported." === feedback && (feedback = "We do not ship to this destination."),
                    _render({ rates: [], errorFeedback: feedback, success: !1 }),
                    jQuery("#" + _config.wrapperId).show();
            },
            _onCartShippingRatesUpdate = function (e, t) {
                _enableButtons();
                var r = "";
                if ((t.zip && (r += t.zip + ", "), t.province && (r += t.province + ", "), (r += t.country), e.length)) {
                    "0.00" == e[0].price ? jQuery("#estimated-shipping em").html("FREE") : jQuery("#estimated-shipping em").html(_formatRate(e[0].price));
                    for (var n = 0; n < e.length; n++) e[n].price = _formatRate(e[n].price);
                }
                _render({ rates: e, address: r, success: !0 }), jQuery("#" + _config.wrapperId + ", #estimated-shipping").fadeIn();
            },
            _formatRate = function (e) {
                function t(e, t) {
                    return "undefined" == typeof e ? t : e;
                }
                function r(e, r, n, a) {
                    if (((r = t(r, 2)), (n = t(n, ",")), (a = t(a, ".")), isNaN(e) || null == e)) return 0;
                    e = (e / 100).toFixed(r);
                    var i = e.split("."),
                        o = i[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + n),
                        s = i[1] ? a + i[1] : "";
                    return o + s;
                }
                if ("function" == typeof Shopify.formatMoney) return Shopify.formatMoney(e, _config.moneyFormat);
                "string" == typeof e && (e = e.replace(".", ""));
                var n = "",
                    a = /\{\{\s*(\w+)\s*\}\}/,
                    i = _config.moneyFormat;
                switch (i.match(a)[1]) {
                    case "amount":
                        n = r(e, 2);
                        break;
                    case "amount_no_decimals":
                        n = r(e, 0);
                        break;
                    case "amount_with_comma_separator":
                        n = r(e, 2, ".", ",");
                        break;
                    case "amount_no_decimals_with_comma_separator":
                        n = r(e, 0, ".", ",");
                }
                return i.replace(a, n);
            };
        return (
            (_init = function () {
                new Shopify.CountryProvinceSelector("address_country", "address_province", { hideElement: "address_province_container" });
                var e = jQuery("#address_country"),
                    t = jQuery("#address_province_label").get(0);
                "undefined" != typeof Countries &&
                    (Countries.updateProvinceLabel(e.val(), t),
                    e.change(function () {
                        Countries.updateProvinceLabel(e.val(), t);
                    })),
                    jQuery(".get-rates").click(function () {
                        _disableButtons(),
                            jQuery("#" + _config.wrapperId)
                                .empty()
                                .hide();
                        var e = {};
                        (e.zip = jQuery("#address_zip").val() || ""), (e.country = jQuery("#address_country").val() || ""), (e.province = jQuery("#address_province").val() || ""), _getCartShippingRatesForDestination(e);
                    }),
                    _config.customerIsLoggedIn && jQuery(".get-rates:eq(0)").trigger("click");
            }),
            {
                show: function (e) {
                    (e = e || {}),
                        jQuery.extend(_config, e),
                        jQuery(function () {
                            _init();
                        });
                },
                getConfig: function () {
                    return _config;
                },
                formatRate: function (e) {
                    return _formatRate(e);
                },
            }
        );
    })());

// SHIPPING JS END



// SHIPPING JS
$( document ).ready(function() {
  Shopify.Cart.ShippingCalculator.show({
    submitButton: shippingString.shippingCalcSubmitButton,
    submitButtonDisabled: shippingString.shippingCalcSubmitButtonDisabled,
    customerIsLoggedIn: shippingString.shippingCalcCustomerIsLoggedIn,
    moneyFormat: shippingString.shippingCalcMoneyFormat                                     
  });
});
// SHIPPING JS END