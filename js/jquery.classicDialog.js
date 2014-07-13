(function($){

    /* 関数にオプション変数を渡す */
    $.fn.classicDialog = function(config){

        var CoreDialogClass = function() {

            var defaults = {
                appendTo:       "body",
                autoOpen:       true,
                buttons:        [],
                closeOnEscape:  true,
                dialogClass:    "",
                hide:           null,
                height:         "auto",
                maxHeight:      null,
                maxWidth:       null,
                minHeight:      150,
                minWidth:       150,
                modal:          false,
                show:           null,
                width:          300,

                // callbacks
                beforeClose:    null,
                close:          null,
                open:           null
            };

            this.options = $.extend(defaults, config);

            this.init.apply(this, arguments);
        };

        CoreDialogClass.prototype = {
            init : function() {
                this._createOverlay();
            },
            _createOverlay : function() {
                console.log("create overlay");
            },
            show : function() {
                console.log("show!");
            },
            hide : function() {
                console.log("hide!");
            },
        };

        /* 一致した要素上で繰り返す */
        return this.each(function(i){
            var dialog = new CoreDialogClass(i);
            dialog.show();
        });
    };
})(jQuery);