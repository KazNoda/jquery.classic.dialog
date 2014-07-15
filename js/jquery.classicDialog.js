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

            this.dialog = null;

            this.options = $.extend(defaults, config);

            this.init.apply(this, arguments);
        };

        CoreDialogClass.prototype = {
            init : function(elem) {
                this.dialog = $(elem);
                this._createOverlay();
                this._initialEvent();
            },
            _initialEvent : function() {
                var self = this;
                $(window).on("resize", function() {
                    self._resize();
                });
            },
            _createOverlay : function() {
                $("<div/>")
                    .addClass("dialogOverlay")
                    .appendTo($("body"));
            },
            _removeOverlay : function() {
                $(".dialogOverlay").remove();
            },
            _resize: function() {

                var ww = window.innerWidth;
                var wh = window.innerHeight;

                console.log("ww : ", ww);
                console.log("wh : ", wh);

                console.log("dialog width : ", this.dialog.width());
                console.log("dialog height : ", this.dialog.height());

                var top = (wh - this.dialog.height()) / 2;
                var left = (ww - this.dialog.width()) / 2;
                
                console.log("top : ", top);
                console.log("left : ", left);

                this.dialog.css("top", top);
                this.dialog.css("left", left);
            },
            show : function() {
                console.log("show!");

                if (this.options.autoOpen) {
                    this._resize();
                    this.dialog.show();
                }
            },
            hide : function() {
                console.log("hide!");

                // ダイアログを非表示。
                // オーバレイを消す。
            },
        };

        /* 一致した要素上で繰り返す */
        return this.each(function(){
            var dialog = new CoreDialogClass(this);
            dialog.show();
        });
    };
})(jQuery);