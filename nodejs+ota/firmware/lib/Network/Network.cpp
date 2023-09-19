#include "Network.h"

namespace network
{
    int connectToWiFi()
    {
        WiFi.begin(ssid, password);
        // Serial.println("conectando");
        log_d("Connecting");
        if (WiFi.status() != WL_CONNECTED)
        {
            return 0;
        }
        return 1;
    }

    int getNetworkingStatus()
    {
        if (WiFi.status() != WL_CONNECTED)
        {
            return 0;
        }
        // Serial.println("Connected to WiFi network");
        log_i("Connected to WiFi network");
        return 1;
    }
}