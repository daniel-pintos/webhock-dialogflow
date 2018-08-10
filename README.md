# webhock-dialogflow

> Retorno de chamada de Web ou HTTP. - _impulso do API_.

É uma forma de recebimento de informações quando um evento acontece, normalmente, 2 sistemas de forma __passiva__.

## @Funcionamento:

* Json ou Xml vão ser fornecidos dados para que você possa utilizar em tempo real.
  * `application/x-www-form-urlencoded`
  * `multipart/form-data`

Vamos fazer com que o dialogflow funcione como um filtro (*capturando a intenção*). Que a mesma podemos fazer um webhock. 


#### @Ferramentas

| Campo | Funcionalidade |
| :------------- | :------------- |
| `ngrok` |      |
| `runscope` |      |

### @Protecção:

* Adicionando alguns componentes à URL - `auth = TK`
* Auth Basic - confirmação do token de autenticação com o pedido.
