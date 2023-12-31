#pragma once
#include <WiFi.h>
#include <Arduino.h>

namespace network
{
    const char *ssid = "DASS-CORP-VDC2";
    const char *password = "Vdc2@corp18";

    /*
        - Connect to the local wifi
        0 = Error connecting
        1 = Connection estaplished

        If an error is returned, you should wait a little before you retry.
    */
    int connectToWiFi();

    /*
        - Returns the current networking status
        0 = No connections found
        1 = Network connection estaplished
    */
    int getNetworkingStatus();
}