#include <Arduino.h>
#include <ESP32httpUpdate.h>

const char* ssid =     "";   
const char* password = ""; 

WiFiClient client;
HTTPClient http;

void setup() {
  
  Serial.begin(9600);
  
  Serial.println("Rodando versão antiga!!");
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(1000);
  }

  t_httpUpdate_return ret = ESPhttpUpdate.update("http://10.108.10.48:3333/update","1.0");
  switch(ret) {
      case HTTP_UPDATE_FAILED:
          Serial.printf("[update] Update failed (%d): %s", ESPhttpUpdate.getLastError(), ESPhttpUpdate.getLastErrorString().c_str());
          break;
      case HTTP_UPDATE_NO_UPDATES:
          Serial.println("[update] Update no Update.");
          break;
      case HTTP_UPDATE_OK:
          Serial.println("[update] Update ok.");
          break;
  }
}
void loop() {
}