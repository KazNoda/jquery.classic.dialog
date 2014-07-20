(function($){

    /* 関数にオプション変数を渡す */
    $.fn.classicDialog = function(config){

        var CoreDialogClass = function() {

            var defaults = {
                autoOpen:       true,
                closeOnEscape:  true,
                height:         "auto",
                width:          300,
                minHeight:      150,
                minWidth:       150,
                modal:          false,
                

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

                if (this.options.autoOpen) {
                    this.show();
                }
            },
            _initialEvent : function() {
                var self = this;
                $(window).on("resize", function() {
                    self._resize();
                });

                $(document).on("click", ".dialogClose, .dialogOverlay", function(){
                    self.hide();
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

                var top = (wh - this.dialog.outerHeight()) / 2;
                var left = (ww - this.dialog.outerWidth()) / 2;
                
                console.log("top : ", top);
                console.log("left : ", left);

                //this.dialog.css("top", top);
                //this.dialog.css("left", left);

                // this.dialog.offset({
                //     "top" : top,
                //     "left" : left
                // });

                this.dialog.position({
                    my: "center",
                    at: "center",
                    of: window
                });
            },
            show : function() {
                console.log("show!");

                this._resize();
                this.dialog.show();
            },
            hide : function() {
                console.log("hide!");

                this.dialog.hide();
                this._removeOverlay();
            },
        };

        return this.each(function(){

            var dialog = new CoreDialogClass(this);
            return dialog;
        });
    };
})(jQuery);