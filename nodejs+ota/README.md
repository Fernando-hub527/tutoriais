# OTA + NODEJS + POSTEGRESQL

*Essa aplicação tem como objetivo demonstrar como realizar o gerenciamento do firmware de um microcontrolador usando tecnologias como nodejs e postegres. No formato atual a aplicação realiza a gravação de um binário no banco e disponibiliza um endpoint para que o microcontrolador possa fazer a consulta desse firmware para se atualizar. Posteriomente estarei desenvolvendo a tela para que seja realizado o envio do firmware para o servidor, demonstrando assim o fluxo completo para realizar a atualização*


# Iniciando aplicação
 
O primeiro passo é configurar o banco de dados, por sorte estamos usando o docker, então caso você ainda não o tenha instalado pode usar as instruções da página oficial para instalar. Com tudo configurado basta rodar o comando: 

sudo docker run -d -p 5432:5432 -e POSTGRES_USER=test -e POSTGRES_PASSWORD=test -e POSTGRES_DB=test postgres

O próximo passo é realizar a configuração do servidor, para isso basta ir até a pasta "nodejs+ota/app" e rodar os comandos a seguir no terminal:

**npm install**
**npm run dev**

Após isso você deve abrir a pasta "nodejs+ota/firmware" usando o plugin do plataformio do vscode e realizar envio do código para o seu esp32; antes disso, não se esqueça de atualizar as informações da sua rede e atualizar o ip do seu computador no código que será enviado.