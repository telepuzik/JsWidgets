/**
 * Created by IMELNIKOV on 15.12.2014.
 */
function WgStructureCreate(element){
    require(['jquery', 'jqueryui'], function() {
        //init
        $.widget ("custom.structure", {
            _create: function() {
                var name = this.options.name;
                this.element
                    .addClass("widget")
                    .append("<a href='/'>" + name + "</a>")
                    .click (function(){
                        alert  ("Calm down. Nothing to see here.");
                });
            }
        });

        //create
        element.structure({ name: "Структура компании"});
    });
}
