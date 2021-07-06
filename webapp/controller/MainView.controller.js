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
                //Se define un objeto modelo JSON
                const oJSONModel = new sap.ui.model.json.JSONModel();
                const oView = this.getView();
                //el modelo es vinculado para que tome valor de un fichero 
                oJSONModel.loadData("./model/SelectionScreenMenu.json");
                //el modelo se llamará
                oView.setModel(oJSONModel, "selectionScreen");
            },

            onFilter: function (oEvent) {
            },
            onClearFilter: function () {
                //de todos los modelos que puede tener una vista
                //obtenemos el que nos interesa
                const oModelSelScreen = this.getView().getModel("selectionScreen");
                //una vista puede tener muchos modelos
                //La vista interpreta el modelo y se actualiza                
                //CountryKey es la clave que se actualiza en el modelo SelectionScreenMenu
                oModelSelScreen.setProperty("/ShipName", "");
                oModelSelScreen.setProperty("/CountryKey", "");
            }
        });
    });
