# -*- coding: utf-8 -*-
import cgi
import json

from openerp.http import Controller, route


class BarcodeHandler(Controller):

    @route('/receipt_custom/barcode_request', type='json', auth='user')
    def barcode_request(self):
        return "In development"
        import_id = int(import_id)

        written = req.session.model('base_import.import').write(import_id, {
            'file': file.read(),
            'file_name': file.filename,
            'file_type': file.content_type,
        }, req.context)

        return 'window.top.%s(%s)' % (
            cgi.escape(jsonp), json.dumps({'result': written}))
