sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
    function (Controller) {
        "use strict";

        return Controller.extend("packinvoice.invoices.controller.MainView", {
            onInit: function () {
                const oJSONModel = new sap.ui.model.json.JSONModel();
                const oView = this.getView();
                oJSONModel.loadData("./model/SelectionScreenMenu.json");
                oView.setModel(oJSONModel, "selectionScreen");
            },

            onFilter: function(oEvent) {
            },
            onClearFilter: function() {
                //una vista puede tener muchos modelos
                //La vista interpreta el modelo y se actualiza
                const oModelSelScreen = this.getView().getModel("selectionScreen"); 
                //CountryKey es la clave que se actualiza en el modelo SelectionScreenMenu
                oModelSelScreen.setProperty("/CountryKey", "");
            }
        });
    });
