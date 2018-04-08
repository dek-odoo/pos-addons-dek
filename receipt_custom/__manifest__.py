# -*- coding: utf-8 -*-
{
    'name': "receipt_custom",

    'summary': """
        Allow to print one product, one receipt, one unit - one receipt """,

    'description': """
        Receipt Per Product
        Receipt Per single unit sell

        Use Case:
            A counter distributes coupans for several shops, customer can go to the shop and receive item to purchase
    """,

    'category': 'Point Of Sale',
    'version': '0.1',

    'depends': ['base', 'point_of_sale'],
    'qweb': ['static/src/xml/receipt_custom.xml'],
    'data': [
        # 'security/ir.model.access.csv',
        'views/views.xml',
    ],
}
