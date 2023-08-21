# Whatsapp_Send_Api Backend

Backend do envio de messagem (whatsapp_send_api) desenvolvido em node e javascript.

## Deploy

```bash
# Conectar no servidor via ssh
ssh root@10.0.0.211
pass L2015!****

# Atualizar o repositório do projeto
git pull

# Clonar o repositório do projeto
git clone git@github.com:expfig/figsat-backend.git

# Ir pro diretório do projeto
cd /var/projects/whatsapp_send_api

# Instalar as dependências
yarn add

# Checar o arquivo .env
cat .env

# Fazer o build da aplicação
yarn run build

# Iniciar ou reiniciar via pm2 o servidor
pm2 start index.js --name whatsapp_send_api
pm2 restart whatsapp_send_api

# Verificar o status do servidor
pm2 status
pm2 monit

# Verificar manualmente se a aplicação está online
http://10.0.0.211:1718
http://grupofigueiredo.com.br:1718
```
