# -*- coding: utf-8 -*-

from odoo import models, fields, api


class PosConfig(models.Model):
    _inherit = 'pos.config'

    onereceipt_oneproduct = fields.Boolean('Receipt Per Product')
    oneunit_onereceipt = fields.Boolean('Receipt Per 1 Unit')
    issue_barcode = fields.Boolean('Issue Barcode for verification')
