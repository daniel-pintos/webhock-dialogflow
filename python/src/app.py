import urllib
import json
import os
# HACK: classe Flask
from flask import Flask, request, make_response

app = Flask(__name__)


@app.route('/webhoock', methods=['POST'])
def webhoock():
    req = request.get_json(silent=True, force=True)
    print('Request' + json.dumps(req, indent=4))
    res = makeWebhookResult(req)
    res = json.dumps(res, indent=4)
    print(res)
    r = make_response(res)
    r.headers['Content-Type'] = 'application/json'


def makeWebhookResult(req): 
    if req.get("result").get('action') != "interest":
        return {}
    else:
        result = req.get("result")
        parameters = result.get("parameters")
        name = parameters.get("bank-none")
        bank = {
            'Federal Bank': '6.7%',
            'Andhra Bank': '6.7%',
            'Bandhan Bank': '7.15'
        }
        speech = "O Interesse é basicamente: " + name + "is" + str(bank)
        print("Response: " + speech)
        return {
            "speech": speech,
            "displayText": speech,
            "source": "BanckInterestRates"
        }


if __name__ == '__main__':
    port = int(os.getenv("PORT", 8080))
    print(" Inicilizando a aplicação na porta [%d]" % port)
    app.run(debug=True, port=port)
