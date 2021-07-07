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
                //se obtiene vista actual                
                const oView = this.getView();
                //se establece desde donde se toman los  valores del modelo
                oJSONModel.loadData("./model/SelectionScreenMenu.json");
                //se asigna un nombre al modelo
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
                //Se inicializa valor de ShipName
                oModelSelScreen.setProperty("/ShipName", "");
                //Se inicializa valor de CountryKey
                oModelSelScreen.setProperty("/CountryKey", "");
            }
        });
    });
