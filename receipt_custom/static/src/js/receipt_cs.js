odoo.define('point_of_sale_custom.receipt', function (require) {
	
	var screens = require('point_of_sale.screens');
	var core = require('web.core');
	var ajax = require('web.ajax');

	var QWeb = core.qweb;
	// inherit pos.config
	// if field "one unit sell" - "One receipt" is not set, the following customization should not take affect 
	// custom PosTicket
	screens.ReceiptScreenWidget.include({
		render_receipt:function(){

			// if one product, one receipt is not ticked
			if (this.pos.config.onereceipt_oneproduct == false){
				this._super();
				return;
			}

        	var order = this.pos.get_order();
        	var olines = order.get_orderlines();
        	this.$('.pos-receipt-container').html("");
        	for (var orderline_counter = 0; orderline_counter < olines.length; orderline_counter++) {
        		var orderline_qty = olines[orderline_counter].quantity;

        		// if one unit - one line is set
        		if(this.pos.config.oneunit_onereceipt == true){
	        		olines[orderline_counter].quantity = 1;
	        		olines[orderline_counter].quantityStr = "1";
        		}
        		else{
        			orderline_qty = 1;
        		}

        		for (var qty_counter = 0; qty_counter < orderline_qty; qty_counter++) {
			        ajax.jsonRpc('/receipt_custom/barcode_request', 'call', {
			            // 'post_id': this.element.data('id'),
			        }).then(function(data){
			        	console.log('return data ', data);
			        });

	        		var receiptcontainer = $('.pos-receipt-container');
		        	var total_receipts = receiptcontainer.length;
		        	var last_container = receiptcontainer[total_receipts-1];
		        	$(last_container).clone().insertAfter($(last_container));
					// this.$(last_container).html(QWeb.render('PosTicket',{
					
					this.$(last_container).html(QWeb.render('PosTicketCustom',{
					    widget:this,
					    order: order,
					    receipt: order.export_for_printing(),
					    orderlines: [olines[orderline_counter]],
					    paymentlines: order.get_paymentlines(),
					}));
        		}
        	}
		},
	});
});