sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.ui.model.Filter} Filter
     * @param {typeof sap.ui.model.FilterOperator} FilterOperator
	 */
    function (Controller, Filter, FilterOperator) {
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

                const oData = this.getView().getModel("selectionScreen").getData();

                let filters = [];

                if (oData.ShipName !== "") {
                    //Se añade un valor de filtro de ShipName
                    filters.push(new Filter("ShipName", FilterOperator.Contains, oData.ShipName));
                }

                if (oData.CountryKey !== "") {
                    //Se añade un valor de filtro de pais                    
                    filters.push(new Filter("Country", FilterOperator.EQ, oData.CountryKey));
                }

                //Se obtiene listado de facturas        
                const oList = this.getView().byId("invoiceList");
                //del listado se obtiene los items
                const oBinding = oList.getBinding("items");
                //Se aplica filtro a los items
                oBinding.filter(filters);

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

                //Se obtiene listado de facturas
                const oList = this.getView().byId("invoiceList");
                //del listado se obtiene los items
                const oBinding = oList.getBinding("items");
                //se inicializa listado asignando filtro vacio                
                oBinding.filter([]);
            }
        });
    });
