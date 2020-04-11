#include <ESP8266WiFi.h>
#include "Gsender.h"

String apiKey = "ZA34D5XU9W24VWNM";     //  Enter your Write API key from ThingSpeak

const char *ssid =  "JioFi2_0C5BCB";     // replace with your wifi ssid and wpa2 key
const char *pass =  "u6qrx23m8h";
const char *server = "api.thingspeak.com";

WiFiClient client;

void setup()
{
  Serial.begin(115200);
  delay(10);

  Serial.println("Connecting to ");
  Serial.println(ssid);


  WiFi.begin(ssid, pass);

  while (WiFi.status() != WL_CONNECTED)
  {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.println("WiFi connected");
  pinMode(A0,INPUT);
}

void loop()
{

  int moisture=analogRead(A0);
  int value=(1024-moisture);
  if (client.connect(server, 80))  //   "184.106.153.149" or api.thingspeak.com
  {

    String postStr = apiKey;
    postStr += "&field1=";
    postStr += String(value);
    postStr += "\r\n\r\n";

    client.print("POST /update HTTP/1.1\n");
    client.print("Host: api.thingspeak.com\n");
    client.print("Connection: close\n");
    client.print("X-THINGSPEAKAPIKEY: " + apiKey + "\n");
    client.print("Content-Type: application/x-www-form-urlencoded\n");
    client.print("Content-Length: ");
    client.print(postStr.length());
    client.print("\n\n");
    client.print(postStr);

    Serial.print("Moisture content in Napkin:");
    Serial.println(1024-moisture);
  }
  client.stop();

  Serial.println("Waiting...");

  // thingspeak needs minimum 15 sec delay between updates, i've set it to 30 seconds
  delay(3000);



/// edit Gsender.h to configure sender account details 
//make sure  allow less secure apps is on gmail
// library from the project  https://www.instructables.com/id/ESP8266-GMail-Sender/
//


String a = String(value);

    Gsender *gsender = Gsender::Instance();    // Getting pointer to class instance
    String subject = "Subject is optional!";
    if(gsender->Subject(subject)->Send("boris.on@live.com", "Setup test"+ a)) { // to address
        Serial.println("Message send.");			// configure ubame pass on header file
    } else {
        Serial.print("Error sending message: ");
        Serial.println(gsender->getError());
    }



}



